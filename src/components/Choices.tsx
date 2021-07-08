/** @jsx jsx */
/** @jsxFrag */
import React, { useState, useEffect } from 'react';
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
}

export const Choices: React.FC<ChoicesProps> = ({
  choice,
  setChoice,
  addStory,
  restart,
  isDead,
}) => {
  const whichChoice = () => {
    if (choice === 'a1') {
      return mainStory.a1;
    } else if (choice === 'a2') {
      return mainStory.a2;
    } else return;
  };

  useEffect(() => {
    let narrate = whichChoice();

    addStory(narrate);
  }, [choice]);

  const choices = (id: string, c: string) => {
    return <div onClick={() => setChoice(`${id}`)}>{c}</div>;
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
