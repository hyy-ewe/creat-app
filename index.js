#!/usr/bin/env node

 const commander = require('commander');
 const chalk = require('chalk');
 const packageJson = require('./package.json');
 const excute = require('./src/index');
 
 let projectName;
 const program = new commander.Command()
   .version('v' + packageJson.version, '-v, --version')
   .option('-f, --force', 'force delete the exist director')
   .option('-d, --directly', 'copy the not specified template')
   .arguments('<projectName>')
   .description('create react myProject')
   .action(function (arg1) {
    projectName = arg1
   });
 program.parse(process.argv)
 
excute( projectName, program.opts().force);
