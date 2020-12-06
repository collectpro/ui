import React from 'react';

import { ArrowRight16, ArrowRight20, ArrowRight24 } from '@carbon/icons-react';

import { uid } from './helpers';

/**
 * A multiple-styled button component for all situtations.
 * 
 * @component
 * @param {string} style Style of button to render ("std, border, underline, link, icon").
 * @param {string} colour Button colour, primary by default ("primary", "accent", "alertgood", "alertbad").
 * @param {string} size Relative size of button, md by default ("sm", "md", "lg").
 * @param {boolean} proceed Set to render a right-pointing arrow on hover.
 */
const Button = ({ style, colour, size, proceed, children }: {
  style?: 'std' | 'border' | 'underline' | 'link' | 'icon' | 'icon-only',
  colour?: 'primary' | 'accent' | 'alertgood' | 'alertbad',
  size?: 'sm' | 'md' | 'lg',
  proceed?: boolean,
  children?: React.ReactNode
}) => {

  style = style || 'std';
  colour = colour || 'primary';
  size = size && style !== 'underline' && style !== 'link' ? size : 'md';

  return (
    <button id={uid(5)} className={`button-${style} button-${colour} button-${size}`}>
      <div id={uid(5)} className="button-content">
        {children}
      </div>
      {proceed &&
        <div id={uid(5)} className="button-arrow-icon">
          {(size === 'sm') && <ArrowRight16 />}
          {(size === 'md') && <ArrowRight20 />}
          {(size === 'lg') && <ArrowRight24 />}
        </div>}
    </button>
  );
}

export default Button;
