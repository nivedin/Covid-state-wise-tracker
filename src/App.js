import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

import List from "./components/List/List";
import Cards from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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
      const response = await axios.get(API);      
      const data =  response.data;
      getState(data.statewise);
      
  };

  const fetchedGlobal = async () => {
    const gresponse = await axios.get(GAPI);    
    const gdata = gresponse.data;
    getGlobal(gdata.Global);
  }
    
  return (
    <div className="App">
      <Navbar/>
     <div>
      <Cards data={global} key={global.i}/>
      <List state={states} key={states.statecode}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
