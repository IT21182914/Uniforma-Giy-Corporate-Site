import { Star, Quote } from "lucide-react";
import Card from "./Card";
import { classNames } from "../lib/classNames";

const Testimonial = ({
  testimonial,
  language = "TR",
  variant = "card",
  className = "",
}) => {
  if (!testimonial) return null;

  const content = testimonial.content[language] || testimonial.content.EN || "";
  const position =
    testimonial.position[language] || testimonial.position.EN || "";

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={classNames(
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        )}
      />
    ));
  };

  const variants = {
    card: {
      container: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
      quote: "text-blue-600 mb-4",
      content: "text-gray-700 mb-6 leading-relaxed",
      author: "flex items-center space-x-4",
      avatar:
        "w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold",
      name: "font-semibold text-gray-900",
      position: "text-sm text-gray-600",
      company: "text-sm text-blue-600",
    },
    minimal: {
      container: "text-center",
      quote: "text-blue-600 mb-3",
      content: "text-gray-700 italic mb-4 text-lg",
      author: "space-y-2",
      avatar:
        "w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-3",
      name: "font-semibold text-gray-900",
      position: "text-sm text-gray-600",
      company: "text-sm text-blue-600",
    },
    featured: {
      container: "bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl",
      quote: "text-blue-600 mb-6",
      content: "text-gray-700 mb-6 text-lg leading-relaxed",
      author: "flex items-center space-x-4",
      avatar:
        "w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg",
      name: "font-bold text-gray-900 text-lg",
      position: "text-sm text-gray-600",
      company: "text-sm text-blue-600 font-medium",
    },
  };

  const currentVariant = variants[variant] || variants.card;

  return (
    <div className={classNames(currentVariant.container, className)}>
      {/* Quote Icon */}
      <Quote size={32} className={currentVariant.quote} />

      {/* Content */}
      <p className={currentVariant.content}>"{content}"</p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating || 5)}
      </div>

      {/* Author */}
      <div className={currentVariant.author}>
        <div className={currentVariant.avatar}>
          {testimonial.name?.charAt(0)?.toUpperCase() || "A"}
        </div>

        <div
          className={variant === "minimal" ? currentVariant.author : "flex-1"}
        >
          <div className={currentVariant.name}>{testimonial.name}</div>
          <div className={currentVariant.position}>{position}</div>
          {testimonial.company && (
            <div className={currentVariant.company}>{testimonial.company}</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Testimonials Grid Component
const TestimonialGrid = ({
  testimonials = [],
  language = "TR",
  variant = "card",
  columns = 3,
  className = "",
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={classNames(`grid gap-6 ${gridCols[columns]}`, className)}>
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          testimonial={testimonial}
          language={language}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default Testimonial;
export { TestimonialGrid };
