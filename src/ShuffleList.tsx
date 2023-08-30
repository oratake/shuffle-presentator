import React, { useState, useEffect } from 'react';
import presentatorList from './presentatorList.ts';
import {
  Table,
  Title,
  Button,
  Switch,
} from '@mantine/core';
import {
  IconLock,
  IconLockOpen,
} from '@tabler/icons-react';

interface PresentatorList {
  id: number;
  member: string;
  title: string;
}

const ShuffleList: React.FC = () => {
  const [list, setList] = useState<PresentatorList[]>(presentatorList);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isLocked, setLocked] = useState<boolean>(true);

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

  // useEffect(() => {
  //   if ();
  // }, []);

  // const rows = list.map((item) => (
  //   <Table.Tr key={item.id}>
  //     <Table.Td>{item.id}</Table.Td>
  //     <Table.Td>{item.member}</Table.Td>
  //     <Table.Td>{item.title}</Table.Td>
  //   </Table.Tr>
  // ));
  const onLabelIcon = (
    <IconLock />
  );

  const offLabelIcon = (
    <IconLockOpen />
  );

  return (
    <div>
      <Title order={1}>プログラミング部 有志LT会 おしながき</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>リベ名</Table.Th>
            <Table.Th>発表タイトル</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {list.map((item) => (
            <Table.Tr key={item.id}>
              <Table.Td>{item.id}</Table.Td>
              <Table.Td>{item.member}</Table.Td>
              <Table.Td>{item.title}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Button
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 30 }}
        onClick={isShuffling ? stopShuffle : startShuffle}
        disabled={isLocked ? true : false}
      >
        {isShuffling ? 'ストップ' : 'スタート'}
      </Button>
      <Switch
        checked={isLocked}
        onChange={(event) => setLocked(event.currentTarget.checked)}
        size="lg"
        color="red"
        onLabel={onLabelIcon}
        offLabel={offLabelIcon}
      />
    </div>
  );
};

export default ShuffleList;

