const crossSpawn = require('cross-spawn');
const spawn = crossSpawn.sync;
const chalk = require('chalk');
const red = chalk.red;
const green = chalk.green;

function downloadByGit(callback) {
  console.log(green('start download'));
  const result = spawn(
    'git',
    ['clone', `https://github.com/hyy19950310/MyProject.git`],
    { stdio: 'inherit' }
  );
  const error = result.error;
  if (error) {
    console.log(red(error));
    return;
  }
  callback && callback();
}
const currentPath = process.cwd().replace(/\\/g, '/') + '/';


module.exports = {
  downloadByGit,
  currentPath,
};