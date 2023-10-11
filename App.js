// App.js

import React from 'react';
import Nav from './component1'; // Import Component1.jsx
import Footer from './component2'; // Import Component2.jsx


function App() {
  return (
    <div>
      <Nav />
      <Footer />
      {/* Use your imported components in your JSX */}
    </div>
  );
}

export default App;
