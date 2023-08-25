import React, { useState, useEffect } from 'react';
import presentatorList, { PresentatorList } from './presentatorList.ts';

interface PresentatorList {
  id: number;
  member: string;
  title: string;
}

const ShuffleList: React.FC = () => {
  const [list, setList] = useState<PresentatorList[]>(presentatorList);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const startShuffle = (): void => {
    setIsShuffling(true);
  };

  const stopShuffle = (): void => {
    setIsShuffling(false);
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    if (isShuffling) {
      const id = setInterval(() => {
        const shuffledList = [...list].sort(() => Math.random() - 0.5);
        setList(shuffledList);
      }, 50);

      setIntervalId(id);

      return () => {
        clearInterval(id);
      };
    }
  }, [isShuffling, list]);

  return (
    <div>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>リベ名</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>発表タイトル</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.member}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={isShuffling ? stopShuffle : startShuffle}>
        {isShuffling ? 'ストップ' : 'スタート'}
      </button>
    </div>
  );
};

export default ShuffleList;

