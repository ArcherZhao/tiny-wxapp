#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
commander
    .version('0.0.1')
    .option('-b, --build', 'build wxapp')
    .option('-e, --extract <name>', 'extract the NPM package to the directory')
    .parse(process.argv);
console.log(commander.extract);
