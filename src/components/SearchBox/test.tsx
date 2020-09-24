import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from '.';

const mockedItems = [
  { label: 'John One - 1', value: { name: 'John One' } },
  { label: 'John Duo - 2', value: { name: 'John Duo' } },
];
const mockedOnChange = jest.fn();
const mockedItemClick = jest.fn();

describe('<SearchBox />', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should be able to take a snapshot', async () => {
    const { container, getByRole } = render(
      <SearchBox
        items={mockedItems}
        onChange={mockedOnChange}
        onItemClick={mockedItemClick}
        placeholder="Search here"
      />
    );

    await userEvent.type(getByRole('textbox'), 'John');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to handle change event in input text', async () => {
    const { getByRole } = render(
      <SearchBox
        items={mockedItems}
        onChange={mockedOnChange}
        onItemClick={mockedItemClick}
        placeholder="Search here"
      />
    );

    await userEvent.type(getByRole('textbox'), 'John');

    await waitFor(() => expect(mockedOnChange).toHaveBeenCalled());
  });

  it('should be able to handle blur event in input blur', async () => {
    const { getByRole, queryAllByText } = render(
      <SearchBox
        items={mockedItems}
        onChange={mockedOnChange}
        onItemClick={mockedItemClick}
        placeholder="Search here"
      />
    );

    const inputElement = getByRole('textbox');
    userEvent.click(inputElement);
    expect(inputElement).toHaveFocus();
    await userEvent.type(inputElement, 'John');

    const itemsElements = queryAllByText('John');
    await waitFor(() => {
      expect(itemsElements[0]).toBeInTheDocument();
      expect(itemsElements[1]).toBeInTheDocument();
    });

    const cardElement = itemsElements[0];
    userEvent.click(cardElement);

    expect(inputElement).not.toHaveFocus();
    await waitFor(() => {
      expect(itemsElements[0]).not.toBeInTheDocument();
      expect(itemsElements[1]).not.toBeInTheDocument();
    });
  });
});
