const webpack = require('webpack');
const path = require('path');
/**
 * Basic configuration for Webpack dev server
 * @param options - options to configure server
 * @returns {{devServer: {historyApiFallback: boolean, hot: boolean, inline: boolean}}}
 */
module.exports = function(options) {
	return {
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000 // to prevent problems on windows
		},
		devServer: {
			historyApiFallback: {
				index: '/'
			},
			hot: true,
			inline: true,
			stats: 'errors-only',
			contentBase: './build',
			host: options.host, // Defaults to `localhost`
			port: options.port // Defaults to 8080
		},
		plugins: [
			// Enable multi-pass compilation for enhanced performance
			// in larger projects. Good default.
			new webpack.HotModuleReplacementPlugin({
				multiStep: true
			})
		]
	}
}
