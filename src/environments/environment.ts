export const REST_API_NAME = 'main';

export const environment = {
  production: false,
  apiUrl: 'https://localhost:3000',
  version: '1.0.0-dev',
  serverUrl: '/api',
  envName: 'DEV',
  API_URL: 'assets/api',

  API: {
    endpoints: [
      {
        name: REST_API_NAME,
        endpoint: 'https://localhost:3000', // for local test change to something such as 'http://localhost:3001'
      },
    ],
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
