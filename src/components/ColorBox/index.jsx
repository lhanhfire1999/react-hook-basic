import React, { useState } from 'react';
import './index.scss';

ColorBox.propTypes = {
  
};

const getRandomColor = () => {
  const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor)
    localStorage.setItem('box-color', newColor);
  }
  
  return (
    <div
      className='color-box'
      style={{backgroundColor: color}}
      onClick={handleBoxClick}
    />
  );
}

export default ColorBox;