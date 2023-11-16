import { useState, useEffect, createContext } from 'react';

const ForumContext = createContext();

function ForumProvider({ children }) {
  const [allGoods, setAllGoods] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [allFrees, setAllFrees] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/goods").then((res)=> {
      if(res.ok){
        res.json().then((data) => {
          setAllGoods(data)})
      }
    })

    fetch("http://localhost:3000/services").then((res)=> {
      if(res.ok){
        res.json().then((data) => {
          setAllServices(data)})
      }
    })

    fetch("http://localhost:3000/frees").then((res)=> {
      if(res.ok){
        res.json().then((data) => {
          setAllFrees(data)})
      }
    })
  }, [])
  return (
    <ForumContext.Provider value={{ allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees }}>
      {children}
    </ForumContext.Provider>
  );
}

export { ForumContext, ForumProvider };