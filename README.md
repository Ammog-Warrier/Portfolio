# Personal Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Three.js. This portfolio showcases my work and skills with a beautiful 3D interface and smooth animations.

## 🚀 Features

- Interactive 3D globe visualization using `react-globe.gl`
- Smooth animations powered by GSAP
- Modern UI with Tailwind CSS
- Contact form with EmailJS integration
- Responsive design for all devices
- Fast development with Vite
- TypeScript support for better development experience

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js (via react-globe.gl)
- **Animations:** GSAP
- **Email Service:** EmailJS
- **Development Tools:**
  - TypeScript
  - ESLint
  - PostCSS
  - Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_SERVICE_ID=your_service_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
portfolio/
├── src/              # Source files
├── public/           # Static assets
├── .env             # Environment variables
├── index.html       # Entry HTML file
├── vite.config.js   # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── package.json     # Project dependencies and scripts
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### EmailJS
To enable the contact form functionality:
1. Sign up for an EmailJS account
2. Create an email template
3. Add your EmailJS credentials to the `.env` file

## 🚀 Deployment

To build the project for production:
```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to your hosting service of choice.

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please reach out through the contact form on the portfolio website.
