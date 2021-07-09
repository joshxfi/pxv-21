/** @jsx jsx */
/** @jsxFrag */
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
  const [story, setStory] = useState<JSX.Element>(<p>{mainStory.a}</p>);
  const [bag, setBag] = useState<string[]>(['[🎒]']);
  const [health, setHealth] = useState<string[]>([
    '🤍',
    '🤍',
    '🤍',
    '🤍',
    '🤍',
    '🤍',
    '🤍',
    '🤍',
  ]);

  const addStory = (s: string) => {
    const newStory = s && `=> ${s}`;

    setStory(
      <>
        {story}
        {s === undefined ? (
          <p>{newStory}</p>
        ) : (
          <p>
            <hr />
            {newStory.split('\n').map((str, index) => (
              <p key={index}>
                {!str.includes('=>') && '=>'}
                {str}
              </p>
            ))}
          </p>
        )}
      </>
    );
  };

  const restart = () => {
    setStory(<p>{mainStory.a}</p>);

    setChoice('');
    setIsDead(false);
  };

  const death = () => {
    const possibleDeath = ['a1', 'b1', 'd2b2'];
    possibleDeath.forEach((death) => {
      choice === death && setIsDead(true);
    });
  };

  useEffect(() => death(), [choice]);

  return (
    <div
      css={css`
        display: grid;
        width: 60%;
        margin: 0 auto;
        grid-template-columns: 1fr;

        div:not(.scrollDown) {
          border: 1px solid #333;
        }

        @media screen and (max-width: 768px) {
          width: 85%;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
      >
        <Inventory bag={bag} />
        <PlayerStatus health={health} />
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
        bag={bag}
        setBag={setBag}
      />
    </div>
  );
};
