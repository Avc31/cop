import React, { useState } from 'react';
import usePrayerTimes from './hooks/usePrayerTimes';
import { Location } from './types/prayerTimes';
import Header from './components/Header';
import LocationSelector from './components/LocationSelector';
import HijriDate from './components/HijriDate';
import Countdown from './components/Countdown';
import PrayerCard from './components/PrayerCard';
import { 
  FaMosque,
  FaSun,
  FaCloudSun,
  FaCloudMoon,
  FaMoon,
  FaPrayingHands
} from 'react-icons/fa';

const App: React.FC = () => {
  const [location, setLocation] = useState<Location>({
    city: 'Vadodara',
    country: 'India',
    timezone: 'Asia/Kolkata'
  });

  const { prayerTimes, loading, error } = usePrayerTimes(location);

  const prayerNames = {
    Fajr: { arabic: 'الفجر', icon: <FaCloudMoon /> },
    Sunrise: { arabic: 'الشروق', icon: <FaSun /> },
    Dhuhr: { arabic: 'الظهر', icon: <FaSun /> },
    Asr: { arabic: 'العصر', icon: <FaCloudSun /> },
    Maghrib: { arabic: 'المغرب', icon: <FaSun /> },
    Isha: { arabic: 'العشاء', icon: <FaMoon /> },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <LocationSelector onLocationChange={setLocation} />
        
        {loading && (
          <div className="text-center py-12">
            <p className="text-lg text-emerald-700">Loading prayer times...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-600">
            <p>Error: {error}</p>
          </div>
        )}

        {prayerTimes && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <HijriDate prayerTimes={prayerTimes} />
              <Countdown prayerTimes={prayerTimes} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(prayerTimes.data.timings).map(([name, time]) => (
                name in prayerNames && (
                  <PrayerCard
                    key={name}
                    name={name}
                    arabicName={prayerNames[name as keyof typeof prayerNames].arabic}
                    time={time}
                    isCurrent={false} // You'll need to implement current prayer logic
                    isNext={false} // You'll need to implement next prayer logic
                  />
                )
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;