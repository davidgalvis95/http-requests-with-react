//This file will configure some axios features such as the base url and the headers or the interceptors
//So that we can get flexibility of importing this stuff, not in the whole project, but when we need that instead
import axios from "axios";

//The new values defined here will override the ones in the default config
const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FOM_INSTANCE';

//Here we can add the interceptors as in the index.js file

export default instance;