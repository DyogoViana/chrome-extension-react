import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ImportWallet from './pages/ImportWallet';
// import CreateWallet from './components/CreateWallet';


export default function Routes() {
	return (
		<Switch>
			<Route path="/importWallet" component={ImportWallet} />
			{/* <Route path="/createWallet" component={CreateWallet} /> */}
			<Route component={Error} />
		</Switch>
	);
};

