module.exports = async function(opt) {
  const err = console.error;
  const log = console.log;

  const {
    promisify
  } = require('util');
  const ps = promisify(require('ps-node').lookup);

  let appsOpen = [];
  let processes = await ps({
    command: '',
    arguments: ''
  });
  for (let i = 0; i < processes.length; i++) {
    let process = processes[i].command;
    let regex = /(?:\/Applications)(?:\/[^\/\.]*\/|\/)*(?:([^\.]+)\.app)/;
    let app = process.match(regex);
    if (app && !appsOpen[app[1]]) {
      appsOpen[app[1]] = app[0];
    }
  }
  return appsOpen;
}
