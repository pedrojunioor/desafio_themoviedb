import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import PageDetails from './pages/PageDetails/PageDetails';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'  >
                <Home/>
            </Route>
            <Route exact path='/movies/:id' >
                <PageDetails />
            </Route>
        </Switch>
    );
}