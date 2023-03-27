import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data,setData]=useState([]);
  useEffect (() => {
    axios.get("https://themealdb.com/api/json/v1/1/search.php?s")
    .then((res)=>setData(res.data.meals)); });
  return (
    <div className="cookingApp">
        <h1> React Cook</h1>
        <input type="text" placeholder="Choisissez un aliment(en Anglais)"></input>
          <ul>
            {data.map((meals)=><Card key={meals.idMeal} meals={meals}/> )}
            </ul>
    </div>
  )
}

export default App;
