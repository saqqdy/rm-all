#!/usr/bin/env ts-node

import { createRequire } from 'node:module'
import { program } from 'commander'
import { rmSync } from '.'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

export interface RmAllOption {
	dryRun?: boolean
}

program.version(
	`v${version}, powered by saqqdy<saqqdy@qq.com>`,
	'-v, --version',
	'View rm-all version number'
)

program
	.name('rm-all')
	.usage('<paths> [options]')
	.description('Delete all files in the directory.')
	.argument(
		'<paths...>',
		'The directories or files to be deleted, separated by spaces if more than one path needs to be deleted.'
	)
	.option('--dry-run', 'Dry run')
	.action(async (paths: string[], options: RmAllOption = {}) => {
		paths = paths.map(path => path.split(',')).flat(1)
		if (options.dryRun) {
			console.info(paths, options)
			return
		}
		rmSync(paths)
		console.info(`"${paths.join(',')}" has been deleted`)
	})

// 自定义帮助
program.on('--help', function () {
	console.info('\nExamples')
	console.info('  rm-all dist lib', '        # Delete all files in dist & lib.')
})

program.parse(process.argv)
