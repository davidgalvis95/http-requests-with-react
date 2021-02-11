import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

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
                            {/*NavLink generates new features to work with*/}
                            {/*When using NavLink we have by default the "active" class but we can override that one and in fact generate de facto in line
                                         style instead of css classes */}
                            {/*The context needs to be specified as exact so that if "/" it wont take as active the child or appended paths*/}
                            <li><NavLink to="/posts/"
                                         exact
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: '#fa923f',
                                             textDecoration: 'underline'
                                         }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                //This is the path name where we want it to go
                                //this create a relative path appended to the path of the component that is already loaded
                                // pathname: this.props.match.url + '/new-post',
                                //this is an absolute path appended to the domain of the host
                                pathname: '/new-post',
                                //Advanced feature to tag something that will lead us to jump into that tagged thing (this is a example)
                                hash: '#submit',
                                //Advanced feature to set query params to be passed (this is a example)
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    {/*By adding a Route and specifying the path then we get react to navigate and display the components we want it to display*/}
                    {/*<Route path="/" exact render={() => <Posts/>} />*/}
                    {/*By default if we do not specify the exact property and there is no route defined for other path, all the child objects that are not defined will show the
                    components that are defined in the parent route e.g. if the route is "/new-post, and there is nothing defined to it, then the parent,
                    in this case "/" will show its components on it*/}

                {/*the Switch component of Router enables us to choose between two Routes that seem similar but are not similar, because in this case the "/:id" as it is
                flexible, react can interpret that "/new-post" is also an id, which is not correct*/}
                {/*<Switch>*/}
                    {/*We have remove the exact because we may want to handle all the new posts with that route, like 1,2 ...*/}
                    <Route path="/new-post" component={NewPost} />
                    {/*<Route path="/" render={() => <h1>Hello</h1>} />*/}
                    {/*this is the most effective way of rendering a component, the last one is just use for short info messages or something like that */}
                    <Route path="/posts/" component={Posts} />
                    {/*this is for redirecting the user for another link*/}
                    {/*<Route path="/" component={Posts} />*/}
                    <Redirect from="/" to="/posts/" />
                {/*</Switch>*/}
            </div>
        );
    }
}

export default Blog;