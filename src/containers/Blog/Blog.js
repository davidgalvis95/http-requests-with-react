import React, {Component} from 'react';
//This is the file where we have defined the new instance with the 'custom' values
import axios from '../../axios'

import Posts from '../Posts/Posts';

import './Blog.css';

class Blog extends Component {


    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;