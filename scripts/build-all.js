// Gradi sve cjenike redom: `npm run build:all`
const { spawnSync } = require("child_process");
const { CJENICI } = require("../cjenik.config");

for (const id of Object.keys(CJENICI)) {
  console.log(`\n=== CJENIK=${id} ===`);
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: { ...process.env, CJENIK: id },
  });
  if (result.status !== 0) process.exit(result.status || 1);
}
