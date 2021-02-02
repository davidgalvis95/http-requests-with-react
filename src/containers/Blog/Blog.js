import React, {Component} from 'react';
//This is the file where we have defined the new instance with the 'custom' values
import axios from '../../axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
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
                this.setState({error: true})
            })
    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {

        let posts;

        if (this.state.error) {
            posts = <p>Something went wrong</p>
        } else {
            posts = this.state.posts.map(post => {
                //Never forget to set the key
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectHandler(post.id)}
                />;
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;