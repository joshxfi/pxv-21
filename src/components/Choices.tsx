/** @jsx jsx */
/** @jsxFrag */
import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { mainStory } from '../script';

interface ChoicesProps {
  story: string[];
  setStory: React.Dispatch<React.SetStateAction<string[]>>;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
  addStory: (s: string) => void;
  restart: () => void;
  isDead: boolean;
  bag: string[];
  setBag: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Choices: React.FC<ChoicesProps> = ({
  choice,
  setChoice,
  addStory,
  restart,
  isDead,
  bag,
  setBag,
}) => {
  const addItem = (item: string) => setBag([...bag, item]);

  const whichChoice = () => {
    if (choice === 'a1') {
      return mainStory.a1;
    } else if (choice === 'a2') {
      return mainStory.a2;
    } else if (choice === 'b1') {
      return mainStory.b1;
    } else if (choice === 'b2') {
      return mainStory.b2;
    } else if (choice === 'c1') {
      addItem('🔪');
      return mainStory.c1;
    } else if (choice === 'c2') {
      return mainStory.c2;
    }
  };

  useEffect(() => {
    let narrate = whichChoice();

    addStory(narrate);
  }, [choice]);

  const choices = (id: string, desc: string) => {
    return <div onClick={() => setChoice(`${id}`)}>{desc}</div>;
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {
          padding: 10px;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
            background: #333;
          }
        }
      `}
    >
      {!choice && (
        <>
          {choices('a1', 'open the door')}
          {choices('a2', 'ignore')}
        </>
      )}

      {choice === 'a2' && (
        <>
          {choices('b1', 'open the door')}
          {choices('b2', 'turn on the TV')}
        </>
      )}

      {choice === 'b2' && (
        <>
          {choices('c1', 'grab a weapon')}
          {choices('c2', 'reinforce your door')}
        </>
      )}

      {choice === 'c2' && (
        <>
          {choices('d1', 'attack')}
          {choices('d2', 'run away')}
        </>
      )}

      {isDead && (
        <div
          css={css`
            grid-column: 1/3;
          `}
          onClick={() => restart()}
        >
          restart
        </div>
      )}
    </div>
  );
};
