import { useEffect, useState } from 'react';
import Drumpad from './components/Drumpad';
import './style.css';

function App() {
  const [drumPad] = useState([
    {
      name: 'Heater1',
      key: 'Q',
      keyCode: 81,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      name: 'Heater2',
      key: 'W',
      keyCode: 87,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      name: 'Heater3',
      key: 'E',
      keyCode: 69,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      name: 'Heater4',
      key: 'A',
      keyCode: 65,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      name: 'Clap',
      key: 'S',
      keyCode: 83,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      name: 'Open-HH',
      key: 'D',
      keyCode: 68,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      name: 'Kick-n-Hat',
      key: 'Z',
      keyCode: 90,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      name: 'Kick',
      key: 'X',
      keyCode: 88,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      name: 'Closed-HH',
      key: 'C',
      keyCode: 67,
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ]);

  const [displayKey, setDisplayKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', onkeyDownHandler);
  }, []);

  const onkeyDownHandler = (e) => {
    const pressedKey = drumPad.find((padKey) => padKey.keyCode === e.keyCode);
    if (pressedKey) {
      onDrumPadKeyHandler(pressedKey);
    }
  };

  const onDrumPadKeyHandler = (e) => {
    setDisplayKey(e.name || e.target.id);

    const id = e.name || e.target.id;

    const drumPad = document.querySelector(`#${id}`);
    const sound = document.querySelector(`#${id}.clip`);

    drumPad.classList.add('active');
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
      drumPad.classList.remove('active');
      setDisplayKey('');
    }, 200);
  };

  return (
    <div className='App'>
      <div className='container' id='drum-machine'>
        <div className='drumpad-container'>
          {drumPad.map((item, index) => (
            <Drumpad
              key={index}
              keyCode={item.keyCode}
              name={item.name}
              keyy={item.key}
              audioUrl={item.audio}
              onDrumPadKeyHandler={onDrumPadKeyHandler}
            />
          ))}
        </div>
        <div className='display-container'>
          <div className='logo'>DRUM</div>
          <div id='display'>{displayKey}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
