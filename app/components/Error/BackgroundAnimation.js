import styled, { keyframes } from 'styled-components';

const ChangeColorRepeat = keyframes`
  0% {filter: invert(0%)}
  50% {filter: invert(20%)}
  100% {filter: invert(0%)}
`;

export default styled.div`
  animation: ${ChangeColorRepeat} 6s ease-in-out infinite;
`;
