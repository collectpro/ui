/**
 * Returns 'sm', 'md' or 'lg' depending on current screen width.
 */
export const screen = () => window.screen.width <= 576 ? 'sm' : window.screen.width <= 1024 ? 'md' : 'lg';

/**
 * Generates a random alphanumeric string of a given length.
 * 
 * @param {number} length Char length of generated string.
 */
export const uid = (length: number): string => {

  length = length || 5;

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let _uid = '';

  for (let i = 0; i < length; i++) {
    _uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Try again if the generated ID is already taken.
  return document.getElementById(_uid) ? uid(length) : _uid;
}

export const style = (classNames: string = '', add: string = '') => `${classNames} ${add}`
