const { glob } = require("glob");

const automaticFileRouting = async () => {
  const jsfiles = await glob("**/*.routes.js", { ignore: "node_modules/**" });

  jsfiles.forEach((routePath) => {
    const routes = require(`./${routePath}`);
    console.log("\n@@  file: func1.js:9  routes:", routes);
  });
};

const automaticModelRouting = async () => {
  const jsfiles = await glob("**/*.model.js", { ignore: "node_modules/**" });

  jsfiles.forEach((modelPath) => {
    const models = require(`./${modelPath}`);
    console.log("\n@@  file: func1.js:18  models:", models);
  });
};

module.exports = { automaticFileRouting, automaticModelRouting };
