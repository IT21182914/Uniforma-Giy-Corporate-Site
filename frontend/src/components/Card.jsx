import { classNames } from "../lib/classNames";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
  ...props
}) => {
  const baseStyles = "bg-white border border-gray-200 rounded-lg shadow-sm";
  const hoverStyles = hover
    ? "hover:shadow-md transition-shadow duration-200"
    : "";

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={classNames(
        baseStyles,
        hoverStyles,
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
