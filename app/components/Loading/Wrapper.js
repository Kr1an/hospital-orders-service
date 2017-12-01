import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% { top: -100px; opacity: 0;}
  20% { opacity: 0;}
  100% {top: 0px; opacity: 0.3;}
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  &>div {
    position: relative;
    animation-name: ${appear};
    animation-duration: 0.4s;
  }
`;

export default Wrapper;
