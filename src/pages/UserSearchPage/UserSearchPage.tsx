import React, {useEffect, useState} from 'react';
import {UserSearch} from "../../UserSearch/UserSearch";
import axios from "axios";

export const UserSearchPage = () => {
    const [users, setUsers]:any = useState([])
    console.log(users)
    const getUsers = async () => {
        const {data} = await axios.get(" https://api.github.com/users")
        setUsers([...data, ...users])
    }
    useEffect(  () => {
        getUsers()
    }, [])
    return (
        <div className={'user__content'}>
            {
                users.map((user:any) => <UserSearch key={user.id} name={user.login} image={user.avatar_url}/>)
            }
        </div>
    );
};
