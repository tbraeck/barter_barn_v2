  import React, {useContext} from 'react';
  import { Link, useNavigate } from 'react-router-dom'
  import { UserContext } from '../context/UserContext.js';

const NavBar = ({handleLogout}) => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);


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
    <div className='headerBack'>  
      <div className="btn ">
      <Link to="/" className='btn '>
        <button className='btn btn-secondary' type='button'>
        <img src="/home.png" alt="User Icon" className='user_icon' />
          <span className='user-text'>HOME</span>
        </button>
      </Link>
      <Link to="/featured" className='btn '>
        <button  type='button' className='btn btn-secondary'>
        <img src="/sun1.png" alt="User Icon" className='user_icon' />
        <span className='user-text'>DAILY FEATURED</span>
        </button>
      </Link>
      <Link to="/user-profile" className='btn'>
        <div  type='button' className='btn btn-secondary' >
          <img src="/farmer.png" alt="User Icon" className='user_icon' />
          <span className='user-text'>ACCOUNT</span>
        </div>
      </Link>

    
      {user ? (
        <div className='btn '>
          <p className='welcomeText'>Welcome, {user.username}!</p>
          <button type='submit' onClick={handleLogoutClick} className='btn btn-secondary' >LOGOUT</button>
        </div>
      ) : null}

    <Link to="/create_post" className='btn'>
        <div  type='button' className='btn btn-secondary' >
          <img src="/tab.png" alt="User Icon" className='user_icon' />
          <span className='user-text'>CREATE POST</span>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default NavBar
