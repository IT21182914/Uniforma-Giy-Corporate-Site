import { ChevronDown } from "lucide-react";
import { classNames } from "../lib/classNames";

const LangSwitcher = ({
  currentLanguage = "TR",
  onLanguageChange,
  variant = "light",
}) => {
  const languages = [
    { code: "TR", name: "Türkçe", flag: "🇹🇷" },
    { code: "EN", name: "English", flag: "🇺🇸" },
  ];

  const variants = {
    light: {
      button: "text-gray-700 hover:bg-gray-100 border-gray-300",
      dropdown: "bg-white border-gray-200 shadow-lg",
    },
    dark: {
      button: "text-white hover:bg-white/10 border-white/20",
      dropdown: "bg-white border-gray-200 shadow-lg",
    },
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className={classNames(
            "inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium transition-all duration-200",
            variants[variant].button,
            "group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          )}
        >
          <span className="mr-2">{currentLang?.flag}</span>
          {currentLang?.code}
          <ChevronDown
            size={16}
            className="ml-2 group-hover:rotate-180 transition-transform duration-200"
          />
        </button>

        <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:scale-100 scale-95">
          <div
            className={classNames(
              "py-1 rounded-md",
              variants[variant].dropdown
            )}
            role="menu"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() =>
                  onLanguageChange && onLanguageChange(language.code)
                }
                className={classNames(
                  "flex items-center w-full px-4 py-2 text-sm transition-colors duration-200",
                  currentLanguage === language.code
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                role="menuitem"
              >
                <span className="mr-3">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
