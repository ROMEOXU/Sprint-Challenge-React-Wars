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
const [search, setSearch] = useState('');
const [name,setName]= useState('rick')
  useEffect(()=>{
  const fetchData = async ()=>{
    const result = await axios(`https://rickandmortyapi.com/api/character/?name=${search}`
      );
      console.log(result.data.results);
      setData(result.data.results)
  };
  fetchData();
},[search]);
  return (
  <div>
    <h1>characters</h1>
    <div className="search">
    <input id='name'type='text' onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setSearch(name)}>Search</button>
    </div>
    
    <div className='box'>
      
      {data.map(item=>(<Character item={item} key={item.id}/>))}
      
    </div>
  </div>
  );
}

export default App;
