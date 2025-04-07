const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tooba-web.myababil.com',
    chromeWebSecurity: false, // important for iframe testing
  },
});
