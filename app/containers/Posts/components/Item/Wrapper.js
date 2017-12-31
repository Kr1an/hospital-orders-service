import styled from 'styled-components';

export default styled.div`
  font-family: FiraSansCondensed-Light;
  ${(props) => props.active ? `
    height: 400px;
    transition: 0.1 ease;
    filter: invert(5%);
  ` : `
    height: 80px;
  `}
  width: 100%;
  overflow: hidden;
  min-width: 300px;
  border: 2px solid rgba(0,0,0,0.00);
  display: flex;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transition: 0.1 ease;
    filter: invert(5%);
  }
`;
