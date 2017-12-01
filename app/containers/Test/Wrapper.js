import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40%;
  }
`;

export default styled.div`
  pointer-events: auto;
  cursor: pointer;
  width: 40%;
  animation: ${appear} 2s ease;
`;

