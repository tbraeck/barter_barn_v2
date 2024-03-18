import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumContext } from '../context/ForumContext.js';

const SearchBar = () => {
  const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const allItems = { allGoods, allServices, allFrees, communities };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const filteredItems = filterItems(searchTerm.trim());
      navigate('/searchResults', { state: { searchResults: filteredItems } });
    }
  };

  const filterItems = (input) => {
    if (!input) {
      return {};
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
    <div className='searchBarDiv'>
      <label className='magGlass' htmlFor="search"> 🔎 </label>
      <input
        style={{ width: "330px", border: "none" }}
        type="text"
        id="search"
        placeholder="Find What You're Looking For..."
        value={searchTerm}
        onChange={onSearchChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;
