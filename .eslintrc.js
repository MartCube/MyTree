module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/vue'
		//'@nuxtjs',
    	//'plugin:nuxt/recommended'
		
	],
	plugins: [
		'vue',
		'prettier'
	],
	// add your custom rules here
	rules: {
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				printWidth: 999,
				tabWidth: 4,
				singleQuote: true,
				semi: false,
				trailingComma: 'all',
				jsxBracketSameLine: false,
				bracketSpacing: true,
				endOfLine:"auto"
			},
		],
		'vue/html-indent': [
			'warn',
			'tab',
			{
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		"vue/max-attributes-per-line": [2, {
			"singleline": 15,
			"multiline": {
				"max": 5,
				"allowFirstLine": true
			}
		}],
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "never"
		}],
		"vue/singleline-html-element-content-newline": ["error", {
			"ignoreWhenNoAttributes": true,
			"ignoreWhenEmpty": true,
			"ignores": ["pre", "textarea","n-link","span","a","label","btn"]
		}]
	}
}
