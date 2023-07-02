#!/usr/bin/env ts-node

import { Command } from 'commander'
import { rmSync } from '@node-kit/extra.fs'

export interface RmAllOption {
	dryRun?: boolean
}

const program = new Command()
const version = '__VERSION__' as string

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
			console.info('[DRY_RUN]: ', paths, options)
			return
		}
		rmSync(paths)
		console.info(`[SUCCESS]: "${paths.join(',')}" has been deleted`)
	})

// 自定义帮助
program.on('--help', function () {
	console.info('\nExamples')
	console.info('  rm-all dist lib', '        # Delete all files in dist & lib.')
})

program.parse(process.argv)
