// import React, { useState, useEffect } from 'react';
// import { PrayerTimes } from '../types/prayerTimes';
// import { FaClock } from 'react-icons/fa';

// const Countdown: React.FC<{ prayerTimes: PrayerTimes }> = ({ prayerTimes }) => {
//   const [timeLeft, setTimeLeft] = useState<string>('');
//   const [nextPrayer, setNextPrayer] = useState<string>('');

//   useEffect(() => {
//     if (!prayerTimes) return;

//     const updateCountdown = () => {
//       const now = new Date();
//       const timings = prayerTimes.data.timings;

//       const prayerTimesArray = [
//         { name: 'Fajr', time: timings.Fajr },
//         { name: 'Sunrise', time: timings.Sunrise },
//         { name: 'Dhuhr', time: timings.Dhuhr },
//         { name: 'Asr', time: timings.Asr },
//         { name: 'Maghrib', time: timings.Maghrib },
//         { name: 'Isha', time: timings.Isha },
//       ];

//       // ... (rest of your countdown logic remains the same)
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);

//     return () => clearInterval(interval);
//   }, [prayerTimes]);

//   if (!timeLeft || !nextPrayer) return null;

//   return (
//     <div className="bg-emerald-700 text-white rounded-xl p-4 shadow-md">
//       <div className="text-center">
//         <div className="flex items-center justify-center gap-2 mb-2">
//           <FaClock className="size-5 text-amber-300" />
//           <h2 className="text-xl font-bold">Next Prayer: {nextPrayer}</h2>
//         </div>
//         <p className="text-2xl font-mono font-bold">{timeLeft}</p>
//       </div>
//     </div>
//   );
// };

// export default Countdown;