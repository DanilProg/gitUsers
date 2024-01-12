import React, {useEffect, useState} from 'react';
import {UserSearch} from "../../components/UserSearch/UserSearch";
import {api} from "../../api/api";
import {useNavigate, useSearchParams} from 'react-router-dom';
export interface UserSearchObject {
    id?: number;
    login: string;
    avatar_url: string;
    repos_url: string;
    organizations_url: string;
}
export const UserSearchPage = () => {
    const [users, setUsers] = useState<UserSearchObject[]>([])
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const getUsers = async () => {
        try {
            if (searchParams.get('q')) {
                const {data} = await api.get(`/search/users?q=${searchParams.get('q')}`)
                if (!data.items.length) {
                    navigate('/notfound')
                }else {
                     setUsers([...data.items])
                }
            }else {
                const {data} = await api.get('/users?&per_page=30')
                setUsers([...data])
            }
        } catch (e) {
            console.log(e)
            navigate('/notfound')
        }
    }
    useEffect(() => {
        getUsers()
    }, [searchParams])
    return (
        <div className={'user__content'}>
            {
                users.map((user) => <UserSearch
                    key={user.id}
                    login={user.login}
                    avatar_url={user.avatar_url}
                    repos_url={user.repos_url}
                    organizations_url={user.organizations_url}/>)
            }
        </div>
    );
};
