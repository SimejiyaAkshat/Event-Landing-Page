import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import EventSchedule from './components/EventSchedule';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CountdownTimer />
      <EventSchedule />
      <RegistrationForm />
    </div>
  );
}

export default App;
