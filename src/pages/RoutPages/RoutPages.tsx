import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "../../components/Layout/Layout";
import {UserSearchPage} from "../UserSearchPage/UserSearchPage";
import {UserProfilePage} from "../UserProfilePage/UserProfilePage";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
export const RoutPages = () => {
    return (
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<UserSearchPage/>}/>
                        <Route path='search' element={<UserSearchPage/>}/>
                        <Route path='profile/:id' element={<UserProfilePage/>}/>
                        <Route path='/notfound' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
    );
};
