import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import ComponentA from './components/example';
// ReactDOM.render(<ComponentA />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();