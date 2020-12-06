import React from 'react';

import { ViewPort } from 'react-spaces';

const Screen = ({ children }: { children?: React.ReactNode }) =>
  <ViewPort>
    {children}
  </ViewPort>

export default Screen;
