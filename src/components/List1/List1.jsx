import React  from "react";
import Table from 'react-bootstrap/Table'

function List1({state}){

    console.log(state);
    
    return(
        <div>
        <h1>{state.lastupdatedtime}</h1>
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
            {state.map((state,i=1)=>(
                <tr>
                <td>{i+1}</td>
                <td>{state.state}</td>
                <td>{state.confirmed}</td>
                <td>{state.active}</td>
                <td>{state.recovered}</td>
                <td>{state.deaths}</td>
                <td>{state.deltaconfirmed}</td>
                <td>{state.deltarecovered}</td>
                <td>{state.deltadeaths}</td>
                <td>{state.lastupdatedtime}</td>
                
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
    );
}

export default List1;