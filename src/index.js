import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.css';
import './Styles/Pokemon.css';
import './Styles/Translation.css';
import './Styles/Weather.css';
import './Styles/Translation.css';
import './Styles/Navigation.css';
import './Styles/Home.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();