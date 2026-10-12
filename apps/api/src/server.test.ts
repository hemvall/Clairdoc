import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from './server.js';

test('serves a health response and a JSON 404', async () => {
  const server = createServer();
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  assert.ok(address && typeof address !== 'string');
  try {
    const health = await fetch(`http://127.0.0.1:${address.port}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { status: 'ok' });
    const missing = await fetch(`http://127.0.0.1:${address.port}/missing`);
    assert.equal(missing.status, 404);
  } finally {
    await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});

test('reports listen errors when the requested port is already in use', async () => {
  const occupiedServer = createServer();
  await new Promise<void>((resolve) => occupiedServer.listen(0, '127.0.0.1', resolve));
  const address = occupiedServer.address();
  assert.ok(address && typeof address !== 'string');

  const server = createServer();
  try {
    const error = await new Promise<Error>((resolve, reject) => {
      server.once('error', resolve);
      server.once('listening', () => reject(new Error('Expected port collision')));
      server.listen(address.port, '127.0.0.1');
    });
    assert.equal((error as NodeJS.ErrnoException).code, 'EADDRINUSE');
  } finally {
    await new Promise<void>((resolve, reject) => occupiedServer.close((error) => error ? reject(error) : resolve()));
  }
});
