import React, { useState, useContext, useEffect } from 'react';
import { ForumContext } from '../context/ForumContext.js';
import { Link, useNavigate } from 'react-router-dom';

const SearchResults = () => {
    const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const filteredResults = filterResults();
        setSearchResults(filteredResults);
      }, [allGoods, allServices, allFrees, communities]);
    
      const filterResults = () => {
        // Implement your logic to filter results based on context data
        // You can use the same logic you used in the SearchBar component
        // For simplicity, I'll assume you want to show all items here
        const results = {
          allGoods,
          allServices,
          allFrees,
          communities,
        };
    
        return results;
      };
  return (
    <div className="mainPageItemsContainer" key="mainPageItemsContainer">
    {Object.entries(searchResults).map(([category, items]) => (
        <div key={category}>
          <h3>{category === 'allGoods' && (
            <Link to={`/goods`} className="link header-link">
            <h1 className='category-column-h1'>GOODS</h1>
          </Link>
          )}
          {category === 'allServices' && (
            <Link to={`/services`} className="link header-link">
            <h1 className='category-column-h1'>SERVICES</h1>
          </Link>
          )}
          {category === 'allFrees' && (
             <Link to={`/frees`} className="link header-link">
             <h1 className='category-column-h1'>FREE STUFF</h1>
           </Link>
          )}
          {category === 'communities' && (
             <Link to={`/communities`} className="link header-link">
             <h1 className='category-column-h1'>COMMUNITY</h1>
           </Link>
          )}
          </h3>
            {items.map((item) => (
             <ul>
                {category === 'allGoods' && (
                 <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>
                 <h2 key={item.id}>
                    <Link to={`/goods/${item.id}`} className="link">
                    {item.name}
                  </Link>
                  </h2>
                  </div>
                )}
                {category === 'allServices' && (
                <div className="category-column" style={{ backgroundColor: '#ffdfba' }}>
                    <h2 key={item.id}>
                        <Link to={`/services/${item.id}`} className="link">
                            {item.name}
                        </Link>
                  </h2>
                </div>
                )}
                {category === 'allFrees' && (
                <div className="category-column" style={{ backgroundColor: '#ffffba' }}>
                    <h2 key={item.id}>
                        <Link to={`/frees/${item.id}`} className="link">
                            {item.name}
                        </Link>
                    </h2>
                  </div>
                )}
                {category === 'communities' && (
                  <div className="category-column" style={{ backgroundColor: '#baffc9' }}>
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
      ))}
    </div>
  )
}

export default SearchResults


// import React, { useState, useContext, useEffect } from 'react';
// import { ForumContext } from '../context/ForumContext.js';
// import { Link, useNavigate } from 'react-router-dom';



//   return (
//     <div className="mainPageItemsContainer" key="mainPageItemsContainer">
//       {Object.entries(searchResults).map(([category, items]) => (
//         <div key={category} className={`category-column ${category.toLowerCase()}`}>
//           <h3>{category}</h3>

//           {items.map((item) => (
//             <Link key={item.id} to={`/${category}/${item.id}`} className="link">
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResults;
