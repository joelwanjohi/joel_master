/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_GA_MEASUREMENT_ID: string
    // Add other env variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }