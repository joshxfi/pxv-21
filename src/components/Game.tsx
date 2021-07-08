/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { Story } from './Story';
import { Choices } from './Choices';
import { Inventory } from './Inventory';
import { PlayerStatus } from './PlayerStatus';
import { mainStory } from '../script';

interface GameProps {}

export const Game: React.FC<GameProps> = ({}) => {
  const [choice, setChoice] = useState<string>('');
  const [isDead, setIsDead] = useState<boolean>(false);
  const [story, setStory] = useState<string[]>([mainStory.a]);

  const addStory = (s: string) => {
    const newStory = s;

    setStory([...story, newStory]);
  };

  const restart = () => {
    setStory([mainStory.a]);

    setChoice('');
    setIsDead(false);
  };

  const death = () => {
    const possibleDeath = ['a1', 'b1'];
    possibleDeath.forEach((death) => {
      choice === death && setIsDead(true);
    });
  };

  useEffect(() => death(), [choice]);

  return (
    <div
      css={css`
        display: grid;
        width: 70%;
        margin: 0 auto;
        grid-template-columns: 1fr;

        div:not(.scrollDown) {
          border: 1px solid #333;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        <Inventory />
        <PlayerStatus />
      </div>
      <Story story={story} />
      <Choices
        story={story}
        setStory={setStory}
        choice={choice}
        setChoice={setChoice}
        addStory={addStory}
        restart={restart}
        isDead={isDead}
      />
    </div>
  );
};
