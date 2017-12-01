import styled, { keyframes } from 'styled-components';

const swipedFromLeft = keyframes`
  from {
    left: -200px;
    top: -200px;
    opacity: 0;
  }
  to {
    left: 0%;
    top:0%;
    opacity: 1
  }
`;

const swipedFromRight = keyframes`
  from {
    right: -200px;
    top: -200px;
    opacity: 0;
  }
  to {
    right: 0%;
    top: 0%;
    opacity: 1
  }
`;

export default styled.div`
  pointer-events: none;
  width:40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &>*{
    pointer-events: auto;
    margin-bottom: 30px;

    position: relative;
    &:nth-of-type(2n - 1) {
      animation: ${swipedFromLeft} 0.5s ease;
    }
    &:nth-of-type(2n) {
      animation: ${swipedFromRight} 0.5s ease;
    }
  }
`;
