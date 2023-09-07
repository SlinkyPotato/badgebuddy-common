// const { readFileSync } = require('fs');
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { NodeEnvs } from '../enums/node-envs.enum';

/**
 * Parse changes.md file and write ./release.md file
 * @param inputFile
 */
export const parseReleaseUtil = (inputFile = 'changes.md') => {
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

  if (changes.length === 0) {
    throw new Error('No changes found in changes.md file');
  }

  if (process.env.NODE_ENV !== NodeEnvs.TEST) {
    // write changes to file
    writeFileSync('./release.md', changes.join('\n'));
    console.log('release.md file created');
  }
  return changes;
};
