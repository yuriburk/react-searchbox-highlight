import React from 'react';

import { Container } from './styles';

export interface IHighlighterProps {
  searchWords: string[];
  text: string;
  autoEscape?: boolean;
  style?: Record<string, unknown>;
}

const Highlighter = ({
  searchWords,
  text,
  autoEscape = true,
  style,
}: IHighlighterProps) => {
  return (
    <Container
      searchWords={searchWords}
      autoEscape={autoEscape}
      textToHighlight={text}
      highlightStyle={style}
    />
  );
};

export default Highlighter;
