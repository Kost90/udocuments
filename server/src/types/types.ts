interface ServerConfig {
  port: number;
}

interface DbConfig {
  url: string;
}

export interface IConfig {
  server: ServerConfig;
  db: DbConfig;
}
