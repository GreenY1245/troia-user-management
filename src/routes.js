import React from 'react'

import { Route, Switch } from 'react-router-dom'

import UserList from './components/UserList/userList'
//import AddUser from './components/AddUser/addUser'
import NotFound from './components/NotFound/notFound'


export default () => 
    <Switch>
        <Route path="/" exact component={UserList} />
        {/*<Route path="/addUser" component={AddUser} />*/}

        <Route component={NotFound} />

    </Switch>