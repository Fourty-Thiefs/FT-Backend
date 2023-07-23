declare namespace NodeJS {
  interface ProcessEnv {
    MODE: 'development' | 'staging' | 'production';
    DATABASE_USERNAME: string;
    DATABASE_NAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
  }
}
