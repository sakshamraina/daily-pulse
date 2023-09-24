import React from 'react';
import CustomNavbar from '../Components/Navbar';
import WeatherComponent from '../Components/WeatherComponent';
import NewsComponent from '../Components/TopNews';
import YoutubePlayer from '../Components/YouTube';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <CustomNavbar />
      <WeatherComponent />
      <NewsComponent />
      <YoutubePlayer />
      <Footer />
    </>
  );
}

export default Home;
