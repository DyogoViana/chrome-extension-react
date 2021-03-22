import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ImportWallet from './pages/ImportWallet';

import GlobalStyle from './styles/global';
import Routes from './routes';


function App() {
	return (
		<BrowserRouter>
			<ImportWallet />
			<Routes />
			<GlobalStyle />
		</BrowserRouter>
	)
}

export default App;

