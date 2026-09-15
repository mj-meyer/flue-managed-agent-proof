import assert from 'node:assert/strict';
import test from 'node:test';

import { greeting } from '../src/greeting.js';
import { exclamation } from '../src/punctuation.js';

test('greets a name', () => {
  assert.equal(greeting('Ada'), 'Hello, ADA!');
});

test('exclamation returns an exclamation mark', () => {
  assert.equal(exclamation(), '!');
});
