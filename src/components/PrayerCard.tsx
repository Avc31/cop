import React from 'react';
import { 
  FaSun,
  FaCloudSun,
  FaCloudMoon,
  FaMoon,
  FaPrayingHands
} from 'react-icons/fa';

interface PrayerCardProps {
  name: string;
  time: string;
  arabicName: string;
  isCurrent?: boolean;
  isNext?: boolean;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ 
  name, 
  time, 
  arabicName,
  isCurrent = false, 
  isNext = false 
}) => {
  const getIcon = () => {
    switch(name) {
      case 'Fajr': return <FaCloudMoon className="size-6 text-blue-600" />;
      case 'Sunrise': return <FaSun className="size-6 text-amber-400" />;
      case 'Dhuhr': return <FaSun className="size-6 text-amber-500" />;
      case 'Asr': return <FaCloudSun className="size-6 text-amber-600" />;
      case 'Maghrib': return <FaSun className="size-6 text-orange-500" />;
      case 'Isha': return <FaMoon className="size-6 text-indigo-700" />;
      default: return <FaPrayingHands className="size-6 text-emerald-600" />;
    }
  };

  return (
    <div className={`
      relative rounded-xl p-4 shadow-lg transition-all duration-300
      ${isCurrent ? 'bg-emerald-700 text-white' : 'bg-white text-gray-800'}
      ${isNext ? 'ring-2 ring-amber-500' : ''}
      hover:shadow-md hover:-translate-y-0.5 border border-gray-100
    `}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold" style={{ fontFamily: 'Amiri, serif' }}>
            {arabicName}
          </h3>
          <p className="text-sm opacity-80">{name}</p>
        </div>
        {getIcon()}
      </div>
      <p className={`mt-2 text-2xl font-semibold ${
        isCurrent ? 'text-white' : 'text-emerald-700'
      }`}>
        {time}
      </p>
    </div>
  );
};

export default PrayerCard;