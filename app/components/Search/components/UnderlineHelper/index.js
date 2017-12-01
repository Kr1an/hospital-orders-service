/**
*
* UnderlineHelper
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import Wrapper from './Wrapper';
import Input from './Input';


const UnderlineHelper = ({ value }) => <Wrapper><Input>{value.replace(new RegExp(' ', 'g'), '\u00A0')}</Input></Wrapper>;

UnderlineHelper.propTypes = { value: PropTypes.string };

export default UnderlineHelper;
