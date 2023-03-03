module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	// setupFilesAfterEnv: ['./scripts/setupJestEnv.ts'],
	transform: {
		// '^.+\\.js?$': 'babel-jest',
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				useESM: true,
				tsconfig: {
					target: 'esnext',
					// sourceMap: true
				}
			}
		]
	},
	roots: ['src'],
	// modulePaths: ['node_modules', '<rootDir>/src'],
	moduleDirectories: ['node_modules', 'src'],
	// transformIgnorePatterns: ['<rootDir>/node_modules/'],
	coverageDirectory: 'coverage',
	coverageReporters: ['html', 'lcov', 'text'],
	collectCoverageFrom: ['src/**/*.ts'],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		// 'src/(.*)': '<rootDir>/src/$1',
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/__tests__/**/*spec.[jt]s?(x)'],
	testPathIgnorePatterns: process.env.SKIP_E2E
		? // ignore example tests on netlify builds since they don't contribute
		  // to coverage and can cause netlify builds to fail
		  ['/node_modules/', '/examples/__tests__']
		: ['/node_modules/']
}
