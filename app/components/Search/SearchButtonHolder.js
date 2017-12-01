import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  right: -40px;
  opacity: ${(props) => props.visible ? '0.5' : '0'};
  bottom: -10px;
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  transition: all 1s, transform 0.1s;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(1.1);
    transition: 0s;
    &:after {
      transition: 0s;
      background: rgba(0,0,0,0.04);
      width: 75px;
      height: 75px;
      opacity: 1;
    }
  }
  &:after {
    opacity: 0;
    width: 0;
    height: 0;
    transition: all 0.1s cubic-bezier(1.000, 0.275, 1.000, 0.055);
    content: '';

    border-radius: 100%;
    position: absolute;
    z-index: 2;

  }
  &>svg {
    z-index: 3;
  }
`;
