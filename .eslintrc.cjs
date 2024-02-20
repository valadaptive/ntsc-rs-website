module.exports = {
    plugins: [
        '@stylistic'
    ],
    extends: [
        'eslint:recommended'
    ],
    env: {
        es6: true,
        browser: true
    },
    ignorePatterns: [
        '_site/**/*.js'
    ],
    overrides: [
        {
            files: ['**/*.cjs', '**/*.js'],
            env: {
                node: true
            },
            parserOptions: {
                sourceType: 'module',
                project: null
            }
        }
    ],
    rules: {
        'no-constant-condition': ['error', {'checkLoops': false}],

        '@stylistic/array-bracket-spacing': ['error', 'never'],
        'camelcase': ['error', {
            properties: 'never'
        }],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/comma-spacing': ['error'],
        '@stylistic/comma-style': ['error'],
        '@stylistic/eol-last': ['error', 'always'],
        'eqeqeq': ['warn'],
        '@stylistic/func-call-spacing': ['error', 'never'],
        '@stylistic/indent': ['error', 4, {'SwitchCase': 1}],
        '@stylistic/key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        '@stylistic/keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        '@stylistic/max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreTemplateLiterals: true
        }],
        '@stylistic/new-parens': ['error'],
        '@stylistic/newline-per-chained-call': ['error'],
        'no-console': ['error'],
        '@stylistic/no-mixed-operators': ['error'],
        '@stylistic/no-multiple-empty-lines': ['error', {
            max: 2,
            maxBOF: 0,
            maxEOF: 0
        }],
        'no-throw-literal': ['error'],
        '@stylistic/no-trailing-spaces': ['error', {skipBlankLines: true}],
        'no-unneeded-ternary': ['error'],
        '@stylistic/object-curly-spacing': ['error'],
        '@stylistic/object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: true
        }],
        '@stylistic/operator-linebreak': ['error', 'after'],
        'prefer-const': ['error'],
        '@stylistic/quotes': ['error', 'single', {
            allowTemplateLiterals: true,
            avoidEscape: true
        }],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/semi-spacing': ['error'],
        '@stylistic/space-before-function-paren': ['error', 'never'],
        '@stylistic/space-in-parens': ['error'],
        '@stylistic/space-infix-ops': ['error'],
        '@stylistic/space-unary-ops': ['error'],
        '@stylistic/member-delimiter-style': ['error'],

        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off'
    },
    parserOptions: {
        'ecmaVersion': 11,
        'sourceType': 'module'
    }
};
