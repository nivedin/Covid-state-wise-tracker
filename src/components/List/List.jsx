import React  from "react";
import Table from 'react-bootstrap/Table'




function List({key,name,active,confirmed,recovered,deaths,lastUpdate,changeConfirmed,changeDeaths,changeRecovered}){

    return(
        <div>

            <Table responsive bordered="1">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>ChangeConf</th>
                <th>ChangeRec</th>
                <th>ChangeDea</th>
                <th>Last Updated</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{key}</td>
                <td>{name}</td>
                <td>{confirmed}</td>
                <td>{active}</td>
                <td>{recovered}</td>
                <td>{deaths}</td>
                <td>{lastUpdate}</td>
                <td>{changeConfirmed}</td>
                <td>{changeDeaths}</td>
                <td>{changeRecovered}</td>
                </tr>
            </tbody>
            </Table>
            {/* <h1>name:{name}</h1>
            <h4>confirmed:{confirmed}</h4>
            <h4>active:{active}</h4>
            <h4>recovered:{recovered}</h4>
            <h1>deaths:{deaths}</h1>
            <h4>lastUpdate:{lastUpdate}</h4>
            <h4>changeConfirmed:{changeConfirmed}</h4>
            <h4>changeDeaths:{changeDeaths}</h4>
            <h4>changeRecovered:{changeRecovered}</h4> */}
            
        </div>
    );
}

export default List;