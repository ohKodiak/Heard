import './App.css';
import React from 'react';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <navbar>
        <p>Heard</p>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="nav-btns">
          <button>Home</button>
          <button>Profile</button>
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </navbar>
      <div className="posts-heading">
        <p>Today at 4:40pm</p>
      </div>
      <div className="posts">
        <Post username="Ezra" song="Boogie Wonderland" artist="Earth Sun and Fire" album="Awesome album"/>
        <Post username="Ezra" song="Boogie Wonderland" artist="Earth Sun and Fire" album="Awesome album"/>
        <Post username="Ezra" song="Boogie Wonderland" artist="Earth Sun and Fire" album="Awesome album"/>
        <Post username="Ezra" song="Boogie Wonderland" artist="Earth Sun and Fire" album="Awesome album"/>
        <Post username="Ezra" song="Boogie Wonderland" artist="Earth Sun and Fire" album="Awesome album"/>


      </div>
        
    </div>
  );
}

export default App;
