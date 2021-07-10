const log = console.log;
const getOpenApps = require('./index.js');

(async function() {
	log('processes: ');
	let appsOpen = await getOpenApps({
		v: true
	});
	log('apps: ');
	log(appsOpen);
})();
