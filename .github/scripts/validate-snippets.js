// .github/scripts/validate-snippets.js
import fs from "fs";
import path from "path";

const SNIPPETS_DIR = "snippets"; // adjust if needed
let hasError = false;

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  try {
    const data = JSON.parse(content);
    if (Object.keys(data).length === 0) {
      console.error(`❌ Empty JSON: ${filePath}`);
      hasError = true;
    }
  } catch (e) {
    console.error(`❌ Invalid JSON in ${filePath}: ${e.message}`);
    hasError = true;
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (entry.endsWith(".json")) validateFile(full);
  }
}

walk(SNIPPETS_DIR);
if (hasError) {
  console.error("❌ Snippet validation failed.");
  process.exit(1);
} else {
  console.log("✅ All snippet files are valid JSON.");
}
