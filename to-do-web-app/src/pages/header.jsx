import React from 'react';
import './header.css';

const Header = () => {
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    return `${hours}:${minutes} ${ampm}`;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getFormattedDate = () => {
    const date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    return `Today, ${date.toLocaleDateString('en-US', options)}`;
  };

  return (
    <header className="header-container">
      <div className="header-info">
        <h1>{getGreeting()}, Thisara Dasun 👋</h1>
        <p>{getFormattedDate()}</p>
      </div>
      <div className="header-time">
        <h1>{getCurrentTime()}</h1>
      </div>
    </header>
  );
};

export default Header;