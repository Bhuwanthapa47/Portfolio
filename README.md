# Professional Portfolio

A stunning, modern portfolio website built with React and Vite, featuring glassmorphism effects, smooth animations, and a fully responsive design.

## ✨ Features

- 🎨 **Modern Design** - Beautiful glassmorphism effects and vibrant gradient colors
- 🚀 **Smooth Animations** - Engaging micro-animations and transitions
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🌙 **Dark Theme** - Elegant dark color scheme

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3 (with custom design system)
- Google Fonts (Inter)

## 📦 Installation

Since PowerShell script execution is disabled on your system, follow these manual steps:

### Option 1: Enable PowerShell Scripts (Recommended)

1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Then install dependencies:
```bash
npm install
```

### Option 2: Use Command Prompt

1. Open Command Prompt (cmd) instead of PowerShell
2. Navigate to the project directory:
```bash
cd "C:\Users\HP\My Portfolio"
```
3. Install dependencies:
```bash
npm install
```

### Option 3: Manual Installation

If npm commands don't work, you can also try using the full path:
```bash
"C:\Program Files\nodejs\npm.cmd" install
```

## 🚀 Running the Project

After installing dependencies, start the development server:

### Using Command Prompt:
```bash
npm run dev
```

### Or with full path:
```bash
"C:\Program Files\nodejs\npm.cmd" run dev
```

The portfolio will be available at `http://localhost:5173`

## 📁 Project Structure

```
My Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the title and description

2. **About Section** (`src/components/About.jsx`):
   - Update the bio text
   - Modify statistics (years, projects, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels
   - Update technology tags

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update descriptions and technologies
   - Add project links

5. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experience
   - Update roles, companies, and periods
   - List your achievements

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Add your social media links

### Customize Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* ... more color variables */
}
```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with ❤️ using React and modern web technologies.

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
