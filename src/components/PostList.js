import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = (props) => {

    useEffect(() => {
        props.fetchPosts();
    }, [])

    return (
        <div>
            Post List
        </div>
    );
};

export default connect(null, { fetchPosts })(PostList);