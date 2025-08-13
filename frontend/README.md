# Üniforma Giy Corporate Website

A modern, responsive corporate website for Üniforma Giy - a professional work uniform manufacturer and supplier.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue & orange color scheme
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Multi-language**: Turkish and English language support with easy switching
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Performance**: Fast loading with optimized components and images
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 📱 Pages

1. **Home** - Hero section, featured products, company stats, testimonials
2. **About Us** - Company story, mission/vision, timeline, team
3. **Products** - Product catalog with filters, search, and categories
4. **Certificates** - Quality certificates and compliance documents
5. **Contact** - Contact form, location info, WhatsApp integration

## 🛠 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React + React Icons
- **Build Tool**: Vite 7

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx       # Button component with variants
│   ├── Card.jsx         # Card container component
│   ├── Badge.jsx        # Badge/chip component
│   ├── Section.jsx      # Page section wrapper
│   ├── Navbar.jsx       # Navigation header
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Hero section component
│   ├── ProductCard.jsx  # Product display card
│   ├── ProductGrid.jsx  # Product grid with filters
│   ├── ContactForm.jsx  # Contact form with validation
│   ├── Features.jsx     # Feature showcase component
│   ├── Stats.jsx        # Animated statistics
│   ├── Testimonial.jsx  # Customer testimonials
│   ├── CTA.jsx          # Call-to-action sections
│   ├── SocialIcons.jsx  # Social media icons
│   ├── LangSwitcher.jsx # Language switcher
│   └── WhatsAppButton.jsx # WhatsApp contact button
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   ├── About.jsx        # About page
│   ├── Products.jsx     # Products catalog
│   ├── Contact.jsx      # Contact page
│   ├── Certificates.jsx # Certificates page
│   └── NotFound.jsx     # 404 error page
├── layouts/
│   └── MainLayout.jsx   # Main site layout
├── routes/
│   └── index.jsx        # Router configuration
├── lib/
│   ├── classNames.js    # Utility functions
│   └── constants.js     # App constants
├── data/
│   ├── products.json    # Product data
│   ├── stats.json       # Company statistics
│   ├── socials.json     # Social media links
│   └── translations.json # Multi-language content
└── assets/              # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Orange (#ea580c)
- **Gray Scale**: Tailwind gray palette

### Components
All components are built with:
- Consistent prop APIs
- Size variants (sm, md, lg, xl)
- Color variants (primary, secondary, outline, etc.)
- Accessibility features
- Responsive design

## 🌐 Customization

### Content Updates
Edit the JSON files in `src/data/` to update:
- Product catalog (`products.json`)
- Company statistics (`stats.json`)
- Social media links (`socials.json`)
- Website text content (`translations.json`)

### Styling
- Theme colors can be modified in `src/index.css`
- Component styles use Tailwind utility classes
- Custom animations and utilities in global CSS

### Logo
Replace `/public/logo.png` with your company logo (recommended size: 200x80px)

## 📱 WhatsApp Integration

The site includes WhatsApp contact functionality:
- Floating WhatsApp button on all pages
- Integrated into contact forms and CTAs
- Current number: +94776048468 (update in `src/lib/constants.js`)

## 🔧 Configuration

### Contact Information
Update contact details in `src/lib/constants.js`:
```javascript
export const CONTACT_INFO = {
  phone: '+90 000 000 0000',
  email: 'info@uniformagiy.com',
  address: 'Your Address, City, Country',
  whatsapp: 'https://wa.me/your-number'
};
```

### SEO Settings
Update meta tags in `index.html` and add page-specific SEO in each page component.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```

## 🔗 API Integration

The contact form is ready for backend integration:
- Form validation included
- Success/error states handled
- Update `ContactForm.jsx` to connect to your API

## 📞 Support

For questions or issues:
- Email: info@uniformagiy.com
- WhatsApp: +94776048468

## 📄 License

This project is proprietary software created for Üniforma Giy.

---

**Built with ❤️ for Üniforma Giy**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
