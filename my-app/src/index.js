import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import BlogPost from './container/BlogPost/BlogPost';
import './component/HelloComponent';

ReactDOM.render(<BlogPost />, document.getElementById('content'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();


