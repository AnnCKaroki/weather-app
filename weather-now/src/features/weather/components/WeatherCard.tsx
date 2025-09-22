import React from 'react';

// TypeScript interface for WeatherCard props
interface WeatherCardProps {
  cityName: string;
  temperature: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  temperature,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* City Name */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{cityName}</h2>
      </div>

      {/* Weather Icon Placeholder */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">☀️</span>
        </div>
      </div>

      {/* Temperature */}
      <div className="text-center mb-4">
        <span className="text-4xl font-bold text-gray-900">
          {Math.round(temperature)}°
        </span>
        <span className="text-lg text-gray-600 ml-1">C</span>
      </div>

      {/* Weather Description */}
      <div className="text-center">
        <p className="text-gray-600 capitalize text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
