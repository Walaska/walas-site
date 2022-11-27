declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DISCORD_AUTH: number;
      }
    }
  }

  export {}