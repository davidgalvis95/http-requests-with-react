import React, { Component } from 'react';
import axios from "axios";

import './NewPost.css';
import {Redirect} from "react-router";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        getRequestIsSent:false
    }

    //This is how we sent post data to a server, one argument is the URL, the other the payload
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', data).then( response => {
            console.log(response);
            //The push method acts like a redirect, but it allow us to go back to the last page because it does not replaces the stack of pages
            // this.props.history.push('/posts/');
            //The replace method acts like a redirect, because if I want to go back to the last page I won't be able to, because redirect and replace, replaces the stack of pages
            this.props.history.replace('/posts/');
        } )
        // this.setState({getRequestIsSent:true})
    }

    render () {
        // let redirect= null;
        // if(this.state.getRequestIsSent){
        //     redirect = <Redirect to="/posts/"/>;
        // }
        return (
            <div className="NewPost">
                {/*{redirect}*/}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={() => this.postDataHandler()}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;