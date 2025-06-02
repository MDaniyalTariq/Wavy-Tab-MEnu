import React from 'react';
import './WavyTabMenu.css';

const WavyTabMenu = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'ALL', label: 'ALL', icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    )},
    { id: 'MY_FAVORITE', label: 'My Favorite', icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )},
    { id: 'MY_SEARCHES', label: 'My Searches', icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    )},
    { id: 'SUGGESTION', label: 'Suggestion', icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    )}
  ];

  return (
    <div className="wavy-tab-container">
      <div className="wavy-tab-menu">
        <div className="wavy-icons-area">
          <svg className="wavy-background" viewBox="0 0 400 50" preserveAspectRatio="none">
            <path
              d="M0,0 L400,0 L400,50 L250,50 Q200,-10 150,50 L0,50 Z"
              fill="#262323"
              stroke="#3a3a3a"
              strokeWidth="1"
            />
          </svg>
          <div className="tab-icons-container">
            {tabs.map((tab) => (
              <div
                key={`${tab.id}-icon`}
                className={`tab-icon-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="tab-labels-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="center-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

    </div>
  );
};

export default WavyTabMenu;
