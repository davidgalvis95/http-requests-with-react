import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        //since this happens asynchronously, we treat is at a promise when we call the url and wait until it gets the request, and then we execute something
        //but it won'' happen right away
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts:updatedPosts})
            })
    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {

        const posts = this.state.posts.map(post => {
            //Never forget to set the key
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectHandler(post.id)}
            />;
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;