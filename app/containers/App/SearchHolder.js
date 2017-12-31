import styled from 'styled-components';

export default styled.div`
  position: fixed;
  transition: all 1s;
  ${(props) => props.attached ? `
    &>* {
      top: 10px;
      left: calc(50% - 200px);

    }
  ` : `
    &>* {
      left: calc(50% - 200px);
      top: calc(50% - 25px);

    }
  `}
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  display: flex;
  pointer-events: none;
  &>* {
    pointer-events: auto;
  }
`;
