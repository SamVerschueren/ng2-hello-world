'use strict';
const path = require('path');
const Builder = require('systemjs-builder');

const SYSTEM_BUILDER_CONFIG = {
	defaultJSExtensions: true,
	packageConfigPaths: [
		path.join(__dirname, 'node_modules/*/package.json'),
		path.join(__dirname, 'node_modules/@angular/*/package.json')
	],
	paths: {
		'app/*': `dist/*`,
		'*': 'node_modules/*'
	},
	packages: {
		'@angular/common': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/compiler': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/core/testing': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/core': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/forms': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/http': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/platform-browser': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/platform-browser-dynamic': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'@angular/router': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'rxjs': {
			defaultExtension: 'js'
		}
	}
};

const BUNDLER_OPTIONS = {
	minify: true,
	mangle: false
};

const builder = new Builder(SYSTEM_BUILDER_CONFIG);
builder
	.buildStatic('app/main.js', 'build/main.js', BUNDLER_OPTIONS)
	.then(() => {
		console.log('Build complete')
	})
	.catch(err => {
		console.log('Build error');
		console.log(err);
	});
