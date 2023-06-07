import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showWebPage, setShowWebPage] = useState(false);

  const openWebPage = () => {
    setShowWebPage(true);
  };

  const closeWebPage = () => {
    setShowWebPage(false);
  };

  return (
    <div className="App">
      {!showWebPage ? (
        <button onClick={openWebPage}>Open Web Page</button>
      ) : (
        <div>
          <button onClick={closeWebPage} className="close-button">
            X
          </button>
          <iframe
            src="https://mysticalproductions.co.in/" // Replace with your desired web page URL
            title="Embedded Web Page"
            className="web-page-iframe"
          />
        </div>
      )}
    </div>
  );
};

export default App;
