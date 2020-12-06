import React from 'react';

import { uid, style } from './helpers';

/**
 * A HTML form.
 * 
 * @component 
 */
const Form: Component & {
  Group?: any,
  Label?: any,
  Input?: any
} = ({ id, className = '', children }) =>
  <form id={id || uid(5)} className={style(className, 'form')}>
    {children}
  </form>

/**
 * Form group component, used to wrap labels and form controls.
 * 
 * @component
 */
export const Group: Component = ({ id, className = '', children })=>
  <div id={id || uid(5)} className={style(className, 'form-group')}>
    {children}
  </div>

/**
 * A form label component, can be attached to an input.
 * 
 * @component
 * @param {string} [htmlFor] The `name` or `id` of an input in the same form group.
 */
export const Label: Component & {
  htmlFor?: string
} = ({ htmlFor, id, className = '', children }) => 
  <label id={id || uid(5)} className={style(className, 'form-label')} htmlFor={htmlFor}>{children}</label>

/**
 * Form input control.
 * 
 * @component
 * @param {string} [name] Input name. 
 * @param {string} [type] HTML input type.
 * @param {string} [placeholder] Placeholder text.
 * @param {string} [value] Preset contents.
 * @param {string} [label] Set this to render a form label attached to this input.
 */
export const Input: Input & {
  valid?: boolean,
  invalid?: boolean
} = ({ valid, invalid, name, type = 'text', placeholder, value, label, id, className = '' }) => {

  const formId: string = id || uid(5);
  const validity: string = (valid && 'valid') || (invalid && 'invalid');

  return (
    <>
      {
        label &&
        <Label className={style(className)} htmlFor={name || formId}>
          {label}
        </Label>
      }
      <input
        id={formId}
        className={style(className, `form-input ${validity}`)}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

Form.Group = Group;
Form.Label = Label;
Form.Input = Input;

export default Form;
