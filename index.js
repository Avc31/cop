// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use environment variable or default to port 3001

app.use(express.json());

// Your API route to fetch prayer times
app.get('/api/prayer-times', async (req, res) => {
  try {
    const city = req.query.city; // Get the city from the query parameter
    const country = 'India'; // You can set the country here or make it dynamic if needed
    const method = req.query.method || 4; // Default to method 4 (Umm Al-Qura University, Makkah)

    const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`;

    const response = await axios.get(url);

    if (!response.data || !response.data.data || !response.data.data.timings) {
      throw new Error('Invalid response from Aladhan API');
    }

    const prayerTimes = response.data.data.timings;
    res.status(200).json(prayerTimes);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
