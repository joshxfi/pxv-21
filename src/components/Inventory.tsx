/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

interface InventoryProps {
  bag: string[];
}

export const Inventory: React.FC<InventoryProps> = ({ bag }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 10px;
        font-size: 0.8em;
      `}
    >
      {bag.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
