import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
} from "lucide-react";
import Button from "./Button";
import { classNames } from "../lib/classNames";
import translations from "../data/translations.json";

const ContactForm = ({ language = "TR", onSubmit, className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [submitMessage, setSubmitMessage] = useState("");

  const t = translations[language];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        language === "TR" ? "Ad soyad gereklidir" : "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        language === "TR" ? "E-posta gereklidir" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        language === "TR"
          ? "Geçerli bir e-posta adresi giriniz"
          : "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        language === "TR" ? "Telefon gereklidir" : "Phone is required";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        language === "TR" ? "Mesaj gereklidir" : "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        language === "TR"
          ? "Mesaj en az 10 karakter olmalıdır"
          : "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      // If custom onSubmit is provided, use it
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission handler (stub)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
      }

      setStatus("success");
      setSubmitMessage(t.contact.form.success);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setSubmitMessage(t.contact.form.error);
      console.error("Form submission error:", error);

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setSubmitMessage("");
      }, 5000);
    }
  };

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className={classNames("max-w-2xl", className)}>
      {/* Status Messages */}
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <span className="text-green-800">{submitMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="text-red-600 mr-3" size={20} />
          <span className="text-red-800">{submitMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={labelStyles}>
            <User size={16} className="inline mr-2" />
            {t.contact.form.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={classNames(
              inputStyles,
              errors.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : ""
            )}
            placeholder={t.contact.form.name}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className={labelStyles}>
              <Mail size={16} className="inline mr-2" />
              {t.contact.form.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={classNames(
                inputStyles,
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : ""
              )}
              placeholder={t.contact.form.email}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className={labelStyles}>
              <Phone size={16} className="inline mr-2" />
              {t.contact.form.phone} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={classNames(
                inputStyles,
                errors.phone
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : ""
              )}
              placeholder={t.contact.form.phone}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className={labelStyles}>
            <Building size={16} className="inline mr-2" />
            {t.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputStyles}
            placeholder={t.contact.form.company}
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className={labelStyles}>
            <MessageSquare size={16} className="inline mr-2" />
            {t.contact.form.message} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={classNames(
              inputStyles,
              "resize-vertical",
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : ""
            )}
            placeholder={t.contact.form.message}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className="w-full group"
        >
          {status === "loading" ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {t.contact.form.sending}
            </>
          ) : (
            <>
              <Send
                size={20}
                className="mr-2 group-hover:translate-x-1 transition-transform duration-200"
              />
              {t.contact.form.send}
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
