import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "../../Layout/Layout";
import {UserSearchPage} from "../UserSearchPage/UserSearchPage";
import {UserProfilePage} from "../UserProfilePage/UserProfilePage";

export const RoutPages = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<UserSearchPage/>}/>
                <Route path='search' element={<UserSearchPage/>}/>
                <Route path='profile' element={<UserProfilePage/>}/>
            </Route>
        </Routes>
    );
};
