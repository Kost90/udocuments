interface ServerConfig {
  port: number;
}

interface DbConfig {
  url: string;
}

interface ISessionConfig {
  secureCookie: boolean;
  cookieName: string;
  secret: string;
}

export interface IConfig {
  server: ServerConfig;
  db: DbConfig;
  session: ISessionConfig;
}
