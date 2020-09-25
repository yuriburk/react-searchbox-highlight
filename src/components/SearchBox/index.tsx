import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import debounce from 'lodash.debounce';

import Highlighter from '../Highlighter';
import {
  Container,
  Card,
  SearchIcon,
  Input,
  LoadingIcon,
  CloseIcon,
  ItemsContainer,
  Item,
} from './styles';

export interface ISearchBoxProps {
  items: { label: string; value: unknown }[];
  onChange(value: string): void;
  onItemClick(value: unknown): void;
  debounceTime?: number;
  placeholder?: string;
  highlighterStyle?: Record<string, unknown>;
}

const SearchBox = ({
  items,
  onChange,
  onItemClick,
  debounceTime = 200,
  placeholder = 'Search...',
  highlighterStyle = {
    color: '#fff',
    backgroundColor: '#9999ff',
  },
}: ISearchBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isMounted = useRef(true);

  const [isLoading, setIsLoading] = useState(false);
  const [searchWords, setSearchWords] = useState<string[]>([]);

  const handleDebouncedChange = useMemo(
    () =>
      debounce((value: string) => {
        onChange(value);

        if (isMounted.current) {
          setIsLoading(false);
        }
      }, debounceTime),
    [onChange, debounceTime]
  );

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleClearInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setIsLoading(false);
    setSearchWords([]);
  }, []);

  const handleOnChange = useCallback(
    (event) => {
      event.persist();
      setIsLoading(true);
      const { value } = event.target;

      if (value.length > 0) {
        setSearchWords(value.split(' '));
        handleDebouncedChange(value);
      } else {
        handleClearInput();
      }
    },
    [handleDebouncedChange, handleClearInput]
  );

  const handleOnItemClick = useCallback(
    (value) => {
      handleClearInput();
      onItemClick(value);
    },
    [handleClearInput, onItemClick]
  );

  return (
    <Container>
      <Card>
        <SearchIcon />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        {isLoading ? (
          <LoadingIcon />
        ) : (
          searchWords.length > 0 && (
            <CloseIcon onClick={() => handleClearInput()} />
          )
        )}
      </Card>
      {items?.length > 0 && searchWords.length > 0 && (
        <ItemsContainer>
          {items.map((item, index) => (
            <Item key={index} onClick={() => handleOnItemClick(item.value)}>
              <Highlighter
                searchWords={searchWords}
                text={item.label}
                style={highlighterStyle}
              />
            </Item>
          ))}
        </ItemsContainer>
      )}
    </Container>
  );
};

export default SearchBox;
