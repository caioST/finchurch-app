import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tech.finchurchApp',
  appName: 'ionic-finchurch-app',
  webDir: 'www',
    plugins: {
      SplashScreen: {
        launchShowDuration: 2000,
        launchAutoHide: false,
        backgroundColor: "#00D09E",
        showSpinner: false,
        androidSpinnerStyle: "small",
        iosSpinnerStyle: "small",
        splashFullScreen: true,
        splashImmersive: true,
      },
  },
};

export default config;
