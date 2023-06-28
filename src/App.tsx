import { useState } from 'react';
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

  const handleShuffle = () => {
    const newShuffledData = shuffleData();
    setCurrentPresentatorList(newShuffledData);
  }

  const ShuffleButton = () => {
    return <button onClick={handleShuffle}>Shuffle</button>;
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
