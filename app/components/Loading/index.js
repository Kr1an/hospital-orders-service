import React from 'react';
import MDSpinner from 'react-md-spinner';

import Wrapper from './Wrapper';


export default function Loading() {
  return (
    <Wrapper>
      <div>
        <MDSpinner size={100} />
      </div>
    </Wrapper>
  );
}
