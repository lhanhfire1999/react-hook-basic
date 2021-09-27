import React, { useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [value, setValue] = useState(0);
  const handleOnClick = () => {
    setValue( () => value + 1 ) ;
  }
// Render gives handleHeroClick have a new address, therefore child-component uses React.momo still render.
  const handleHeroClick = () => {

  }
  return (
    <div>
      <div>{value}</div>
      <button 
      onClick={handleOnClick}>Increase</button>
      <Hero name='React.momo (HOC - high order component)' onClick={handleHeroClick}/>
    </div>
  );
}

export default App;