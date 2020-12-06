import React from 'react';

import { uid } from './helpers';

/**
 * Top navbar component. Layout of child Navbar
 * components depends upon mode of the first Reader
 * component, if one exists.
 * 
 * @component
 */
const Footer: Component & {
  Left: any,
  Right: any
} = ({ id, className = '', children }) => 
  <footer id={id || uid(5)} className={`footer ${className}`}>
    {children}
  </footer>

/**
 * Container for the left-justified contents of the Footer.
 * 
 * @component
 */
export const Left: Component = ({ id, className = '', children }) =>
  <div id={id || uid(5)} className={`footer-left ${className}`}>
    {children}
  </div>

/**
 * Container for the right-justified contents of the Footer.
 * 
 * @component
 */
export const Right: Component = ({ id, className = '', children }) =>
  <div id={id || uid(5)} className={`footer-right ${className}`}>
    {children}
  </div>

Footer.Left = Left;
Footer.Right = Right;

export default Footer;
