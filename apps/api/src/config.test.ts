import test from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig } from './config.js';

test('loads server config from valid environment values', () => {
  const config = loadConfig({ PORT: '4321', DATABASE_URL: 'postgresql://user:pass@localhost:5432/db' });
  assert.equal(config.port, 4321);
  assert.equal(config.databaseUrl.protocol, 'postgresql:');
});

test('rejects missing or malformed server configuration', () => {
  assert.throws(() => loadConfig({}), /DATABASE_URL is required/);
  assert.throws(() => loadConfig({ PORT: '0', DATABASE_URL: 'postgres://localhost/db' }), /PORT must be/);
  assert.throws(() => loadConfig({ DATABASE_URL: 'https://example.invalid' }), /must use postgres/);
  assert.throws(() => loadConfig({ DATABASE_URL: 'postgres://' }), /host and database name/);
  assert.throws(() => loadConfig({ DATABASE_URL: 'postgres://localhost' }), /host and database name/);
  assert.throws(() => loadConfig({ DATABASE_URL: 'postgres://localhost/' }), /host and database name/);
});
