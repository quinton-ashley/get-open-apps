module.exports = async function(opt) {
  const err = console.error;
  const log = console.log;

  const {
    promisify
  } = require('util');
  const spawn = require('await-spawn');

  let appsOpen = [];
  let psOut = (await spawn('/bin/ps', ['-A'])).toString();
  let regex = /(?:\/Applications)(?:\/[^\/\.]*\/|\/)*(?:([^\.]+)\.app)/gm;
  let app;
  while (app = regex.exec(psOut)) {
    if (app && !appsOpen[app[1]]) {
      appsOpen[app[1]] = app[0];
    }
  }
  return appsOpen;
}
