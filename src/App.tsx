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
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>発表タイトル</th>
            <th>リベ名</th>
          </tr>
        </thead>
        <tbody>
          {shuffledData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.member}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
