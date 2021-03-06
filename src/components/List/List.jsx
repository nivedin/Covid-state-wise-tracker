import React from "react";
import Table from 'react-bootstrap/Table';

import styles from "./List.module.css";


function List1({state}){
    
    return(
        <div className={styles.container}>
            <h2 className={styles.heading}>India</h2>
            <Table striped bordered hover variant="light" responsive={1}>
            <thead>
                <tr>
                <th className={styles.number}>#</th>
                <th className={styles.stateName}>Name</th>
                <th className={styles.confirm}>Confirmed</th>
                <th className={styles.active}>Active</th>
                <th className={styles.recov}>Recovered</th>
                <th className={styles.death}>Deaths</th>
                </tr>
            </thead>
            <tbody>
            {state.map((state,i=1)=>(
                <tr key={i+6}>
                <td key={i} className={styles.numberText}>{i+1}</td>
                <td key={i+1} className={styles.stateNameText}>{state.state}</td>
                <td key={i+2} className={styles.confirmText}>{state.confirmed} <span className={styles.changConf}>+{state.deltaconfirmed}</span></td>
                <td key={i+3} className={styles.activeText}>{state.active}</td>
                <td key={i+4} className={styles.recovText}>{state.recovered} <span className={styles.changRec}>+{state.deltarecovered}</span></td>
                <td key={i+5} className={styles.deathText}>{state.deaths} <span className={styles.changDec}>+{state.deltadeaths}</span></td>
                </tr>
            ))}
            </tbody>
            </Table>
            </div>
    );
}

export default List1;