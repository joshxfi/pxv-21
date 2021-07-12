/** @jsx jsx */
/** @jsxFrag */
import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { mainStory } from '../script';

interface ChoicesProps {
  story: JSX.Element;
  setStory: React.Dispatch<React.SetStateAction<JSX.Element>>;
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
      addItem('[🔪]');
      return mainStory.c1;
    } else if (choice === 'c2') {
      return mainStory.c2;
    } else if (choice === 'd1a') {
      return mainStory.c2;
    } else if (choice === 'd1a1') {
      return mainStory.d1a1;
    } else if (choice === 'd2a') {
      addItem('[✏]');
      return mainStory.d2a;
    } else if (choice === 'd2b') {
      return mainStory.d2b;
    } else if (choice === 'd2b1') {
      addItem('[🪒]');
      return mainStory.d2b1;
    } else if (choice === 'd2b2') {
      return mainStory.d2b2;
    } else if (choice === 'd2b1a') {
      return mainStory.d2b1a;
    } else if (choice === 'd2b1b') {
      return mainStory.d2b1b;
    } else return;
  };

  useEffect(() => {
    const narrate = whichChoice();

    addStory(narrate);
  }, [choice]);

  const choices = (id: string, desc: string) => {
    return <div onClick={() => setChoice(`${id}`)}>{desc}</div>;
  };

  return (
    <div
      className="choices"
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

      {choice === 'c1' && (
        <>
          {choices('d1a', 'reinforce door')}
          {choices('d1b', 'gather your food')}
        </>
      )}

      {choice === 'd1a' && (
        <>
          {choices('d1a1', 'attack [🔪]')}
          {choices('d1a1', 'attack [🔪]')}
        </>
      )}

      {choice === 'c2' && (
        <>
          {choices('d2a', 'attack')}
          {choices('d2b', 'run away')}
        </>
      )}

      {choice === 'd2b' && (
        <>
          {choices('d2b1', 'find a weapon')}
          {choices('d2b2', 'stay silent')}
        </>
      )}

      {choice === 'd2b1' && (
        <>
          {choices('d2b1a', 'open the door')}
          {choices('d2b1b', 'stay silent')}
        </>
      )}

      {choice === 'd2b1b' && (
        <>
          {choices('d2b1a', 'get his crowbar')}
          {choices('d2b1b', 'leave the bathroom')}
        </>
      )}

      {choice === 'd1a1' && (
        <>
          {choices('d2b1a', 'get his crowbar')}
          {choices('d2b1b', 'leave the bathroom')}
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
