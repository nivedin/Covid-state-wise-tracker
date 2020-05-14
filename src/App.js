import React, { useEffect, useState } from "react";
import "./App.css";

import List from "./components/List/List";
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
  
  return (
    <div className="App">
      <List state={states} key={states.states}/>
    </div>
  );
}

export default App;
