const webpack = require('webpack');
/**
 * Allows to use Define plugin method related with definition of environment variables.
 * Used for react's enhancements.
 * @param key - var's key
 * @param value - var's value
 * @returns {{plugins: *[]}}
 */
module.exports.setFreeVariables = function(key, value) {
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	};
}
const CleanWebpackPlugin = require('clean-webpack-plugin');
/**
 * Clean configuration helps to clean
 * build folder during bundling
 * @param path - path to build folder
 * @returns {{plugins: *[]}}
 */
module.exports.clean = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				root: process.cwd()
			})
		]
	};
}
/**
 * Helps to provide functionality of Chunks Bundler
 * @returns {{}}
 */
module.exports.extractBundle = function(options){
	const entry = {};
	entry[options.name] = options.entries;

	return {
		// Define entry point needed to splitting
		entry: entry,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name,'manifest'] // manifest is needed to provide reliable caching
			})
		]
	}
}
/**
 * Minification for production
 * @returns {{plugins: *[]}}
 */
module.exports.minify = function(){
	return  {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	}
}
