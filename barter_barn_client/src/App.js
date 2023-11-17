import React, { useContext} from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';
import Home from "./Home.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import GeneralCard from "./GeneralCard.js";
import UserProfile from "./UserProfile.js";
import AllGoods from "./AllGoods.js";
import AllServices from "./AllServices.js";
import AllFrees from "./AllFrees.js";

const App = () => {
  const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees } = useContext(ForumContext)


  return (
    <div className="App">
      <div className='mainContainer'>
        <div className="header">
            {/* <Header user={user} setUser={setUser} handleLogout={handleLogout} /> */}
            <Header/>
        </div>
          <div>
            <Routes>
                <Route exact path="/" element={<Home /> } />  
                {/* {/* <Route path="/forums" element={<ForumList allForum={allForum}  setAllForum={setAllForum} /> }/> */}
                <Route path="/goods" element={<AllGoods   />} />
                <Route path="/services" element={<AllServices   />} />
                <Route path="/frees" element={<AllFrees  />} />


                <Route path="/goods/:id" element={<GeneralCard  />}/> 
                <Route path="/services/:id" element={<GeneralCard   />}/> 
                <Route path="/free_stuffs/:id" element={<GeneralCard  />}/>
                <Route path="/featured" element={<GeneralCard   />} />
                {/* <Route path="/forums/:id/edit" element={<ForumCard allForum={allForum} setAllForum={setAllForum} />}/> 
                <Route path="/users/:user_id/goods/:good_id" element={<EditGoods user={user}  allForum={allForum}/>} />
                <Route path="/users/:user_id/services/:service_id" element={<EditServices user={user} allForum={allForum}/>} />
                <Route path="/users/:user_id/free_stuffs/:free_ stuffs_id" element={<EditFreeStuffs user={user}  allForum={allForum}/>} /> */}
                <Route path="/user-profile"  element={ <UserProfile   user={user} setUser={setUser}/> } /> 
            </Routes>
          </div> 
             
            <div className='footer--pin'>
              <Footer/>
            </div>
        </div>
        </div>
        
  );
}

export default App;
