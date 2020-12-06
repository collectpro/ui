import React from 'react';

import { uid } from './helpers';

const Row = ({ children }: { children: React.ReactNode }) =>
  <div id={uid(5)} className="row">
    {children}
  </div>

export default Row;
