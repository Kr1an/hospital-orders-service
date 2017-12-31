import styled, { keyframes } from 'styled-components';

const shaking = keyframes`
  0%{transform: translateX(0px) scale(1.5);}
  25%{transform: translateX(30px) scale(1.5);}
  50%{transform: translateX(0px) translateY(0px) scale(1.5);}
  75%{transform: translateX(-30px) scale(1.5);}
  100%{transform: translateX(0px) scale(1.5);}
`;

export default styled.div`
  height: 50px;
  margin-top: 10px;
  margin-right: 50px;
  position: relative;
  box-shadow: inset 0 -1.5px 0 rgba(0,0,0,0.2);
  width: 400px;
  transform: ${(props) => props.attached ? 'scale(1)' : 'scale(1.5)'};
  transition: all 0.3s ease;
  ${(props) => props.emptyResult ? `
    animation: ${shaking} 0.2s linear;
  ` : `
    animation: none;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    transition: all 0.2s;
    font-family: FiraSansCondensed-Light;
    font-size: ${(props) => props.smallPlaceholder ? '1.3rem' : '3rem'};
    content: "Your name";
    font-weight: ${(props) => props.smallPlaceholder ? 'bold' : 'normal'};
    color: ${(props) => props.smallPlaceholder ? 'gray' : 'gray'};
    opacity: 0.7;
    position: absolute;
    left:0px;
    top: ${(props) => props.smallPlaceholder ? '-15px' : '0'};
    bottom: 0;
    z-index: 5;
    pointer-events: none;
  }
  &:before {
    content: "nothing found";
    transition: all ease;
    transition-duration: ${(p) => p.emptyResult ? '0.3s' : '0.1s'};
    font-family: FiraSansCondensed-Light;
    font-size: 1.6rem;
    color: #ff2e2e;
    font-variant: small-caps;
    text-transform: lower;
    opacity: ${(props) => props.emptyResult ? '0.7' : '0'};
    position: absolute;
    font-weight: bold;
    left: 0px;
    bottom: ${(props) => props.emptyResult ? '-25px' : '-18px'};
  }
`;
