module.exports = async function(opt) {
	opt = opt || {};
	const err = console.error;
	const log = console.log;

	const os = require('os');
	const path = require('path');
	let osType = os.type();
	const linux = (osType == 'Linux');
	const mac = (osType == 'Darwin');
	const win = (osType == 'Windows_NT');
	if (win) {
		osType = 'win';
	} else if (mac) {
		osType = 'mac';
	} else if (linux) {
		osType = 'linux';
	}
	if (opt.v) {
		log(osType);
	}

	if (win) {
		log('not compatible with Windows currently!');
		return {};
	}
	const {
		promisify
	} = require('util');
	const ps = promisify(require('ps-node').lookup);

	let appsOpen = [];
	let appCmds = await ps({
		command: '',
		arguments: ''
	});
	if (opt.v) {
		log(appCmds);
	}
	let regex;
	let elims;
	if (mac) {
		regex = /(?:\/Applications)(?:\/[^\/\.]*\/|\/)*(?:([^\.]+)\.app)/;
	} else if (linux) {
		regex = /(?:(?:\/(?:snap|usr\/bin)\/)([^\/]+)|(?:\/[^\/\.]*\/)*([^\/\.]+)\.AppImage)/;
		elims = /(dbus|gnome|pulseaudio|seahorse|ssh)/;
	}
	for (let i = 0; i < appCmds.length; i++) {
		let appCmd = appCmds[i].command;
		let app = appCmd.match(regex);
		if (app && !appsOpen[app[1]]) {
			if (elims && elims.test(appCmd)) {
				continue;
			}
			if (linux && (/\/snap\//).test(appCmd)) {
				appCmd = appCmd.split('/');
				appCmd = [appCmd[1], 'run', appCmd[2]];
			} else {
				appCmd = [appCmd];
			}
			appsOpen[app[1]] = appCmd;
		}
	}
	return appsOpen;
}
