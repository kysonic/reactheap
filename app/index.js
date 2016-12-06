import React from "react";
import {render} from "react-dom";
import {Router,Route,IndexRoute,browserHistory} from "react-router";

import {Provider} from "react-redux";

import App from "./components/App.jsx";
import Grid from "./components/Grid.jsx";
import Single from "./components/Single.jsx";

import store, {history} from "./store";

const router = (
    <Provider store={store} >
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Grid} />
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(
	router,
	document.getElementById("app")
);
