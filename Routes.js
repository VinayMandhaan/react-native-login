import React from 'react'
import {Router,Stack,Scene} from "react-native-router-flux"

import Login from "./Login"
import SignUp from "./SignUp"
class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Stack key="root">
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="register" component={SignUp} title="Register"/>
                </Stack>
            </Router>
        )
    }
    
}

export default Routes
