# Trade Go Limited Website

A modern, responsive website built with Next.js, Tailwind CSS, and JavaScript for Trade Go Limited.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

The project follows a feature-based architecture with the following structure:

```
zahidul-turja-trade-go-limited/
├── app/                    # Next.js app directory
│   ├── _components/       # Reusable components
│   │   ├── pages/        # Page-specific components
│   │   └── sections/     # Section components
│   ├── _data/           # Static data and constants
│   ├── _styles/         # Global styles and fonts
│   └── [routes]/        # Page routes
├── public/              # Static assets
└── configuration files
```

## 🧩 Key Components

### Pages
- HomePage (`app/_components/pages/HomePage.js`)
- ProductsPage (`app/_components/pages/ProductsPage.js`)
- ProductDetailsPage (`app/_components/pages/ProductDetailsPage.js`)
- ServicesPage (`app/_components/pages/ServicesPage.js`)
- AboutPage (`app/_components/pages/AboutPage.js`)
- ContactPage (`app/_components/pages/ContactPage.js`)
- FAQPage (`app/_components/pages/FAQPage.js`)

### Sections
- HeaderSection
- WelcomeSection
- Products
- Services
- KeyFeatures
- Industries
- ApplicationsAndUsages
- Safety
- WhyUs
- OurMission
- FAQ
- Footer

## 🛠️ Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Code Quality**:
  - ESLint
  - Prettier
- **Build Tools**:
  - PostCSS
  - JavaScript Config

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript configuration
- `.prettierrc` - Prettier configuration

## 📝 Data Management

Data is managed through JavaScript modules in the `_data` directory:
- `products.js` - Product information
- `faqs.js` - Frequently Asked Questions

## 🎨 Styling

Styles are managed through:
- Tailwind CSS utilities
- Global CSS (`app/_styles/globals.css`)
- Custom fonts configuration (`app/_styles/fonts.js`)

## 🔄 Routing

The application uses Next.js App Router with the following routes:
- `/` - Home page
- `/products` - Products listing
- `/products/[id]` - Individual product pages
- `/services` - Services page
- `/about` - About page
- `/contact` - Contact page
- `/faqs` - FAQ page

## 📦 Available Scripts

```bash
# Development
npm run dev        # Start development server
npm run lint       # Run ESLint
npm run format     # Run Prettier

# Production
npm run build      # Build production bundle
npm start         # Start production server
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

For any queries, please reach out to Azizul Islam Tushar.
mailto:azizultushar98@gmail.com
