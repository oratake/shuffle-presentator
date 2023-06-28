import React from 'react';
import { PresentatorList } from '../types';

interface PresentationTableProps {
  data: PresentatorList[];
}

const dekosuke = (name: string) => {
  return name === 'oratake' ? name : name + " さん";
};

const PresentationTable: React.FC<PresentationTableProps> = ({ data }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>発表タイトル</th>
          <th>リベ名</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{dekosuke(item.member)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PresentationTable;
