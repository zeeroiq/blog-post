import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = (props) => {

    useEffect(() => {
        props.fetchPosts();
        console.log(props.posts);
    },[])


    const renderList = () => {
        return props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h1>{post.title}</h1>
                            <h3>{post.body}</h3>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        
        <div className="ui relaxed divided list">
            {renderList()}
        </div>
    );
};

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);