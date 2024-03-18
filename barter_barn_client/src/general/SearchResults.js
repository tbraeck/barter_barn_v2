import React, { useState, useContext, useEffect } from 'react';
import { ForumContext } from '../context/ForumContext.js';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

  const SearchResults = () => {
    // const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
      if (location.state && location.state.searchResults) {
        setSearchResults(location.state.searchResults);
      } else {
        alert("Sorry, nothing matches your search. \n Please try again")
        setSearchResults({});
      }
    }, [location.state]);



  return (
    <div className="searchResultsContainer" key="searchResultsContainer">
      {Object.entries(searchResults).map(([category, items]) => (
        <div key={category} className='searchResultDiv' style={{ alignItems: "center", justifyContent: "center" }}>
          {category === 'allGoods' && (
            <Link to={`/goods`} className="link header-link" style={{alignItems: "center"}} >
              <h1 className='results-column-h1'>GOODS</h1>
            </Link>
          )}
          {category === 'allServices' && (
            <Link to={`/services`} className="link header-link">
              <h1 className='results-column-h1'>SERVICES</h1>
            </Link>
          )}
          {category === 'allFrees' && (
            <Link to={`/frees`} className="link header-link">
              <h1 className='results-column-h1'>FREE STUFF</h1>
            </Link>
          )}
          {category === 'communities' && (
            <Link to={`/communities`} className="link header-link">
              <h1 className='results-column-h1'>COMMUNITY</h1>
            </Link>
          )}
          <div className="contentContainer">
            {items.map((item) => (
              <ul>
                {category === 'allGoods' && (
                  <div className="category-column" style={{ backgroundColor: '#ffb3ba', alignItems: "center", justifyContent: "center" }}>
                    <h2 key={item.id}>
                      <Link to={`/goods/${item.id}`} className="link">
                        {item.name}
                      </Link>
                    </h2>
                  </div>
                )}
                {category === 'allServices' && (
                  <div className="category-column" style={{ backgroundColor: '#ffdfba', alignItems: "center", justifyContent: "center" }}>
                    <h2 key={item.id}>
                      <Link to={`/services/${item.id}`} className="link">
                        {item.name}
                      </Link>
                    </h2>
                  </div>
                )}
                {category === 'allFrees' && (
                  <div className="category-column" style={{ backgroundColor: '#ffffba', alignItems: "center", justifyContent: "center" }}>
                    <h2 key={item.id}>
                      <Link to={`/frees/${item.id}`} className="link">
                        {item.name}
                      </Link>
                    </h2>
                  </div>
                )}
                {category === 'communities' && (
                  <div className="category-column" style={{ backgroundColor: '#baffc9', alignItems: "center", justifyContent: "center" }}>
                    <h2 key={item.id}>
                      <Link to={`/communities/${item.id}`} className="link">
                        {item.name}
                      </Link>
                    </h2>
                  </div>
                )}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
