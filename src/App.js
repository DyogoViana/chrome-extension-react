import React from 'react';

import Routes from './routes';

// import Routes from './routes';
// import history from './services/history';

// import Main from './components/Main';
// import Title from './components/Title';
// import FormSignUpLogin from './components/FormSignUpLogin';
// import GlobalStyle from './styles/global';


function App() {
	return (
		<Routes />
	)
}

export default App;



// TODO: Move Import wallet and create wallet to popup application
// Add routing logic here
// Just a sketch for ideas  (you need to solve dependencies)

// import Popup from "../../pages/Popup/Popup";

// Understand the two different ways to implement :
// 1 way - Functional React (Hooks and etc)

// this.history = createBrowserHistory();
// EXAMPLE ----
// const App = () = > {
//   return (
//     <React.Fragment>
//         <Router history={this.history}>
//           <Route exact path='/' component={Welcome} />
//         </Router>
//       </React.Fragment>

//   )

// }
// export default App


