import React, {useEffect, useState} from 'react';
import {UserProfile} from "../../components/UserProfile/UserProfile";
import {api} from "../../api/api";
import {useParams} from "react-router-dom";
export interface UserProfileObject {
    id?:number;
    login:string;
    name:string;
    avatar_url:string;
    followers:string;
    following:string;
    blog:string;
}
export const UserProfilePage = () => {
    const [userProfile, setUserProfile] = useState<UserProfileObject | null>(null)
    const {id} = useParams()
    const getUser = async () => {
        const {data} = await api.get(`/users/${id}`)
        setUserProfile(data)
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <div className={''}>
            {
                userProfile &&
                    <UserProfile
                    name={userProfile.name}
                    login={userProfile.login}
                    followers={userProfile.followers}
                    following={userProfile.following}
                    blog={userProfile.blog}
                    avatar_url={userProfile.avatar_url}
                />
            }
        </div>
    );
};
