import React from 'react';
import { MdCached } from 'react-icons/lib/md';
import Wrapper from './Wrapper';
import IconAnimation from './IconAnimation';
import BackgroundAnimation from './BackgroundAnimation';

export default function ErrorComponent() {
  return (
    <BackgroundAnimation>
      <Wrapper>
        <IconAnimation>
          <MdCached size={120} onClick={() => { window.location.reload(); }} />
        </IconAnimation>
      </Wrapper>
    </BackgroundAnimation>
  );
}
