import React, { useState, useEffect } from 'react';

import { uid } from './helpers';

/**
 * Top navbar component. Layout of child Navbar
 * components depends upon mode of the first Reader
 * component, if one exists.
 * 
 * @component
 */
const Navbar: Component & {
  readerId?: string,
  Brand: any,
  Left: any,
  Right: any
} = ({ readerId, id, className, children }) => {

  const [readerMode, setReaderMode] = useState('wide');

  // Responsively adjust constraints.
  const onResize = () => {

    const element = readerId && document.getElementById(readerId);

    // Link to a Reader component and match its sizing constraints.
    if (element) element.classList.forEach((_className: string) => {
      if (['reader-narrow', 'reader-wide', 'reader-full'].includes(_className)) {
        setReaderMode(_className.split('-')[1]);
      }
    });
  }

  // Listen to screen width changes.
  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, [readerId]);

  return (
    <div id={id || uid(5)} className={`navbar navbar-${readerMode} ${className}`}>
      {children}
    </div>
  );
}

/**
 * A container for a logo or branding component within the Navbar.
 * 
 * @component
 */
export const Brand: Component = ({ id, className, children }) =>
  <div id={id || uid(5)} className={`navbar-brand ${className}`}>
    {children}
  </div>

/**
 * Container for the left-justified contents of the Navbar.
 * 
 * @component
 */
export const Left: Component = ({ id, className, children }) =>
  <div id={id || uid(5)} className={`navbar-left ${className}`}>
    {children}
  </div>

/**
 * Container for the right-justified contents of the Navbar.
 * 
 * @component
 */
export const Right: Component = ({ id, className, children }) =>
  <div id={id || uid(5)} className={`navbar-right ${className}`}>
    {children}
  </div>

Navbar.Brand = Brand;
Navbar.Left = Left;
Navbar.Right = Right;

export default Navbar;
