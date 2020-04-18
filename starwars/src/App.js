import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
// import { Container, Row,Col} from 'reactstrap';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data,setData] = useState([]);

  useEffect(()=>{
  const fetchData = async ()=>{
    const result = await axios("https://rickandmortyapi.com/api/character/"
      );
      console.log(result.data.results);
      setData(result.data.results)
  };
  fetchData();
},[]);
  return (
  <div>
    <h1>characters</h1>
    <div className='box'>
      
      {data.map(item=>(<Character item={item} key={item.id}/>))}
      
    </div>
  </div>
  );
}

export default App;
