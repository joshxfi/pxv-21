/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

interface PlayerStatusProps {
  health: string[];
}

export const PlayerStatus: React.FC<PlayerStatusProps> = ({ health }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr;

        div {
          padding: 10px;
        }
      `}
    >
      <div>{health.length ? health : '💀'}</div>
      <div>🍗🍗🍗🍗🍗🍗🍗🍗</div>
    </div>
  );
};
