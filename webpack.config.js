// System modules
const path = require('path');
// Webpack tools
const merge = require('webpack-merge');
const validate = require('webpack-validator');
// Parts
const configs = require('./configs');
// Package
const pkg = require('./package.json');
// ENV target
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
/**
 * Our base paths
 * @type {{app: *, build: *}}
 */
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: [path.join(__dirname, 'app', 'styles', 'style.styl')],
	images: path.join(__dirname,'app','images'),
	test: path.join(__dirname, 'tests')
};
/**
 * Common configurations
 * @type {{entry: {style: Array, app: *}, output: {path: *, filename: string}, devtool: string, module: {loaders: *[]}, plugins: *[]}}
 */
const common = merge({
		entry: {
			style: PATHS.style,
			app: PATHS.app
		},
		output: {
			path: PATHS.build,
			filename: '[name].js'
		},
		devtool: 'source-map'
	},
	configs.assets.html({
		title: 'Todo app',
		appMountId: 'app'
	}),
	configs.assets.images(PATHS.images),
	configs.react.loadJSX(PATHS.app),
	configs.test.lintJSX(PATHS.app)
)


var config;

// Detect npm scripts names to define required configurations
switch(TARGET) {
	case 'build':
	case 'stats':
		config = merge(common,
			configs.production.setFreeVariables(
				'process.env.NODE_ENV',
				'production'
			),
			{
				output: {
					path: PATHS.build,
					filename: '[name].[chunkhash].js',
					chunkFilename: '[chunkhash].js' // Insurance about building a bundle
				}
			},
			configs.production.clean(PATHS.build),
			configs.production.extractBundle({
				name: 'vendor',
				entries: Object.keys(pkg.dependencies)
			}),
			configs.stylesConfig.extractCSS(PATHS.app),
			/*configs.stylesConfig.purifyCSS([PATHS.app]),*/
			configs.production.minify()
		);
		break;
	case 'test':
		config = merge(
			common,
			{
				devtool: 'inline-source-map'
			},
			configs.react.loadIsparta(PATHS.app),
			configs.react.loadJSX(PATHS.test)
		);
		break;
	default:
		config = merge(
			common,
			{
				devtool: 'eval-source-map'
			},
			configs.stylesConfig.setupCSS([PATHS.app,path.join(__dirname, 'node_modules', 'purecss-sass')]),
			configs.devServer({
				// Customize host/port here if needed
				host: process.env.HOST || '127.0.0.1',
				port: process.env.PORT || '8080'
			}),
			configs.react.enableReactPerformanceTools(),
			configs.assets.npmInstall()
		);
}

module.exports = validate(config,{quiet: true});
