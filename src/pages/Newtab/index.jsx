import React from 'react';
import { render } from 'react-dom';

import Background from '../Background';
import Routes from '../../routes';

import Newtab from './Newtab';
import './index.css';


// TODO: Search about chrome Browser History
// this.history = createBrowserHistory();

render(
    <React.StrictMode>
        <Newtab />
        <Background />
        <Routes />
    </React.StrictMode>,
    window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
