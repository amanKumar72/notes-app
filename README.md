# Notes App 📝

A beautiful, feature-rich notes application built with React Native and Expo Router. This app showcases modern mobile development practices with a stunning UI, smooth animations, and seamless user experience.

## ✨ Features

-  **View Notes** - Elegant note display with cover images and formatted content
- 🔍 **Search Notes** - Real-time search functionality
- 🌙 **Dark Mode** - Automatic system theme detection with manual toggle
- 🎨 **Beautiful UI** - Modern design with smooth animations and shadows
- 📱 **Responsive** - Optimized for both iOS and Android
- 🚀 **Type-Safe** - Full TypeScript implementation with Expo Router typed routes

## 📸 Screenshots

### Light Theme

#### Notes List
![Notes List - Light Theme](./assets/images/notes-light.jpeg)

#### Note Detail
![Note Detail - Light Theme](./assets/images/note-light.jpeg)

### Dark Theme

#### Notes List
![Notes List - Dark Theme](./assets/images/notes-dark.jpeg)

#### Note Detail
![Note Detail - Dark Theme](./assets/images/note-dark.jpeg)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo Go app (for testing) or iOS/Android emulator

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run the app
   - Scan the QR code with Expo Go app
   - Press `a` to open on Android emulator
   - Press `i` to open on iOS simulator

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Routing**: Expo Router with typed routes
- **Language**: TypeScript
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons (FontAwesome, AntDesign)
- **Theme**: Custom theme context with dark/light mode
- **State Management**: React Hooks (useState, useContext)

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/
│   │   ├── index.tsx          # Home screen
│   │   ├── notes.tsx          # Notes list
│   │   ├── create.tsx         # Create note form
│   │   ├── note/
│   │   │   └── [id].tsx       # Note detail page
│   │   └── _layout.tsx        # Main layout
│   └── _layout.tsx            # Root layout
├── contexts/
│   └── ThemeContext.tsx       # Theme management
├── mock-data/
│   └── notes.ts               # Sample notes data
└── components/
    └── toggle.tsx             # Theme toggle component
```

## 🎨 Theme System

The app features a comprehensive theme system with:

- **Automatic Detection**: Respects system light/dark mode
- **Manual Override**: Users can manually toggle themes
- **Type Safety**: Full TypeScript support for theme values
- **Smooth Transitions**: Seamless theme switching

### Theme Structure

```typescript
interface Theme {
  text: string;
  background: string;
  border: string;
  primary: string;
  secondary: string;
}
```

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint

### Adding New Features

1. Create components in `src/components/`
2. Add routes in `src/app/(main)/`
3. Update types in `src/types/`
4. Test with both themes

## 📱 Navigation

The app uses Expo Router with file-based routing:

- `/` - Home screen
- `/(main)/notes` - Notes list
- `/(main)/create` - Create new note
- `/(main)/note/[id]` - Note detail

## 🎯 Key Features Explained

### Search Functionality
Real-time search that filters notes by title as you type.

### Image Support
Add images to notes via URL with automatic preview.

### Responsive Design
Adapts beautifully to different screen sizes and orientations.

### Type Safety
Full TypeScript implementation ensures type safety throughout the app.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons by [Expo Vector Icons](https://docs.expo.dev/icons/)
- Routing by [Expo Router](https://docs.expo.dev/router/introduction)
