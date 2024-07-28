import stylistic from '@stylistic/eslint-plugin-js';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ['_site/**/*.js']
}, ...compat.extends('eslint:recommended'), {
    plugins: {
        '@stylistic/js': stylistic
    },

    languageOptions: {
        globals: {
            ...globals.browser
        },

        ecmaVersion: 11,
        sourceType: 'module',
        parserOptions: {
            ecmaVersion: 2023
        }
    },

    rules: {
        'no-constant-condition': ['error', {
            checkLoops: false
        }],

        '@stylistic/js/array-bracket-spacing': ['error', 'never'],

        camelcase: ['error', {
            properties: 'never'
        }],

        '@stylistic/js/comma-dangle': ['error', 'never'],
        '@stylistic/js/comma-spacing': ['error'],
        '@stylistic/js/comma-style': ['error'],
        '@stylistic/js/eol-last': ['error', 'always'],
        eqeqeq: ['warn'],
        '@stylistic/js/func-call-spacing': ['error', 'never'],

        '@stylistic/js/indent': ['error', 4, {
            SwitchCase: 1
        }],

        '@stylistic/js/key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],

        '@stylistic/js/keyword-spacing': ['error', {
            before: true,
            after: true
        }],

        '@stylistic/js/max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreTemplateLiterals: true
        }],

        '@stylistic/js/new-parens': ['error'],
        '@stylistic/js/newline-per-chained-call': ['error'],
        'no-console': ['error'],
        '@stylistic/js/no-mixed-operators': ['error'],

        '@stylistic/js/no-multiple-empty-lines': ['error', {
            max: 2,
            maxBOF: 0,
            maxEOF: 0
        }],

        'no-throw-literal': ['error'],

        '@stylistic/js/no-trailing-spaces': ['error', {
            skipBlankLines: true
        }],

        'no-unneeded-ternary': ['error'],
        '@stylistic/js/object-curly-spacing': ['error'],

        '@stylistic/js/object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: true
        }],

        '@stylistic/js/operator-linebreak': ['error', 'after'],
        'prefer-const': ['error'],

        '@stylistic/js/quotes': ['error', 'single', {
            allowTemplateLiterals: true,
            avoidEscape: true
        }],

        '@stylistic/js/semi': ['error', 'always'],
        '@stylistic/js/semi-spacing': ['error'],
        '@stylistic/js/space-before-function-paren': ['error', 'never'],
        '@stylistic/js/space-in-parens': ['error'],
        '@stylistic/js/space-infix-ops': ['error'],
        '@stylistic/js/space-unary-ops': ['error']
    }
}, {
    files: ['**/*.cjs', '**/*.js'],

    languageOptions: {
        globals: {
            ...globals.node
        },

        ecmaVersion: 5,
        sourceType: 'module',

        parserOptions: {
            project: null
        }
    }
}];
