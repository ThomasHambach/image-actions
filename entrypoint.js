#!/usr/bin/env node

const { GITHUB_TOKEN, GITHUB_EVENT_NAME } = require("./src/constants");

const githubEvent = require("./src/github-event");
const run = require("./src/index.js");

if (!GITHUB_TOKEN) {
  console.log("::error:: You must enable the GITHUB_TOKEN secret");
  process.exit(1);
}

const main = async () => {
  await run();
};

main();
