import React, { useState, useEffect } from 'react';

import { screen, uid, style } from './helpers';

/**
 * A top-level component that fills the space of its parent,
 * constraining its contents to the centre with large whitespace
 * on the sides for easy reading. Restrictions apply to screen
 * and are applied responsively.
 * 
 * @component
 * @param {string} mode Width of content ("narrow", "wide", "full").
 */
const Reader: Component & {
  mode?: 'narrow' | 'wide' | 'full'
} = ({ mode = 'narrow', id, className = '', children }) => {

  const [_mode, setMode] = useState(mode);

  // Responsively adjust constraints.
  const onResize = () => {
      
    if (screen() === 'sm') setMode('full');
    else if (screen() === 'md' && mode === 'narrow') setMode('wide');
    else setMode(mode);
  }

  // Listen to screen width changes.
  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div id={id || uid(5)} className={style(className, `reader reader-${_mode}`)}>
      {children}
    </div>
  );
}

export default Reader;
