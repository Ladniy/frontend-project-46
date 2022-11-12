#!/usr/bin/env node
import { program } from 'commander';

program
  .description('Compares two configuration files and show a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')

program.parse();