import React from 'react';
import classes from './BuildControls.module.css';

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.Label}>{props.dddsssddssddlabel}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);