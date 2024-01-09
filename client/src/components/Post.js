import '../styles/Post.css';
import React from 'react';

function Post() {
    return (
        <div className="post">
            <div className="post-user">
                <p>Ezra</p>
                <img src="https://via.placeholder.com/50" alt="User" />
                <p>Is listening to...</p>
            </div>
            <div className="post-song">
                <p>Boogie Wonderland</p>
                <p>By</p>
                <p>Earth, Wind, and Fire</p>
            </div>
            <div className="post-song-info">
                <img src="https://via.placeholder.com/50" alt="Album Cover" />
                <p>Cool Album</p>
            </div>
        </div>
    );
}

export default Post;