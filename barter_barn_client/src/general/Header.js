import React, { useContext } from 'react'; 
// import NavBar from './NavBar'
// import NavigationButtons from './NavigationButtons';
import SearchBar from './SearchBar';
// import ChatComponent from "../ChatComponent.js";

import { UserContext } from '../context/UserContext'

const Header = ({handleLogout, userComments, setUserComments}) => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div className="headerCont">

       <a href='http://localhost:4000/' className="logo"> <img src="/Barn.gif" alt="Barter Barn Logo" /></a>      
      <div className='searchBar'><SearchBar/></div>
     
      {/* <div>
        <ChatComponent/>
      </div> */}
    </div>
  )
}

export default Header
