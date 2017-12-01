import styled from 'styled-components';

export default styled.p`
  font-size: 1rem;
  margin: 15px 20px;
  padding: 0px;
  position: relative;
  color: rgba(0,0,0,0.5);
  line-height: 150%;
  ${(props) => props.active ? `
    -webkit-line-clamp: 10;
    &:after {
    }
  ` : `
    -webkit-line-clamp: 2;
  `}
  font-family: inherit;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;

`;
