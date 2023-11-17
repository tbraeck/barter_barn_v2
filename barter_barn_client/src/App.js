import React, { useContext} from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from './context/UserContext.js';
import { ForumContext } from './context/ForumContext.js';
import Home from "./general/Home.js";
import Footer from "./general/Footer.js";
import Header from "./general/Header.js";
import GeneralCard from "./GeneralCard.js";
import UserProfile from "./user/UserProfile.js";
import AllGoods from "./goods/AllGoods.js";
import AllServices from "./services/AllServices.js";
import AllFrees from "./free_stuff/AllFrees.js";
import GoodPage from "./goods/GoodPage.js";

const App = () => {
  const {user, setUser} = useContext(UserContext);
  // const { allGoods, allServices, allFrees } = useContext(ForumContext)

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


                <Route path="/goods/:id" element={<GoodPage  />}/> 
                {/* <Route path="/services/:id" element={<GeneralCard   />}/>  */}
                {/* <Route path="/free_stuffs/:id" element={<GeneralCard  />}/> */}
                {/* <Route path="/featured" element={<GeneralCard   />} /> */}
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
