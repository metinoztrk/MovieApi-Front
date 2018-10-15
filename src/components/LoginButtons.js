import React,{Component} from 'react';
import {
    Menu,  
    Button,
    Grid
  } from 'semantic-ui-react'
class LoginButtons extends Component{

    Logout=()=>{
        this.props.state.deleteToken()
        localStorage.removeItem('token');
    }

    render(){
        return(
            <div>
                <Grid columns={2}>
                    <Grid.Row>
                    <Grid.Column>
                        <Menu.Item header>
                        <Button onClick={this.Logout} href="/">Logout</Button>
                        </Menu.Item>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

} 

export default LoginButtons;
