import styled from 'styled-components';
import { FiSearch, FiX } from 'react-icons/fi';

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 4px;
  border-color: #d2d2d2;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(240, 242, 245, 1);
`;

export const SearchIcon = styled(FiSearch)`
  color: #d2d2d2;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 18px;
`;

export const LoadingIcon = styled.div`
  display: flex;
  align-items: center;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #d2d2d2;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: spin 2s ease-in-out infinite;
`;

export const CloseIcon = styled(FiX)`
  cursor: pointer;
  color: #d2d2d2;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const ItemsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  overflow: auto;
  max-height: 289px;
  width: 100%;
  margin: 0;
  border-top: 0;
  z-index: 1;

  div + div {
    border-top: 2px solid;
    border-color: #d2d2d2;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 14px;
  color: #000;
`;
