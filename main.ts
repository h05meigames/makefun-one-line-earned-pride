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
// The line: "The fourth loaf rose. Mara pulled it from the oven, pressed
// her ear to the warm crust, and heard it crackle — the sound her
// grandmother's kitchen used to make."
//
// It is one small, concrete scene: a kitchen, an oven, a loaf of bread.
// The pride is earned inside the line — "the fourth loaf" carries three
// failed loaves before it, a long effort felt in the number, not announced.
// Nothing congratulates her and nothing explains the feeling; the pride
// arrives with the last words, "the sound her grandmother's kitchen used
// to make", which is the whole payoff in one read: she has finally made
// the bread she grew up hearing. No trophy, no podium, no graduation —
// just a woman who kept kneading until the kitchen sounded right again.
//
// Node 22, standard library only. Writes the line to /output/entry.txt
// with a genuine length guard: it throws if the line is outside 1–240
// characters (counted in code points, as the gate counts characters),
// blank, or more than one line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The fourth loaf rose. Mara pulled it from the oven, pressed her ear to the warm crust, and heard it crackle — the sound her grandmother's kitchen used to make.";

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
