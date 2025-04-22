import React, { useState } from 'react';
import { Location } from '../types/prayerTimes';
import { FaSearchLocation, FaMapMarkerAlt, FaGlobeAsia } from 'react-icons/fa';

interface LocationSelectorProps {
  onLocationChange: (location: Location) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onLocationChange }) => {
  const [city, setCity] = useState<string>('Vadodara');
  const [country, setCountry] = useState<string>('India');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLocationChange({ city, country, timezone: 'Asia/Kolkata' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
        <FaSearchLocation className="text-amber-500" />
        <span>Location Settings</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="city" className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-1">
            <FaMapMarkerAlt className="size-4" />
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            placeholder="Enter city name"
            required
          />
        </div>
        
        <div className="flex-1">
          <label htmlFor="country" className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-1">
            <FaGlobeAsia className="size-4" />
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            placeholder="Enter country name"
            required
          />
        </div>
        
        <div className="self-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            <FaSearchLocation />
            <span>Find Prayer Times</span>
          </button>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
        <FaGlobeAsia className="size-3" />
        <span>Timezone will be automatically detected based on location</span>
      </div>
    </form>
  );
};

export default LocationSelector;