import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from '../Screens/Home';

import { Details } from '../Screens/Details';

export  function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/details">
                    <Details />
                </Route>
            </Switch>



        </BrowserRouter>
    )
}
