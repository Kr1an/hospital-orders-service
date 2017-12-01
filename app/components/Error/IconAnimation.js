import styled, { keyframes } from 'styled-components';

const sizingRotationRepeat = keyframes`
  0% { opacity: 0.6; transform:rotate(0deg) scale(1)}
  50% { opacity: 0.1; transform:rotate(20deg) scale(1.4)}
  100% { opacity: 0.6; transform:rotate(0deg) scale(1)}
`;

export default styled.div`
  animation: ${sizingRotationRepeat} 20s ease-in-out infinite;
  position: relative;
  &:hover {
    cursor: pointer
  }
`;
