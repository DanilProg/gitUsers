import React from 'react';
import classes from './SmallCard.module.css'

export const SmallCard = () => {
    return (
        <div className={classes.card}>
            <img className={classes.img}/>
            <div className={classes.inner}>
                <span className={classes.link}>defunk,</span>
                <span>15 репо</span>
                <p>Организация</p>
            </div>
        </div>
    );
};