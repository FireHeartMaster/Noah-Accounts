const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const entriesPath = path.join(root, "data", "globe-entries.ts");
const progressPath = path.join(root, "data", "translation-progress.json");

const source = fs.readFileSync(entriesPath, "utf8");
const progress = JSON.parse(fs.readFileSync(progressPath, "utf8"));

const entryIds = [...source.matchAll(/"id":\s*"([^"]+)"/g)].map((match) => match[1]);
const translatedIds = [
  ...source.matchAll(/"translations":\s*entryTranslations\["([^"]+)"\]/g),
].map((match) => match[1]);

const translatedSet = new Set(translatedIds);
const untranslated = entryIds.filter((id) => !translatedSet.has(id));

console.log(`entries=${entryIds.length}`);
console.log(`translated=${translatedIds.length}`);
console.log(`untranslated=${untranslated.length}`);

if (untranslated.length === 0) {
  console.log("next_batch=none");
  console.log("current_status=completed");
} else {
  console.log(`next_batch=${progress.currentBatch.batchNumber} (${progress.currentBatch.range})`);
  console.log(`current_status=${progress.currentBatch.status}`);
  console.log("next_entry_ids=");
  for (const id of untranslated.slice(0, progress.batchSize)) {
    console.log(`- ${id}`);
  }
}
