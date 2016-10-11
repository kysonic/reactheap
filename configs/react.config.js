/**
 * Load JSX
 * @param include
 * @returns {{module: {loaders: *[]}}}
 */
module.exports.loadJSX = function(include) {
	return {
		module: {
			loaders: [
				{
					test: /\.(js|jsx)$/,
					// Enable caching for extra performance
					loaders: ['babel?cacheDirectory'],
					include: include
				}
			]
		}
	};
}
/**
 * Pre loader for isparta
 * @param include
 * @returns {{module: {preLoaders: *[]}}}
 */
module.exports.loadIsparta = function(include) {
	return {
		module: {
			preLoaders: [
				{
					test: /\.(js|jsx)$/,
					loaders: ['isparta-loader'],
					include: include
				}
			]
		}
	};
}
/**
 * Performance tool for react dev
 * @returns {{module: {loaders: *[]}}}
 */
module.exports.enableReactPerformanceTools = function() {
	return {
		module: {
			loaders: [
				{
					test: require.resolve('react'),
					loader: 'expose?React'
				}
			]
		}
	};
}
