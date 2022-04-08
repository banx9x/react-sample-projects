import { useState } from 'react';
import Room from './components/room';
import Sun from './components/sun';
import Switch from './components/switch';

const App: React.FC<{}> = () => {
  const [flashOn, setFlashOn] = useState(false);

  const handleSetFlash = () => {
    setFlashOn(!flashOn);
  };

  return (
    <Room light={flashOn}>
      <Sun isOn={flashOn} />

      <Switch
        isOn={flashOn}
        onClick={handleSetFlash}
      />
    </Room>
  );
};

App.displayName = 'Container';

export default App;
