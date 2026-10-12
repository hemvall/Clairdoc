export interface ServerConfig {
  port: number;
  databaseUrl: URL;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): ServerConfig {
  const portValue = env.PORT ?? '3001';
  const port = Number(portValue);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error('PORT must be an integer between 1 and 65535');
  }

  const databaseUrlValue = env.DATABASE_URL;
  if (!databaseUrlValue) throw new Error('DATABASE_URL is required');
  let databaseUrl: URL;
  try {
    databaseUrl = new URL(databaseUrlValue);
  } catch {
    throw new Error('DATABASE_URL must be a valid URL');
  }
  if (!['postgres:', 'postgresql:'].includes(databaseUrl.protocol)) {
    throw new Error('DATABASE_URL must use postgres:// or postgresql://');
  }
  if (!databaseUrl.hostname || databaseUrl.pathname.length < 2 || databaseUrl.pathname === '/') {
    throw new Error('DATABASE_URL must include a host and database name');
  }
  return { port, databaseUrl };
}
