import React, { useEffect, useState } from "react";
import "./App.css";

import List from "./components/List/List";
import Cards from "./components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [ states ,getState ] = useState([]);
  const [global,getGlobal ] = useState([]);

  useEffect(() => {
     
    fetchedData();
    fetchedGlobal();

  }, []);

  const API = "https://api.covid19india.org/data.json";
  const GAPI = "https://api.covid19api.com/summary";

  const fetchedData = async () => {
      const response = await fetch(API);
      const data = await response.json();

      getState(data.statewise);
      
  };

  const fetchedGlobal = async () => {
    const gresponse = await fetch(GAPI);
    const gdata = await gresponse.json();

    getGlobal(gdata.Global);
  }
  
  return (
    <div className="App">
     <div className="heading">
       <h1 className="header">Covid-19 Tracker</h1>
     </div>
      <Cards data={global} key={global.i}/>
      <List state={states} key={states.states}/>
    </div>
  );
}

export default App;
