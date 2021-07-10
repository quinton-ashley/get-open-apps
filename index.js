module.exports = async function(opt) {
	const err = console.error;
	const log = console.log;

	const os = require('os');
	const path = require('path');
	log(os.type());
	if (os.type() == 'Windows_NT') {
		log("get-open-apps doesn't work on windows yet");
		return {
			Atom: path.join(os.homedir().replace(/\\/g, '/'), '/AppData/Local/atom')
		};
	}
	const {
		promisify
	} = require('util');
	const ps = promisify(require('ps-node').lookup);

	let appsOpen = [];
	let processes = await ps({
		command: '',
		arguments: ''
	});
	log(processes);
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
