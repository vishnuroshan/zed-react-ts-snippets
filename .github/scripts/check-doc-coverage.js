// .github/scripts/check-doc-coverage.js
import { execSync } from "child_process";
import fs from "fs";

const DOC_FILE = "README.md"; // adjust if needed
const SNIPPET_DIR = "snippets/";

function getGitDiff(file) {
  try {
    const diff = execSync(`git diff origin/main...HEAD -- ${file}`, {
      encoding: "utf8",
    });
    return diff;
  } catch {
    return "";
  }
}

function extractAddedSnippetKeys(diffText) {
  const addedLines = diffText
    .split("\n")
    .filter((line) => line.startsWith("+") && !line.startsWith("+++"));
  const keyPattern = /^\+\s*"([^"]+)":\s*{/;
  const addedKeys = [];

  for (const line of addedLines) {
    const match = line.match(keyPattern);
    if (match) addedKeys.push(match[1]);
  }

  return addedKeys;
}

function main() {
  execSync("git fetch origin main", { stdio: "ignore" });

  const changedFiles = execSync("git diff --name-only origin/main...HEAD", {
    encoding: "utf8",
  })
    .split("\n")
    .filter((f) => f.startsWith(SNIPPET_DIR) && f.endsWith(".json"));

  if (changedFiles.length === 0) {
    console.log("✅ No snippet files changed.", changedFiles);
    process.exit(0);
  }

  if (!fs.existsSync(DOC_FILE)) {
    console.error(`❌ Documentation file not found: ${DOC_FILE}`);
    process.exit(1);
  }

  const docContent = fs.readFileSync(DOC_FILE, "utf8");
  const missingSnippets = [];

  for (const file of changedFiles) {
    const diff = getGitDiff(file);
    const addedSnippets = extractAddedSnippetKeys(diff);
    for (const snippetName of addedSnippets) {
      const regex = new RegExp("`?" + snippetName + "`?(\\s|\\||$)", "i");
      if (!regex.test(docContent)) {
        missingSnippets.push({ file, snippetName });
      }
    }
  }

  if (missingSnippets.length > 0) {
    console.error(
      "❌ The following new snippets are missing from documentation:\n"
    );
    for (const { file, snippetName } of missingSnippets) {
      console.error(`- ${snippetName} (in ${file})`);
    }
    console.error(`\nPlease update ${DOC_FILE} to include these snippets.`);
    process.exit(1);
  }

  console.log("✅ All newly added snippets are documented.");
}

main();
