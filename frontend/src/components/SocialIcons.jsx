import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { classNames } from "../lib/classNames";
import socialsData from "../data/socials.json";

const SocialIcons = ({ variant = "default", className = "" }) => {
  const { socials } = socialsData;

  const iconMap = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    whatsapp: FaWhatsapp,
  };

  const variants = {
    default: {
      container: "flex items-center space-x-4",
      icon: "w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200",
    },
    footer: {
      container: "flex items-center space-x-3",
      icon: "w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200",
    },
    minimal: {
      container: "flex items-center space-x-3",
      icon: "w-4 h-4 text-gray-500 hover:text-gray-300 transition-colors duration-200",
    },
    large: {
      container: "flex items-center space-x-6",
      icon: "w-8 h-8 text-gray-600 hover:text-blue-600 transition-colors duration-200",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={classNames(currentVariant.container, className)}>
      {socials.map((social) => {
        const IconComponent = iconMap[social.icon];

        if (!IconComponent) return null;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group"
          >
            <IconComponent
              className={classNames(
                currentVariant.icon,
                "group-hover:scale-110 transform transition-transform duration-200"
              )}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
