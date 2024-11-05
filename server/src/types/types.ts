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

interface IAuthApiKey {
  key: string;
  name: string;
}

export interface IConfig {
  server: ServerConfig;
  db: DbConfig;
  session: ISessionConfig;
  apiAuth: IAuthApiKey;
}
