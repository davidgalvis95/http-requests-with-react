import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

//Here we can set global props to execute our calls
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//These interceptors are set globally, or in a specific component for a global scope, so that we can set the
//Request headers od authorizations, most of the time
axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    //Edit the request config, generally by adding the headers or authorizations
    return requestConfig;
}, error => {
    //This mostly shows the error when is a system error, like internet connection or something like that
    console.log(error);
    return Promise.reject(error);
})

//the response interceptors are used to intercept all the responses set in the child components
axios.interceptors.response.use(response => {
    console.log(response);
    //here we also can edit the response to get it also
    return response;
}, error => {
    //This also logs the response error
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
