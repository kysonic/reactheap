const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

/**
 * Styl configuration
 * @param paths to be included in project
 */
module.exports.setupCSS = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.styl$/,
					loaders: ['style', 'css', 'stylus'],
					include: paths
				}
			]
		}
	};
}
/**
 * Manage Styl files to build production version
 * @param paths
 * @returns {{module: {loaders: *[]}, plugins: *[]}}
 */
module.exports.extractCSS = function(paths) {
	return {
		module: {
			loaders: [{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")}]
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
