#!/usr/bin/env node
import { program } from 'commander';

program
  .version('1.0.0')
  .description('Compares two configuration files and show a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
program.parse();