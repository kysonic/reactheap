/**
 * Those configs include a bunch of loaders needed
 * to increase performance and test our application
 * @param include
 * @returns {{module: {preLoaders: *[]}}}
 */
module.exports.lintJSX = function(include) {
	return {
		module: {
			preLoaders: [
				{
					test: /\.(js|jsx)$/,
					loaders: ['eslint'],
					include: include
				}
			]
		}
	};
}
