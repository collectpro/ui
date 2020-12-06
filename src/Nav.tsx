import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

import { uid } from './helpers';

/**
 * Link component for use in the Navbar. Uses the `Link` component from react-router-dom.
 * 
 * @component
 * @param {ReactElement} icon If present, renders as an icon button.
 * @param {string} colour Button colour, primary by default ("primary", "accent", "alertgood", "alertbad").
 */
const Button = ({ icon, colour, children }: {
  icon?: React.ReactElement,
  colour?: 'primary' | 'accent' | 'alertgood' | 'alertbad',
  children?: React.ReactNode
}) => {

  colour = colour || 'primary';

  return (
    <button id={uid(5)} className={`navbutton navbutton-${colour}${icon ? ' navbutton-icon': ''}`}>
      {icon || children}
    </button>
  );
}

/**
 * Link component for use in the Navbar. Uses the `Link` component from react-router-dom.
 * 
 * @component
 * @param {string} to The target route when clicked.
 * @param {boolean} active Set to true to render this component it its 'active' state. Overrides route matching.
 */
const Link = ({ to, active, children }: {
  to: string,
  active?: boolean,
  children?: React.ReactNode
}) => {

  let match = active || useRouteMatch(to);

  return (
    <RouterLink id={uid(5)} to={to} className={`navlink${match ? ' navlink-active' : ''}`}>
      {children}
    </RouterLink>
  );
}

export default { Button, Link };
