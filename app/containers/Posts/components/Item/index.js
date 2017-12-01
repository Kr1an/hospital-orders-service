/**
*
* Item
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { withRouter } from 'react-router-dom';


import Wrapper from './Wrapper';
import Title from './Title';
import Date from './Date';
import Meta from './Meta';

import Body from './Body';

function Item({ clickHandler, active }) {
  return (
    <Wrapper onClick={clickHandler} active={active}>
      <Meta>
        <Title>Blood Analys</Title>
        <Date>1.13.2017</Date>
      </Meta>
      <div style={{ transition: 'all 0.5s ease', background: active ? 'rgba(0,0,0,0.02)' : null }}>
        <Body active={active}>
          Test Information is going here Test Information is going here Test Information is going here Test Information is going here Test Information is going here Test Information is going here Test Information is going here Test Information is going here
        </Body>
      </div>
    </Wrapper>
  );
}

Item.propTypes = {
  clickHandler: PropTypes.func,
  active: PropTypes.bool,
};

export default withRouter(Item);
