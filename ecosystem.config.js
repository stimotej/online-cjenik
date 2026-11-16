// pm2: jedan proces po cjeniku, svi iz istog checkouta.
//   npm run build:all && pm2 start ecosystem.config.js
const path = require("path");

const next = path.join(__dirname, "node_modules/next/dist/bin/next");

const app = (name, cjenik, port) => ({
  name,
  cwd: __dirname,
  script: next,
  args: `start -p ${port}`,
  env: { NODE_ENV: "production", CJENIK: cjenik },
});

module.exports = {
  apps: [
    app("cjenik", "caffe-barovi", 3000),
    app("cjenik-mzo", "caffe-mzo", 3001),
    app("cjenik-pauk-td-kino", "pauk-td-kino", 3005),
  ],
};
