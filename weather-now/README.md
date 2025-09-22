# WeatherNow 🌤️

A modern, responsive weather application built with Next.js, TypeScript, and Tailwind CSS. WeatherNow provides real-time weather information with a clean, intuitive interface following a feature-based architecture.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) - React framework with SSR/SSG capabilities
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [@shadcn/ui](https://ui.shadcn.com/) - Accessible, pre-styled components
- **State Management**: React Context API and Hooks
- **Testing**: Jest and React Testing Library

## 📁 Project Architecture

The project follows a feature-based architecture for better maintainability and scalability:

```
src/
├── api/             # API service logic (weatherService.ts)
├── assets/          # Static files (icons, images)
├── components/      # Reusable UI components
│   └── ui/          # shadcn/ui components
├── features/        # Feature-specific modules
│   └── weather/
│       ├── components/  # Weather-specific components
│       ├── hooks/       # Weather-related custom hooks
│       └── WeatherPage.tsx
├── hooks/           # Global custom hooks
├── lib/             # Utility functions and helpers
├── pages/           # Next.js pages (routes)
└── styles/          # Global styles
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnnCKaroki/weather-app.git
cd weather-now
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables:
   - Create a `.env.local` file in the project root
   - Add your OpenWeatherMap API key:
   ```bash
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Current Features

### ✅ Completed
- [x] Project setup with Next.js, TypeScript, and Tailwind CSS
- [x] Feature-based directory structure
- [x] WeatherCard component with TypeScript interfaces
- [x] Weather API service with error handling
- [x] TypeScript interfaces for API responses
- [x] Responsive design with Tailwind CSS
- [x] Clean component architecture

### 🚧 In Progress
- [ ] Weather API integration
- [ ] Location-based weather fetching
- [ ] Dynamic weather icons
- [ ] Error handling and loading states

### 📅 Planned
- [ ] Multi-city weather comparison
- [ ] Weather forecasts (5-day)
- [ ] Geolocation support
- [ ] Dark/light theme toggle
- [ ] Offline support with PWA
- [ ] Unit and integration tests

## 🧩 Components & Services

### WeatherCard
A reusable component for displaying weather information:

```tsx
<WeatherCard
  cityName="New York"
  temperature={22}
  description="Partly cloudy"
/>
```

**Props:**
- `cityName` (string): Name of the city
- `temperature` (number): Temperature in Celsius
- `description` (string): Weather description

### Weather API Service
The `weatherService.ts` provides methods for fetching weather data:

```tsx
import { getWeatherByCity } from '@/api/weatherService';

const weatherData = await getWeatherByCity('London');
if (weatherData) {
  console.log(`Temperature in ${weatherData.name}: ${weatherData.main.temp}°C`);
}
```

**Features:**
- TypeScript interfaces for API responses
- Proper error handling with try/catch
- Environment variable configuration
- Returns `null` on failure for safe handling## 🎨 Naming Conventions

- **Files & Folders**: kebab-case (`weather-card.tsx`, `weather-feature/`)
- **Components**: PascalCase (`WeatherCard`, `WeatherPage`)
- **Functions & Variables**: camelCase (`getWeatherData`, `isLoading`)
- **Custom Hooks**: use prefix (`useWeatherData`, `useLocalStorage`)
- **Types & Interfaces**: PascalCase (`WeatherData`, `ApiResponse`)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Follow the established coding conventions
2. Write tests for new features
3. Update documentation as needed
4. Submit pull requests for review

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Next.js and modern web technologies.
