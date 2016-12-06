const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Loaders for assets
 * @param paths
 * @returns {{module: {loaders: *[]}}}
 */
module.exports.images = function(paths){
	return {
		module: {
			loaders: [
				{
					test: /\.(jpg|png)$/,
					loader: 'file?name=[path][name].[hash].[ext]',
					include: paths
				}
			]
		}
	}
}
/**
 * Build HTML for our application
 * @param options
 * @returns {{plugins: *[]}}
 */
module.exports.html = function(options) {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				template: require('html-webpack-template'),
				baseHref: '/',
				title: options.title,
				appMountId: options.appMountId,
				inject: false
			})
		]
	};
}
/**
 * Installs our dependencies automatically
 * @param options - settings of plugin
 * @returns {{plugins: *[]}}
 */
module.exports.npmInstall = function(options) {
	options = options || {};

	return {
		plugins: [
			new NpmInstallPlugin(options)
		]
	};
}
