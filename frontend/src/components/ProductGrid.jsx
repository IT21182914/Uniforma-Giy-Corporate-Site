import { useState, useMemo } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import Badge from "./Badge";
import { PRODUCT_CATEGORIES } from "../lib/constants";
import { classNames } from "../lib/classNames";
import translations from "../data/translations.json";

const ProductGrid = ({
  products = [],
  language = "TR",
  showFilters = true,
  showSearch = true,
  gridCols = 3,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  const t = translations[language];
  const categories = PRODUCT_CATEGORIES[language];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) => {
        const title = (
          product.title[language] ||
          product.title.EN ||
          ""
        ).toLowerCase();
        const description = (
          product.description[language] ||
          product.description.EN ||
          ""
        ).toLowerCase();
        return title.includes(query) || description.includes(query);
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name": {
          const titleA = a.title[language] || a.title.EN || "";
          const titleB = b.title[language] || b.title.EN || "";
          return titleA.localeCompare(titleB);
        }
        case "category":
          return a.category.localeCompare(b.category);
        case "featured":
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy, language]);

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={className}>
      {/* Filters and Search */}
      {(showFilters || showSearch) && (
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          {showSearch && (
            <div className="relative max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          )}

          {/* Filters Row */}
          {showFilters && (
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "primary" : "ghost"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="name">
                      {language === "TR" ? "İsim" : "Name"}
                    </option>
                    <option value="category">
                      {language === "TR" ? "Kategori" : "Category"}
                    </option>
                    <option value="featured">
                      {language === "TR" ? "Öne Çıkan" : "Featured"}
                    </option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={classNames(
                      "p-2 rounded-l",
                      viewMode === "grid"
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50"
                    )}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={classNames(
                      "p-2 rounded-r",
                      viewMode === "list"
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50"
                    )}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {selectedCategory !== "all" && (
              <Badge variant="primary" className="flex items-center space-x-1">
                <span>
                  {categories.find((cat) => cat.id === selectedCategory)?.label}
                </span>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <span>"{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:bg-orange-200 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Products Count */}
      <div className="mb-6 text-sm text-gray-600">
        {language === "TR"
          ? `${filteredAndSortedProducts.length} ürün bulundu`
          : `${filteredAndSortedProducts.length} products found`}
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div
          className={classNames(
            viewMode === "grid"
              ? `grid gap-6 ${gridColsClass[gridCols]}`
              : "space-y-4"
          )}
        >
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              className={viewMode === "list" ? "flex-row" : ""}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">
            {t.products.noProducts}
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
          >
            {language === "TR" ? "Filtreleri Temizle" : "Clear Filters"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
