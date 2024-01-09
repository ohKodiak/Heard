import './App.css';
import React from 'react';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <navbar>
        <p>Heard</p>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </navbar>
      <div className="posts-heading">
        <p>Today at 4:40pm</p>
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
        
    </div>
  );
}

export default App;
