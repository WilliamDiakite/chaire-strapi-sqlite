const path = require("path");
const fs = require("fs");

const fname = fs
  .readdirSync(path.join(__dirname, "..", "backups"))
  .sort()
  .at(-1);

console.log(
  "\nUsing backup file:",
  path.join(__dirname, "..", `backups/${fname}`),
  "\n"
);

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: env(
        "DATABASE_FILENAME",
        path.join(__dirname, "..", `backups/${fname}`)
      ),
    },
    useNullAsDefault: true,
  },
});
