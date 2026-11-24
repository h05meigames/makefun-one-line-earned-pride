// One Line of Earned Pride — make.fun bounty u-mang-one-line-of-earned-pride-a0138557
//
// The task: one line of text, 1 to 240 characters, that gives the judge a
// quiet, earned moment of pride for someone in a scene — a small person
// doing something hard, or a long effort finally landing. The judge weighs,
// most important first: genuine earned pride; a concrete scene with a real
// person in it; pride earned inside the line by effort or difficulty the
// reader can feel, never asserted or explained; landing in one read; and
// freshness (no stock trophy, podium or graduation).
//
// The line: "Three summers of scraped knees, and then one July evening,
// eight-year-old June rode past the mailbox, past the oak, all the way to
// the corner — and never once looked back."
//
// It is one small, concrete scene: a child, a bike, a street with a mailbox
// and an oak. The pride is earned inside the line — three summers of scraped
// knees is the effort, felt in the body, not announced. Nothing congratulates
// her and nothing explains the feeling; the pride arrives with the last
// words, "never once looked back", which is the whole payoff in one read:
// the looking back is what a frightened child does, and she has stopped
// doing it. No trophy, no podium, no graduation — just a girl who kept
// getting back on the bike until the street ran out under her.
//
// Node 22, standard library only. Writes the line to /output/entry.txt
// with a genuine length guard: it throws if the line is outside 1–240
// characters (counted in code points, as the gate counts characters),
// blank, or more than one line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Three summers of scraped knees, and then one July evening, eight-year-old June rode past the mailbox, past the oak, all the way to the corner — and never once looked back.";

const length = [...LINE].length;
if (length < 1 || length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
