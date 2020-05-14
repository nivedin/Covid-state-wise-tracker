import React,{ useState }   from "react";
import Table from 'react-bootstrap/Table';

import styles from "./List.module.css";


function List1({state}){

   const [click, setClick] = useState("dark")

   function darkMode(){
       if(click === ""){
           setClick("dark");
       }else{
           setClick("");
       }
        
    }
    
    
    return(
        <div>
        <div className={styles.heading}>
             <h1 className={styles.header}>Covid-19 Tracker</h1>
        </div>
           <div className="dbutton">
            <button className={styles.darkBtn} onClick={darkMode} >Dark</button>
            <Table striped bordered hover variant={click}>
            <thead>
                <tr>
                <th className={styles.number}>#</th>
                <th className={styles.stateName}>Name</th>
                <th className={styles.confirm}>Confirmed</th>
                <th className={styles.active}>Active</th>
                <th className={styles.recov}>Recovered</th>
                <th className={styles.death}>Deaths</th>
                {/* <th>ChangeConf</th>
                <th>ChangeRec</th>
                <th>ChangeDea</th> */}
                {/* <th>Last Updated</th> */}
                </tr>
            </thead>
            <tbody>
            {state.map((state,i=1)=>(
                <tr>
                <td className={styles.numberText}>{i+1}</td>
                <td className={styles.stateNameText}>{state.state}</td>
                <td className={styles.confirmText}>{state.confirmed} <span className={styles.changConf}>+{state.deltaconfirmed}</span></td>
                <td className={styles.activeText}>{state.active}</td>
                <td className={styles.recovText}>{state.recovered} <span className={styles.changRec}>+{state.deltarecovered}</span></td>
                <td className={styles.deathText}>{state.deaths} <span className={styles.changDec}>+{state.deltadeaths}</span></td>
                {/* <td>+{state.deltaconfirmed}</td>
                <td>+{state.deltarecovered}</td>
                <td>+{state.deltadeaths}</td> */}
                {/* <td>{state.lastupdatedtime}</td> */}
                
                </tr>
            ))}
            </tbody>
            </Table>
            </div>
        </div>
    );
}

export default List1;