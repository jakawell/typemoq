const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const gulp = process.platform === 'win32' ? 'gulp.cmd' : 'gulp';

function gulpInstall(commands, opts) {
	console.log('installing...');
	opts = opts || {};
	opts.stdio = 'inherit';

	const result = cp.spawnSync(gulp, commands, opts);

	if (result.error || result.status !== 0) {
		process.exit(1);
	}
}

console.log('Falcon 9 is in startup...');
const distExists = fs.existsSync('dist');
if (!distExists)
    gulpInstall(['build']);
