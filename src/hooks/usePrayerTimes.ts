import { useState, useEffect } from 'react';
import { PrayerTimes, Location } from '../types/prayerTimes';

const usePrayerTimes = (location: Location, method: number = 2) => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${location.city}&country=${location.country}&method=${method}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch prayer times');
        }

        const data: PrayerTimes = await response.json();
        setPrayerTimes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [location, method]);

  return { prayerTimes, loading, error };
};

export default usePrayerTimes;