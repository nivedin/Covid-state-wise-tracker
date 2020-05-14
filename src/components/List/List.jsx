import React from "react";
import Table from 'react-bootstrap/Table';

import styles from "./List.module.css";


function List1({state}){
    
    return(
        <div>
            <h2 className={styles.heading}>India</h2>
            <Table striped bordered hover variant="dark" responsive>
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
                <tr>
                <td className={styles.numberText}>{i+1}</td>
                <td className={styles.stateNameText}>{state.state}</td>
                <td className={styles.confirmText}>{state.confirmed} <span className={styles.changConf}>+{state.deltaconfirmed}</span></td>
                <td className={styles.activeText}>{state.active}</td>
                <td className={styles.recovText}>{state.recovered} <span className={styles.changRec}>+{state.deltarecovered}</span></td>
                <td className={styles.deathText}>{state.deaths} <span className={styles.changDec}>+{state.deltadeaths}</span></td>
                </tr>
            ))}
            </tbody>
            </Table>
            </div>
    );
}

export default List1;