import React, { useState, useContext} from 'react';
// import { ForumContext } from './ForumContext.js';
// import { UserContext } from './UserContext.js';

const GeneralCard = (props) => {
    // const {user, setUser} = useContext(UserContext);
    // const {allGoods, setAllGoods, allServices, setAllServices, allFrees, setAlFrees } = useContext(ForumContext)
    
    return(
               <div class={props.cardColClass}>
                    <div className={props.cardBorder} style={props.cardStyle}>
                      <div class="card-body">
                        <h2 class="card-title">{props.title}</h2>
                        <p class="card-text">
                         {props.description}
                        </p>
                        {props.children}
                      </div>
                    </div>
                  </div>
            )
        }

export default GeneralCard
