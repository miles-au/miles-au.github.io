import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <header className="brandlightgrey-bg">
        <h1>Miles Au</h1>
      </header>
      <Body />
      <div className="footerBuffer"></div>
      <footer className="brandlightgrey-bg">
        <a href="mailto:miles.d.au@gmail.com">Email</a>
        <a href="https://ca.linkedin.com/in/milesau">LinkedIn</a>
        <a href="https://github.com/miles-au">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
