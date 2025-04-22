import React from 'react';
import { PrayerTimes } from '../types/prayerTimes';

interface HijriDateProps {
  prayerTimes: PrayerTimes;
}

const HijriDate: React.FC<HijriDateProps> = ({ prayerTimes }) => {
  if (!prayerTimes) return null;

  const hijri = prayerTimes.data.date.hijri;
  const gregorian = prayerTimes.data.date.gregorian;

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Amiri, serif' }}>
          Islamic Date
        </h2>
        <p className="text-lg" style={{ fontFamily: 'Amiri, serif' }}>
          {hijri.day} {hijri.month.en} {hijri.year} AH
        </p>
        <p className="text-gray-600 mt-1">
          {gregorian.day} {gregorian.month.en} {gregorian.year}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {prayerTimes.data.meta.method.name}
        </p>
      </div>
    </div>
  );
};

export default HijriDate;