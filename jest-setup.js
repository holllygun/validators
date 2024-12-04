const {
  setup: setupDevServer,
  teardown: teardownDevServer,
} = require("jest-dev-server");

module.exports = async () => {
  await setupDevServer({
    command: "yarn start",
    launchTimeout: 50000,
    port: 9000,
  });
};
