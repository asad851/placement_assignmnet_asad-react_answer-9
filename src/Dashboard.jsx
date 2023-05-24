import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const bg = th
  document.body.style.backgroundColor=`${theme==="light"?"white":"#333"}`
  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;