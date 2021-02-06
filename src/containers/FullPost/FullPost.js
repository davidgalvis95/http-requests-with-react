import React, {Component} from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    //As the componentDidUpdate is updated when the render method is executed, and the render method is executed when the setState is called and
    //the component is modified, this will create an infinite loop of calls to the back end, so...We need to ensure that we only make a call, when the
    //id od the loadedPost that will be fetched wont be the same to the id of the props that are being passed, otr that we call a new loadedPost (in other
    // words, that we call a different loadedPost or call it for the first time)
    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.props.id) {
            //we load de loaded post if is a new one, or if there is an existing one but its id is different from the one that is trying to be fetched
            if( !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== this.props.id ))
            axios.get('/posts/' + this.props.id)
                .then(response => {
                    console.log(response)
                    //here we are setting the state of loaded post to the data we receive from our query
                    this.setState({loadedPost: response.data});
                });
        }
    }

    deletePostHandler = () => {
        //here we are using the same id that we get when the object is loaded from the API by id
        axios.delete('/posts/' + this.props.id).then(response => console.log(response));
    }

    render() {
        let post = <p style={{textAlign: 'center'}}> Please select a Post! </p>;
        if(this.props.id){
            post = <p style={{textAlign: 'center'}}> Loading! </p>;
        }
        //Here we are rendering the JSX code, it includes the loadedPosts that are coming from the promise, just depending on the if that is coming
        //it means that it renders immediately. Therefore, since the loadedPosts are brought up by a promise (async), then they will be null at the moment
        //this render method runs for the first time, so we need to set a condition to include a valid loaded post before rendering the JSX, otherwise we
        //will have an exception of 'cannot render title or content of undefined or null'
        //that's why the condition here changes
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button  onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;