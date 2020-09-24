import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Highlighter from '.';

describe('<Highligther />', () => {
  it('should be able to highlight searched word', () => {
    render(
      <Highlighter
        searchWords={['search', 'component']}
        text="This is a searchbox component"
      />
    );

    expect(screen.getByText(/search/i)).toHaveStyle(
      'background-color: #9999ff'
    );
    expect(screen.getByText(/component/i)).toHaveStyle(
      'background-color: #9999ff'
    );
    expect(screen.getByText(/this is a/i)).not.toHaveStyle(
      'background-color: #9999ff'
    );
    expect(screen.getByText(/box/i)).not.toHaveStyle(
      'background-color: #9999ff'
    );
  });

  it('should be able to highlight searched word with custom color', () => {
    render(
      <Highlighter
        searchWords={['search', 'component']}
        text="This is a searchbox component"
        style={{ color: '#000', backgroundColor: '#505050' }}
      />
    );

    expect(screen.getByText(/search/i)).toHaveStyle(
      'color: #000;background-color: #505050'
    );
    expect(screen.getByText(/component/i)).toHaveStyle(
      'color: #000;background-color: #505050'
    );
    expect(screen.getByText(/this is a/i)).not.toHaveStyle(
      'color: #000;background-color: #505050'
    );
    expect(screen.getByText(/box/i)).not.toHaveStyle(
      'color: #000;background-color: #505050'
    );
  });
});
