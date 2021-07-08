/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/react';
import { Game } from './components/Game';

const App: React.FC = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1>PXV-21</h1>
      <Game />
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

          * {
            font-family: 'Fira Code', sans-serif;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
          }

          a {
            text-decoration: none;
          }

          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background: #000;
            color: #e0e0e0;
          }

          ::-webkit-scrollbar-track {
            background-color: #000;
          }
          ::-webkit-scrollbar {
            width: 5px;
            height: 10px;
            background-color: #000;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 8px;
          }
        `}
      />
    </div>
  );
};

export default App;
