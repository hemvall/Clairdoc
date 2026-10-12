import { loadConfig } from './config.js';
import { createServer } from './server.js';

try {
  const config = loadConfig();
  const server = createServer();
  server.listen(config.port, () => {
    console.info(`Clairdoc API listening on port ${config.port}`);
  });
  server.on('error', (error: NodeJS.ErrnoException) => {
    console.error(`Unable to start Clairdoc API: ${error.message}`);
    process.exitCode = 1;
  });
} catch (error) {
  console.error(error instanceof Error ? error.message : 'Invalid server configuration');
  process.exitCode = 1;
}
