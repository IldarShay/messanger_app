import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nuxt.app',
  appName: 'nuxt-app',
  webDir: '.output/public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
