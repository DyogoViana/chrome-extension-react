import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
 
function Routes(){
    return (
        <BrowserRouter>
            {/* <Route component={Home} path="/" exact /> */}
            <Route component={ImportWallet} path="/ImportWallet" />
        </BrowserRouter>
    )
}
 
export default Routes;
