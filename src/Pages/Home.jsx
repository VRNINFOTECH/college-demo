import Hero from '../components/Home/Hero.jsx'
import React from 'react'
import Campus from '../components/Home/campus.jsx'
import About from '../components/Home/About.jsx';
import Campuese from '../components/Home/Campuslife.jsx';

import Placements from '../components/Home/Placements.jsx';
export default  function Home() {
  

  return (
    <div>
    
    <Hero />
    <About />
    <Campuese />
    <Placements />

    </div>
    
  );
}

