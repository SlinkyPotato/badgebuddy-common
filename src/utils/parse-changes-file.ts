// const { readFileSync } = require('fs');
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';

export const parseChangesFile = (inputFile?: string) => {
  inputFile = inputFile || 'changes.md';
  const text = readFileSync(inputFile, { encoding: 'utf-8' });
  const lines = text.split('\n');

  let numOfBlocks = 0;
  const changes = [];
  for (const line of lines) {
    if (line === '---') {
      numOfBlocks++;
      continue;
    }
    if (numOfBlocks === 1) {
      changes.push(line);
    }
    if (numOfBlocks >= 2) {
      break;
    }
  }

  // write changes to file
  writeFileSync('./release.md', changes.join('\n'));
  return changes;
};