import axios from "axios";

const API = "https://api.covid19india.org/data.json";

export const fetchedData = async () => {

    try{
        const response = await fetch(API);

        const data = await response.json();

        console.log(data);
        return data;
        
    }catch(error){
        console.log(error);
        
    }


}