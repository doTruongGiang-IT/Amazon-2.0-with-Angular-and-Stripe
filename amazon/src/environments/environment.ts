// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: "https://fakestoreapi.com/products",
  client_ID: "312566194748-hv2tk069ejt74uhgdk9tbbej87jhp52l.apps.googleusercontent.com",
  client_secret: "OkihaWnTONTKvnsIRl88HEFV",
  firebaseConfig: {
    apiKey: "AIzaSyAwr2LNRhqGS-kj81kaH2BsaB6dHUFFlTU",
    authDomain: "angular-f7786.firebaseapp.com",
    projectId: "angular-f7786",
    storageBucket: "angular-f7786.appspot.com",
    messagingSenderId: "312566194748",
    appId: "1:312566194748:web:2ec6b081b822dc3fc09939"
  },
  stripe_secret_key: "sk_test_51JGwcVGI3uSojLMgx2LM8PoQqxw4iYbSMdMojShMnrPWYYaepIOOxAEbr70ApzhloKnEJU7ALsJTOVOiV7b6oWNY00hPUEmRaP",
  stripe_public_key: "pk_test_51JGwcVGI3uSojLMgxnjqLEMMsiIonVytEErnnfCeT4YFHRlMr2Wln8HefdZfBIccb4w1goK1nFjBgQ6t9Enxqoel00nUjUVfPf",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
