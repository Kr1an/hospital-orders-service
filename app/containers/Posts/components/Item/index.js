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

function Item({ clickHandler, active, data }) {
  debugger
  return (
    <Wrapper onClick={clickHandler} active={active}>
      <Meta>
        <Title>{data.title}</Title>
        <Date>1.13.2017</Date>
      </Meta>
      <div style={{ transition: 'all 0.5s ease', background: active ? 'rgba(0,0,0,0.02)' : null }}>
        <Body active={active}>
          {
            !active ? (
              <div>
                {
                  data.pre_text
                }
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            )
          }
        </Body>
      </div>
    </Wrapper>
  );
}

Item.propTypes = {
  clickHandler: PropTypes.func,
  active: PropTypes.bool,
  data: PropTypes.object,
};

export default withRouter(Item);
