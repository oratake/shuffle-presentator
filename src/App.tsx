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
  return (
    <>
      <h1>発表順</h1>
      <PresentationTable data={shuffledData} />
    </>
  );
};

export default App;
