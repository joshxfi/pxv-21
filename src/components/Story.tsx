/** @jsx jsx */
import React, { useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/react';

interface StoryProps {
  story: string[];
}

export const Story: React.FC<StoryProps> = ({ story }) => {
  const msgEndRef = useRef<any>(null);
  const scrollBottom = () => {
    msgEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollBottom();
  }, [story]);

  return (
    <div
      css={css`
        padding: 15px;
        text-align: left;
        grid-auto-rows: 200px;
        height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;
      `}
    >
      {story.map((st) => (
        <p>{st}</p>
      ))}
      <div className="scrollDown" ref={msgEndRef}></div>
    </div>
  );
};
