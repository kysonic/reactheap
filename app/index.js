import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import Provider from './components/Provider';


ReactDOM.render(

	<Provider><App /></Provider>,

	document.getElementById('app')
);
