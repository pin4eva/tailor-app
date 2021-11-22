module.exports = {
	env: {
		browser: true,
		es2021: true,
		"react-native/react-native": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: [
		"react",
		"@typescript-eslint",
		"react-native",
		"eslint-plugin-prettier",
	],
	rules: {
		"react-native/no-unused-styles": 2,
		"react-native/split-platform-components": 2,
		// "react-native/no-inline-styles": 2,
		// "react-native/no-color-literals": 2,
		// "react-native/no-raw-text": 2,
	},
};
