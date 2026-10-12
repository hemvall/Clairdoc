import { createServer as createHttpServer, type Server } from 'node:http';
import type { HealthResponse } from '@clairdoc/contracts';

export function createServer(): Server {
  return createHttpServer((request, response) => {
    if (request.method === 'GET' && request.url === '/health') {
      const body: HealthResponse = { status: 'ok' };
      response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify(body));
      return;
    }
    response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ error: 'Not found' }));
  });
}
