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
      `}
    >
      {bag.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
