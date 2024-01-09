import '../styles/Post.css';
import React from 'react';

function Post(props) {
    return (
        <div className="post">
            <div className="post-user">
                <p>{props.username}</p>
                <img src="https://via.placeholder.com/50" alt="User" />
                <p>Is listening to...</p>
            </div>
            <div className="post-song">
                <p>{props.song}</p>
                <p>By</p>
                <p>{props.artist}</p>
            </div>
            <div className="post-song-info">
                <img src="https://via.placeholder.com/50" alt="Album Cover" />
                <p>{props.album}</p>
            </div>
        </div>
    );
}

export default Post;