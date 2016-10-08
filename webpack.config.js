// System modules
const path = require('path');
// Webpack tools
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
// Parts
const configs = require('./configs');
// Package
const pkg = require('./package.json');


/**
 * Our base paths
 * @type {{app: *, build: *}}
 */
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: [
			path.join(__dirname, 'app', 'main.scss'),
			/*path.join(__dirname, 'node_modules', 'purecss-sass')*/
		]
};
/**
 * Common configurations
 * @type {{entry: {style: Array, app: *}, output: {path: *, filename: string}, devtool: string, module: {loaders: *[]}, plugins: *[]}}
 */
const common = {
	entry: {
		style: PATHS.style,
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path][name].[hash].[ext]',
				include: PATHS.images
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React heap.'
		})
	]
}


var config;

// Detect npm scripts names to define required configurations
switch(process.env.npm_lifecycle_event) {
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
			configs.stylesConfig.purifyCSS([PATHS.app]),
			configs.production.minify()
		);
		break;
	default:
		config = merge(
			common,
			{
				devtool: 'eval-source-map'
			},
			configs.stylesConfig.setupCSS(PATHS.app),
			configs.devServer({
				// Customize host/port here if needed
				host: process.env.HOST || '127.0.0.1',
				port: process.env.PORT || '8080'
			})
		);
}

module.exports = validate(config,{quiet: true});
