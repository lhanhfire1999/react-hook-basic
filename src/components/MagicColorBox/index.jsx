import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './index.scss';

MagicColorBox.propTypes = {
  
};

function MagicColorBox(props) {
  const {color} = useMagicColor();
  return (
    <div className='magic-color-box' style={{backgroundColor: color}}>

    </div>
  );
}

export default MagicColorBox;