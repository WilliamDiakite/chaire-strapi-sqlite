const path = require("path");
const fs = require("fs");

module.exports = ({ env }) => {
  let fname;

  if (env("NODE_ENV") === "development") {
    fname = fs.readdirSync(path.join(__dirname, "..", "backups")).sort().at(-1);

    console.log(
      "\nUsing backup file:",
      path.join(__dirname, "..", `backups/${fname}`),
      "\n"
    );
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env(
          "DATABASE_FILENAME",
          path.join(
            __dirname,
            "..",
            `${fname ? `backups/${fname}` : ".tmp/data.db"}`
          )
        ),
      },
      useNullAsDefault: true,
    },
  };
};
