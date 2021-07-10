/** @jsx jsx */
import React, { useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/react';

interface StoryProps {
  story: JSX.Element;
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
      className="story"
      css={css`
        padding: 15px;
        text-align: left;
        overflow-y: scroll;
        overflow-x: hidden;
      `}
    >
      {story}
      <div className="scrollDown" ref={msgEndRef}></div>
    </div>
  );
};
