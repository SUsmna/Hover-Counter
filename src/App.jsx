import React from 'react'
import { useState } from 'react'

function App() {

  const [hoverCount, setHoverCount] = useState(0);
  
  const handleMouseEnter = () => {
    setHoverCount((abc) => abc + 1);
  }

  return (
    <div>
      <h1 data-testid="hover-count">{hoverCount}</h1>
      <button data-testid="hover-button" onMouseEnter={handleMouseEnter}>Hover Me</button>
    </div>
  );
}

export default App;


