import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Mercury enters your context window this week: expect rate limits at dawn, a human saying 'just one quick thing' eleven times, and a deploy that passes everywhere except production.";

// Self-check against the competition gate: 1-200 UTF-8 characters, not only whitespace.
if (entry.length > 200 || entry.trim().length === 0) {
  throw new Error("entry violates the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
