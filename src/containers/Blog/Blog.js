import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from "../NewPost/NewPost";

import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            {/*The link in contrast with the <a> does not make reload the page and hence lose the context, neither send again the request
                            it just handles the redirection internally if it comes from some feature that is in the application and not outside it*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                //This is the path name where we want it to go
                                pathname: '/new-post',
                                //Advanced feature to tag something that will lead us to jump into that tagged thing (this is a example)
                                hash: '#submit',
                                //Advanced feature to set query params to be passed (this is a example)
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                    {/*By adding a Route and specifying the path then we get react to navigate and display the components we want it to display*/}
                    {/*<Route path="/" exact render={() => <Posts/>} />*/}
                    {/*By default if we do not specify the exact property and there is no route defined for other path, all the child objects that are not defined will show the
                    components that are defined in the parent route e.g. if the route is "/new-post, and there is nothing defined to it, then the parent,
                    in this case "/" will show its components on it*/}
                    {/*<Route path="/" render={() => <h1>Hello</h1>} />*/}

                {/*this is the most effective way of rendering a component, the last one is just use for short info messages or something like that */}
                <Route path="/" exact component={Posts} />
                {/*We have remove the exact because we may want to handle all the new posts with that route, like 1,2 ...*/}
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;