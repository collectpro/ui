declare module '@carbon/icons-react';

declare interface Component {
  ({
    [propName]: string,
    id,
    className,
    children
  }: {
    [propName?: string]: any,
    id?: string,
    className?: string = '',
    children?: React.ReactNode
  }): JSX.Element;
}

declare interface Input extends Component {
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' |
         'hidden' | 'image' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' |
         'tel' | 'text' | 'time' | 'url' | 'week',
  value?: string | number,
  readonly?: boolean,
  disabled?: boolean,
  size?: string | number,
  maxlength?: string | number,
  min?: string | number,
  max?: string | number,
  multiple?: boolean,
  pattern?: string,
  placeholder?: string | number,
  required?: boolean,
  step?: string | number,
  autofocus?: boolean,
  autocomplete?: 'on' | 'off'
  list?: string,
  name?: string
}
