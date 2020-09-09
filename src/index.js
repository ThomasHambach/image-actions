const generateMarkdownReport = require("./github-markdown");
const processImages = require("./image-processing");
const createComment = require("./github-pr-comment");
const createCommit = require("./github-commit");

const run = async () => {
  console.log("->> Locating images…");

  const results = await processImages();

  const optimisedImages = results.images.filter(
    img => img.compressionWasSignificant
  );

  // If nothing was optimised, bail out.
  if (!optimisedImages.length) {
    console.log("::warning:: Nothing left to optimise. Stopping…");
    return;
  }

  return results;
};

module.exports = run;
