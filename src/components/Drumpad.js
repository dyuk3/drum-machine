import React from 'react';
import '../style.css';

const Drumpad = ({ keyy, audioUrl, name, onDrumPadKeyHandler }) => {
  return (
    <div className='drum-pad' id={name} onClick={onDrumPadKeyHandler}>
      {keyy}
      <audio
        src={audioUrl}
        className='clip'
        id={name}
        onClick={onDrumPadKeyHandler}
      ></audio>
    </div>
  );
};

export default Drumpad;
