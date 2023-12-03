import React, { useState, useContext } from 'react';
import { ForumContext } from '../context/ForumContext.js';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const allItems = { allGoods, allServices, allFrees, communities };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredItems = searchTerm ? filterItems(searchTerm) : allItems;
    setSearchResults(filteredItems);

    if (searchTerm) {
      navigate('/searchResults');
    }
  };

  const filterItems = (input) => {
    if (!input) {
      return allItems;
    }

    const results = {
      allGoods: filterByKeyword(allGoods, input),
      allServices: filterByKeyword(allServices, input),
      allFrees: filterByKeyword(allFrees, input),
      communities: filterByKeyword(communities, input),
    };

    return results;
  };

  const filterByKeyword = (items, input) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">SEARCH:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={onSearchChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />

      {Object.entries(searchResults).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {category === 'allGoods' && (
                  <Link to={`/goods/${item.id}`} className="link">
                    {item.name}
                  </Link>
                )}
                {category === 'allServices' && (
                  <Link to={`/services/${item.id}`} className="link">
                    {item.name}
                  </Link>
                )}
                {category === 'allFrees' && (
                  <Link to={`/frees/${item.id}`} className="link">
                    {item.name}
                  </Link>
                )}
                {category === 'communities' && (
                  <Link to={`/communities/${item.id}`} className="link">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
