import React, { useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';

const randomColor = (valueColor)=> {
  const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const currentIndex = colorList.indexOf(valueColor);
  let newIndex = currentIndex;
  while(currentIndex === newIndex){
    newIndex = Math.trunc(Math.random() * 5);
  }
  console.log(colorList[newIndex]);
  return colorList[newIndex];
}

function useMagicColor(props) {
  const [color, setColor] = useState('transparent');
  const currentColor = useRef('transparent');

  useEffect(()=> {

    const interval = setInterval(()=> {
      const newColor = randomColor(currentColor.current);
      setColor(newColor)
      currentColor.current = newColor;
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return {color};
}

export default useMagicColor;