import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;

          // Fetch weather data for the user's location
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e982b0432c5614118552588a5ee21779&units=metric`);
          const data = await response.json();
          setWeatherData(data);
        });
      }

      // Set current time
      setCurrentTime(new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };

    fetchData();
  }, []);

  const cityName = weatherData ? weatherData.name : '';
  const currentDate = new Date().toLocaleDateString();

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <div style={{ marginTop: '8vh', marginRight: '1rem', display: 'flex' }}>
            {currentTime && (
              <div style={{ marginRight: '1rem' }}>
                {currentTime}
              </div>
            )}
            {currentDate && (
              <div style={{ marginRight: '1rem' }}>
                {currentDate}
              </div>
            )}
            {weatherData && (
              <div>
                {Math.round(weatherData.main.temp)}°C, {cityName}
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WeatherComponent;
