import React, {FC, useEffect, useState} from 'react';
import classes from './UserProfile.module.css'
import {api} from "../../api/api";
import {Repository, RepositoryProps} from "../Repository/Repository";
import {UserProfileObject} from "../../pages/UserProfilePage/UserProfilePage";
export const UserProfile:FC<UserProfileObject> = ({following,followers,login,name, blog, avatar_url}) => {
    const [repository, setRepository] = useState<RepositoryProps[]>([])
    useEffect(() => {
        (async () => {
            const {data} = await api.get<RepositoryProps[]>(`https://api.github.com/users/${login}/repos`)
            setRepository(() => {
                return data.filter((rep) => rep.id)
            })
        })()
    },[])
    return (
        <div>
            <div className={classes.profile}>
                <div className={classes.profile__image}>
                    <img alt='avatar' className={classes.profile__imageImg} src={avatar_url}/>
                </div>
                <div>
                    <h1 className={classes.title}>{name}<span className={classes.login}>{login}</span></h1>
                    <div className={classes.profile__inner}>
                        <span className={classes.textColor}>{followers} </span>
                        Подписчиков     ·
                        <span className={classes.textColor}>{following}</span>
                        Подписок    ·
                        <a href={blog} target={"_blank"} className={classes.link}>{blog}</a>
                    </div>
                </div>
            </div>
            <div className={classes.repository}>
                <div className={classes.repositoryHeader}>
                    <h2 className={classes.title}>РЕПОЗИТОРИИ</h2>
                    <a className={classes.link} href={`https://github.com/${login}?tab=repositories`} target={'_blank'}>Все репозитории</a>
                </div>
                <div className={classes.repositoryContent}>
                    {
                        repository.map((repos) => <Repository
                            key={repos.id}
                            name={repos.name}
                            description={repos.description}
                            html_url={repos.html_url
                        }/>)
                    }
                </div>
            </div>
        </div>


    );
};