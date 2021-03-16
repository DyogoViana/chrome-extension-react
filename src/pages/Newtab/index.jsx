import React from 'react';
import { render } from 'react-dom';

import Background from '../Background';

import Newtab from './Newtab';
import './index.css';

render(
    <React.StrictMode>
        <Newtab />
        <Background />
    </React.StrictMode>,
    window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
