// src/api/weatherService.ts

// Define a type for the data we care about from the API response
interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (
  city: string
): Promise<WeatherApiResponse | null> => {
  if (!API_KEY) {
    console.error("OpenWeatherMap API key is not set.");
    return null;
  }

  try {
    const response = await fetch(
      `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: WeatherApiResponse = await response.json();
    return data;
  } catch (error) {
    // Catch network errors or API-related errors
    console.error("Failed to fetch weather data:", error);
    return null;
  }
};
