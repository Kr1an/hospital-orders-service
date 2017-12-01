/**
*
* TestComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TestComponent() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TestComponent.propTypes = {

};

export default TestComponent;
