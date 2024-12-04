const { teardown: teardownDevServer } = require('jest-dev-server');

module.exports = async () => {
  try {
    await teardownDevServer();
  } catch (err) {
    console.error('Error during globalTeardown:', err);
  }
};
