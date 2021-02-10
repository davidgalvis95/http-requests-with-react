import React, {Component} from 'react';
import axios from "../../axios";
import Post from "../../components/Post/Post";
import "./Posts.css"
import {Link} from "react-router-dom";

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        //here we see the props that are loading and we can see that history, location and match are properties loaded by the Router
        console.log(this.props);
        //since this happens asynchronously, we treat is at a promise when we call the url and wait until it gets the request, and then we execute something
        //but it won't happen right away
        //with the baseURL set there is no need of it here
        axios.get('/posts')
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true})
            })
    }

    postSelectHandler = (id) => {
        //we dont want to change the state anymore but navigate to a new page
        //to do so we can seize the fact that the history prop of the Router has a push property that works the same as the Link
        this.props.history.push({pathname: '/' + id});
        //this approach works the same as the one in the line above
        // this.props.history.push('/' + id);
    }

    render() {
        let posts;

        if (this.state.error) {
            posts = <p>Something went wrong</p>
        } else {
            posts = this.state.posts.map(post => {
                //Never forget to set the key
                return (
                    //The approach of the link that renders a post dynamically by the id considering the Route already set
                    //Now that the new object that will be shown based on an id is the Link, the key must be passed there instead of the Post
                    // <Link className="link-class" to={'/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectHandler(post.id)}
                        />
                    // </Link>
                )
            })
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )

    }
}

export default Posts;