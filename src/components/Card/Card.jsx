import React from "react";
import {Card,CardContent,Typography,Grid} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({data}) =>{
    if(!(data.TotalConfirmed)){
        return "Loading...";
    }
    
    return(
        <div className={styles.container}>
          <h3 className={styles.heading}>Global</h3>
            <Grid container  justify={"center"} >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.TotalConfirmed}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.TotalRecovered}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.TotalDeaths}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;