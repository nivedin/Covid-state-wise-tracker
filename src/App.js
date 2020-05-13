import React, { useEffect, useState } from "react";
import "./App.css";

import List from "./components/List/List";
import List1 from "./components/List1/List1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [ states ,getState ] = useState([]);

  useEffect(() => {
     
    fetchedData();

  }, []);

  const API = "https://api.covid19india.org/data.json";

  const fetchedData = async () => {
      const response = await fetch(API);
      const data = await response.json();

      getState(data.statewise);
      
  };

  console.log(states);
  let i=0;
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{states.lastupdatedtime}</h1>
      <List1 state={states} key={i}/>
    </div>
  );
}

export default App;
