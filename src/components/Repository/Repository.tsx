import React, {FC} from 'react';
import classes from "./Repository.module.css";
export interface RepositoryProps {
    id?:number;
    name:string;
    description:string;
    html_url: string;
}
export const Repository:FC<RepositoryProps> = ({description,name, html_url}) => {
    return (
        <section className={classes.repositoryInner}>
                <a href={html_url} className={classes.link} target={'_blank'}>{name}</a>
                <p className={classes.repositoryText}>{description}</p>
        </section>
    );
};
