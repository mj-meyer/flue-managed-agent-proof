import assert from 'node:assert/strict';
import test from 'node:test';

import { createServer } from '../src/server.js';

function request(path) {
  const server = createServer();
  return new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      fetch(`http://127.0.0.1:${port}${path}`)
        .then(async (res) => {
          const body = await res.text();
          resolve({ status: res.status, body });
        })
        .catch(reject)
        .finally(() => server.close());
    });
  });
}

test('renders the managed UI heading', async () => {
  const res = await request('/');
  assert.equal(res.status, 200);
  assert.match(res.body, /<h1>Managed UI verified<\/h1>/);
});

test('returns 404 for unknown paths', async () => {
  const res = await request('/nope');
  assert.equal(res.status, 404);
});
