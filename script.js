

async function getPrayerTimes(city, school, method) {
  //const city = 'Vadodara'; // Replace with your desired city
  const country = 'India'; // Replace with your desired country
  //const method = 4; // Specify the calculation method (e.g., Umm Al-Qura University, Makkah)
  console.log(city, country, method1.value, fiqhDropdown.value);
  console.log(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method1.value}&school=${fiqhDropdown.value}`);
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method1.value}&school=${fiqhDropdown.value}`;

  try {
    const response = await fetch(url); 0

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.data.timings); // Display the prayer times data

    fajr.innerHTML = tConvert(data.data.timings.Fajr)
    sunrise.innerHTML = tConvert(data.data.timings.Sunrise)
    dhuhr.innerHTML = tConvert(data.data.timings.Dhuhr)
    asr.innerHTML = tConvert(data.data.timings.Asr)
    maghrib.innerHTML = tConvert(data.data.timings.Maghrib)
    isha.innerHTML = tConvert(data.data.timings.Isha)
    city1.innerHTML = city

    const prayerTimes = {
      Fajr: tConvert(data.data.timings.Fajr),
      Sunrise: tConvert(data.data.timings.Sunrise),
      Dhuhr: tConvert(data.data.timings.Dhuhr),
      Asr: tConvert(data.data.timings.Asr),
      Maghrib: tConvert(data.data.timings.Maghrib),
      Isha: tConvert(data.data.timings.Isha),
      City: city, // Assuming you have the 'city' variable defined
    };
    
    // Convert the object to JSON
    const prayerTimesJSON = JSON.stringify(prayerTimes);
    console.log(prayerTimesJSON);

    return prayerTimesJSON;

  } catch (error) {
    console.error('An error occurred:', error);
  }

  

}

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}


// Call the function to get prayer times



submit.addEventListener("click", (e) => {
  e.preventDefault()
  getPrayerTimes(city.value, fiqhDropdown.value);
});

// Get a reference to the dropdown element
const fiqhDropdown = document.getElementById('fiqhDropdown');

// Add an event listener for the "change" event
fiqhDropdown.addEventListener('change', function () {
  // Get the selected value
  const selectedValue = fiqhDropdown.value;
  getPrayerTimes(city.value, selectedValue);
  console.log(fiqhDropdown.value)
});
method1.addEventListener('change', function () {
  // Get the selected value
  const selectedValue = fiqhDropdown.value;
  getPrayerTimes(city.value, selectedValue, method1.value);
  console.log(method1.value)
});

getPrayerTimes("vadodara", fiqhDropdown.value, method1.value);


const updateClock = () => {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedTime = new Intl.DateTimeFormat('en-EN', options).format(now);
  document.getElementById('clockDiv').textContent = formattedTime;
};

// Call the function initially
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
const prayertime = getPrayerTimes();

export {prayertime}

