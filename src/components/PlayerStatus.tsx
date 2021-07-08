/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

interface PlayerStatusProps {}

export const PlayerStatus: React.FC<PlayerStatusProps> = ({}) => {
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
      <div>💗💗💗💗💗💗💗💗</div>
      <div>🍗🍗🍗🍗🍗🍗🍗🍗</div>
    </div>
  );
};
