import { Command } from 'commander'
// import rmAll from '../rm-all'

const program = new Command()

jest.mock('../rm-all', () => ({
	...jest.requireActual('../rm-all'),
	functionNeedToMock: jest.fn().mockResolvedValue({
		MockKey: 'mockValue'
	})
}))

// const home = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'] || null

describe('.version', () => {
	test('defines get userdir', () => {
		const errorMessage = 'unknownOption'

		// jest.spyOn(program, 'unknownOption').mockImplementation(() => {
		// 	throw new Error(errorMessage)
		// })

		expect(() => {
			program.parse(['node', 'test', '--version'])
		}).toThrow(errorMessage)
		// const user = basename(home)
		// const match = new RegExp(user + '$')
		// expect(userdir()).toMatch(match)
		// expect(userdir()).toBe(process.env.USERPROFILE || process.env.HOME || null)
	})
})
