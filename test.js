import fs from 'fs';
import electron from 'electron';
import test from 'ava';
import execa from 'execa';

// See https://github.com/sindresorhus/conf for more extensive tests

test(async t => {
	let storagePath = await execa.stdout(electron, ['fixture.js'], {
		cwd: __dirname,
		env: {
			ELECTRON_ENABLE_LOGGING: true,
			ELECTRON_ENABLE_STACK_DUMPING: true,
			ELECTRON_NO_ATTACH_CONSOLE: true
		}
	});

	// Stupid Windows
	storagePath = storagePath.trim();

	t.deepEqual(JSON.parse(fs.readFileSync(storagePath.trim(), 'utf8')), {ava: '🚀'});
	fs.unlinkSync(storagePath);
});
