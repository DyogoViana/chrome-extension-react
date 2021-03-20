import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ImportWallet from './components/ImportWallet';
import CreateWallet from './components/CreateWallet';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				{/* <Route path="/" component={Home} exact /> */}
				<Route path="/importWallet" component={ImportWallet} />
				<Route path="/createWallet" component={CreateWallet} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
