const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

/**
 * SCSS configuration
 * @param paths to be included in project
 */
module.exports.setupCSS = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loaders: ['style', 'css', 'sass'],
					include: paths
				}
			]
		}
	};
}
/**
 * Manage SCSS files to build production version
 * @param paths
 * @returns {{module: {loaders: *[]}, plugins: *[]}}
 */
module.exports.extractCSS = function(paths) {
	return {
		module: {
			loaders: [{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					"style",
					"css!sass")
			}]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		]
	};
}
/**
 * Purify css plugin. Use only NEEDED styles.
 * @param paths - paths to css
 * @returns {{plugins: *[]}}
 */
module.exports.purifyCSS = function(paths){
	return {
		plugins: [
			new PurifyCSSPlugin({
				basePath: process.cwd(),
				paths: paths
			})
		]
	}
}
