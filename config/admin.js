const crypto = require("crypto");

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b4dbad35-6caa-4f84-be56-90d0d3bc2fdf"),
  },
  apiToken: {
    // salt: env("API_TOKEN_SALT", "someRandomLongString"),
    salt: env("API_TOKEN_SALT", "someRandomLongString"),
  },
  transfer: {
    token: {
      salt: env(
        "TRANSFER_TOKEN_SALT",
        crypto.randomBytes(16).toString("base64")
      ),
    },
  },
});
