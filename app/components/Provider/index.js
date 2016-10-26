if(process.env.NODE_ENV === 'production') {
	module.exports = require('./Provider.prod.jsx');
}
else {
	module.exports = require('./Provider.dev.jsx');
}
