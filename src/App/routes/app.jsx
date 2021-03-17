// TODO: Move Import wallet and create wallet to popup application
// Add routing logic here
// Just a sketch for ideas  (you need to solve dependencies)

import Popup from "../../pages/Popup/Popup";

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

// 2 way - Class React 
//class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     this.history = createBrowserHistory();

    //   }
    //   render() {
    //     return (
    //       <React.Fragment>
    //         <Router history={this.history}>
    //          <Route exact path='/' component={Welcome} />
    //         </Router>
    //       </React.Fragment>
    //     );
    //   }
    // }

    // export default App