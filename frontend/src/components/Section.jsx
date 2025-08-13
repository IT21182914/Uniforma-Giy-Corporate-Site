import { classNames } from "../lib/classNames";

const Section = ({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  padding = "default",
  id,
  ...props
}) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    light: "bg-blue-50",
    orange: "bg-orange-50",
    blue: "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
  };

  const paddings = {
    none: "",
    sm: "py-8 lg:py-12",
    default: "py-12 lg:py-16",
    lg: "py-16 lg:py-20",
    xl: "py-20 lg:py-24",
  };

  return (
    <section
      id={id}
      className={classNames(
        backgrounds[background],
        paddings[padding],
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
