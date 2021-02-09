import React from 'react';
import {withRouter} from "react-router-dom";

import './Post.css';

const post = (props) => {
    console.log(this.props);
    return (<article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>)
};

export default post;
//we may want to get access to the nearest Route props that are being passed, to the parent component,
// from an even parent-greater component, so to do so we can chain properties as the normal component passing properties from component A to C,
// or using a HOC withRouter, wrapping the component where we need to see the properties with that HOC, like: export default withRouter(componentName);
// export default withRouter(post);