import React, {useState, useEffect, useContext} from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';


const App = () => {
  const {user, setUser} = useContext(UserContext);
  const {allForum, setAllForum } = useContext(ForumContext)
  
  return (
    <div className="App">
      <h1>This is my app</h1>
      <img src="https://media.tenor.com/MemzmgMAOJ8AAAAM/bite-tail-cute-dog.gif" alt="puppy"/>
      <p>This is just gibberish filler that I am typing here to get the space filled.</p>
    </div>
  );
}

export default App;
