# 🎨 Mobile-Friendly Profile Card

A beautiful, modern, and mobile-friendly profile card built with **React**, **Vite**, and **Tailwind CSS v3**. Perfect for showcasing your personal or professional profile with stunning glassmorphism effects and smooth animations.

![Profile Card Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- 📱 **Mobile-First Design** - Optimized for mobile devices with responsive layout
- 🎨 **Glassmorphism UI** - Modern frosted glass effect with backdrop blur
- 🌈 **Vibrant Gradients** - Beautiful color gradients and animations
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🔗 **Social Media Links** - Quick access to all your social profiles
- 📊 **Stats Display** - Showcase your achievements and metrics
- 💼 **Easy Customization** - Simple data structure for quick updates
- 🚀 **GitHub Pages Ready** - Deploy directly to GitHub Pages

## 📁 Project Structure

```
profile-card/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ProfileCard.jsx # Main profile card component
│   ├── data/
│   │   └── profileData.js  # Your profile data (CUSTOMIZE THIS!)
│   ├── App.jsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.css           # Tailwind directives & custom styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd profile-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### 1. Update Your Profile Data

Edit `src/data/profileData.js` with your information:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title/Role",
  bio: "Your bio description...",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  website: "www.yourwebsite.com",
  avatar: "your-image-url-or-path",
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    // Add or remove social links as needed
  },
  
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  
  stats: [
    { label: "Projects", value: "50+" },
    { label: "Clients", value: "30+" },
    { label: "Years", value: "5+" },
  ]
};
```

### 2. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#667eea', // Change this
        // ... other shades
      },
      secondary: {
        500: '#d946ef', // Change this
        // ... other shades
      },
    },
  },
},
```

### 3. Add Your Profile Image

Replace the avatar URL in `profileData.js` with:
- Your own image URL
- A local image in the `public` folder: `/your-image.jpg`
- Keep the default Dicebear avatar (auto-generated)

## 📦 Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deploy to GitHub Pages

### Step 1: Update Configuration

1. In `package.json`, update the `homepage` field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

2. In `vite.config.js`, update the `base` path:
   ```javascript
   base: '/YOUR_REPO_NAME/'
   ```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 3: Deploy

Deploy to GitHub Pages:
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 🛠️ Technologies Used

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **React Icons** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📱 Mobile Optimization

This profile card is optimized for mobile devices with:
- Responsive breakpoints
- Touch-friendly interactions
- Optimized font sizes
- Smooth animations
- Fast loading times

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

If you like this project, please give it a ⭐️ on GitHub!

---

**Made with ❤️ using React & Tailwind CSS**
