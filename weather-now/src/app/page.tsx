'use client';

import { useState, FormEvent } from 'react';
import { getWeatherByCity, WeatherApiResponse } from '@/api/weatherService';
import WeatherCard from '@/features/weather/components/WeatherCard';

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setError(null);
    setIsLoading(true);
    setWeatherData(null);

    try {
      const data = await getWeatherByCity(city.trim());
      setIsLoading(false);

      if (data) {
        setWeatherData(data);
        setError(null);
      } else {
        setError('Could not find weather data for that city. Please try again.');
      }
    } catch {
      setIsLoading(false);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-2">WeatherNow</h1>
          <p className="text-gray-600 text-lg">Get real-time weather information</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !city.trim()}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Loading...
                </div>
              ) : (
                'Get Weather'
              )}
            </button>
          </div>
        </form>

        {/* Results Section */}
        <div className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          )}

          {/* Weather Card */}
          {weatherData && !isLoading && (
            <div className="transform transition-all duration-500 ease-in-out">
              <WeatherCard
                cityName={weatherData.name}
                temperature={weatherData.main.temp}
                description={weatherData.weather[0].description}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
