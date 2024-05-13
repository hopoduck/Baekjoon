const fs = require("fs/promises");
const path = require("path");

const dir = path.resolve(process.cwd(), "./src");

async function init() {
  const list = await Promise.all(
    (await fs.readdir(dir))
      .filter((file) => file.split(".").at(-1) === "js")
      .map(async (file) => [
        path.resolve(dir, file),
        await fs.stat(path.resolve(dir, file)),
      ]),
  );
  list.sort(([_, a], [__, b]) => b.mtimeMs - a.mtimeMs);
  const [[lastModifiedFile]] = list;

  await import("file://" + lastModifiedFile);
}

init();
