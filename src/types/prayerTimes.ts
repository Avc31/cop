export interface PrayerTimes {
    code: number;
    status: string;
    data: {
      timings: {
        Fajr: string;
        Sunrise: string;
        Dhuhr: string;
        Asr: string;
        Maghrib: string;
        Isha: string;
      };
      date: {
        hijri: {
          date: string;
          day: string;
          month: {
            en: string;
            ar: string;
          };
          year: string;
        };
        gregorian: {
          date: string;
          day: string;
          month: {
            en: string;
          };
          year: string;
        };
      };
      meta: {
        timezone: string;
        method: {
          id: number;
          name: string;
        };
      };
    };
  }
  
  export interface Location {
    city: string;
    country: string;
    timezone: string;
  }