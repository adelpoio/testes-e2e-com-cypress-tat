const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    projectId: "vy1hn1"
    env: {
      viewportWidthBreakpoint: 768,
    },
    
  },
});
