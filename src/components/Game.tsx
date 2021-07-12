/** @jsx jsx */
/** @jsxFrag */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { mainStory } from '../script';
import { Story } from './Story';
import { Choices } from './Choices';
import { Inventory } from './Inventory';
import { PlayerStatus } from './PlayerStatus';

interface GameProps {}

export const Game: React.FC<GameProps> = ({}) => {
  const [choice, setChoice] = useState<string>('');
  const [isDead, setIsDead] = useState<boolean>(false);
  const [story, setStory] = useState<JSX.Element>(
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {mainStory.a}
    </motion.p>
  );
  const [bag, setBag] = useState<string[]>(['🎒=>']);
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

  const addStory = (newStory: string) => {
    setStory(
      <>
        {newStory === undefined ? (
          <span>{story}</span>
        ) : (
          <>
            {newStory.split('\n').map((str, index) => {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {str.length > 1 && '=> '}
                  {str}
                </motion.p>
              );
            })}
          </>
        )}
      </>
    );
  };

  const restart = () => {
    setStory(<p>{mainStory.a}</p>);

    setChoice('');
    setBag(['🎒=>']);
    setIsDead(false);
  };

  const death = () => {
    const possibleDeath = ['a1', 'b1', 'd2a', 'd2b1a', 'd2b2'];
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
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto 60vh auto;

        div:not(.scrollDown) {
          border: 1px solid #333;
        }

        .story {
          grid-column: 1/3;
        }

        .choices {
          grid-column: 1/3;
        }

        @media screen and (max-width: 768px) {
          width: 85%;
        }
      `}
    >
      <Inventory bag={bag} />
      <PlayerStatus health={health} />
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
      {/* <p onClick={() => restart()}>reset</p> */}
    </div>
  );
};
