import { exclamation } from './punctuation.js';

export function greeting(name) {
  return `Hello, ${name.toUpperCase()}${exclamation()}`;
}
