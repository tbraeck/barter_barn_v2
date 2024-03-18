import React, { useContext } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'

// import NavBar from './NavBar'
// import NavigationButtons from './NavigationButtons';
import SearchBar from './SearchBar';
// import ChatComponent from "../ChatComponent.js";

import { UserContext } from '../context/UserContext'

const Header = ({ userComments, setUserComments}) => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();


  const handleLogout = ()=> {
    setUser(null)
  }

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.ok){
        handleLogout(null)
        navigate('/');  
      }
    })
  }
  return (
    <div className="headerCont">

       <a href='http://localhost:4000/' className="logo"> <img src="/Barn.gif" alt="Barter Barn Logo" /></a>      
      <div className='searchBar'><SearchBar/></div>
      <div className='loginAccount'>
     {user ? (
       <Link to="/user-profile" className='btn'>
       <div  type='button' className='btn btn-primary red' style={{ backgroundColor:"  #5adbb5", color: 'black', borderRadius: "20px", marginTop: "35px" }}>
         <img src="/farmer.png" alt="User Icon" className='user_icon' />
         <span className='user-text'>ACCOUNT</span>
       </div>
     </Link>
     ) : null}

{user ? (
    <Link to="/create_post" className='btn'>
        <div  type='button' className='btn btn-secondary'  style={{ backgroundColor:"  #5adbb5", color: 'black', borderRadius: "20px",  width: "150px", marginTop: "35px" }}>
          <img src="/tab.png" alt="User Icon" className='user_icon' />
          <span className='user-text'>CREATE POST</span>
        </div>
      </Link>
       ) : null}

    
    {user ? (
        <div className='btn '>
          <h2 className='welcomeText' style={{color: "white"}}>Welcome, {user.username}!</h2>
          <button type='submit' onClick={handleLogoutClick} className='btn btn-secondary' style={{ backgroundColor:"  #5adbb5", color: 'black', marginLeft: "0px", borderRadius: "20px", width: "100px", marginTop: "25px" }} >LOGOUT</button>
        </div>
      ) : 
      <Link to="/login" className='btn'>
        <div  type='button' className='btn btn-secondary' style={{ backgroundColor:"  #5adbb5", color: 'black' , marginTop: "0px" }} >
          <img src="/enter.png" alt="User Icon" className='user_icon' />
          <span className='user-text'>LOGIN</span>
        </div>
      </Link>
        }

    </div>
     
      {/* <div>
        <ChatComponent/>
      </div> */}
    </div>
  )
}

export default Header
