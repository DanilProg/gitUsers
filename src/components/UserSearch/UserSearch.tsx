import React, {FC, useEffect, useState} from 'react';
import classes from './UserSearch.module.css'
import {Link} from "react-router-dom";
import {pluralizeWord} from "../../utils";
import {api} from "../../api/api";
import {UserSearchObject} from "../../pages/UserSearchPage/UserSearchPage";
export const UserSearch:FC<UserSearchObject> = ({login, avatar_url, repos_url, organizations_url}) => {
    const [repository, setRepository] = useState<{number:number;word:string} | null>(null)
    const [organizations, setOrganizations] = useState('')
    const getRepository = async (reposUrl:string) => {
        const {data} = await api.get(reposUrl)
        setRepository(pluralizeWord(data.length, ['репозиторий', 'репозитория', 'репозиториев']))
    }
    const getOrganizations = async (organizationsUrl:string) => {
        const {data} = await api.get(organizationsUrl)
        data.find((userOrganizations:{login:string;}) => {setOrganizations(userOrganizations.login)})
    }
    useEffect(() => {
        getRepository(repos_url)
        getOrganizations(organizations_url)
    }, [])
    return (
        <div className={classes.user}>
            <div className={classes.image}>
                <img alt='user Image' className={classes.img} src={avatar_url}/>
            </div>
            <div className={classes.inner}>
                <Link to={`/profile/${login}`}><span className={classes.link}>{login},</span></Link>
                <span className={classes.text}> {repository && repository.number} {repository && repository.word}</span>
                <p className={classes.text}>{organizations}</p>
            </div>
        </div>
    );
};