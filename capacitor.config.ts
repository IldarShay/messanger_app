import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nuxt.app',
  appName: 'nuxt-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
