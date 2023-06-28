import { useState, useEffect } from 'react';
import PresentationTable from './components/PresentationTable';
import { presentatorList } from './presentatorList';

const shuffleData = () => {
  const shuffled = [...presentatorList];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const shuffledData = shuffleData();

function App() {
  const [currentPresentatorList, setCurrentPresentatorList] = useState(shuffledData);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleToggleShuffle = () => {
    setIsShuffling(prevState => !prevState);
  }

  useEffect(() => {
    let interval: number;

    if (isShuffling) {
      interval = window.setInterval(() => {
        const newShuffledData = shuffleData();
        setCurrentPresentatorList(newShuffledData);
      }, 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isShuffling]);

  const ShuffleButton = () => {
    return (
      <button onClick={handleToggleShuffle}>
        {isShuffling ? 'Stop' : 'Shuffle'}
      </button>
    );
  }

  return (
    <>
      <h1>発表順</h1>
      <ShuffleButton />
      <PresentationTable data={currentPresentatorList} />
    </>
  );
};

export default App;
