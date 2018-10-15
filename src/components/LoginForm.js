import React ,{Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import {input} from '../helpers/styleHelper';
class LoginForm extends Component{

    state={
        username:"",
        password:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })      
    }

    onSubmit=()=>{
        this.props.token(this.state);
    }

    render(){
        console.log(this.props)
        const form=(
            <Form onSubmit={this.onSubmit}>
                <Form.Field style={input}>
                <label>User Name</label>
                <input 
                id="username"
                name="username"
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder='Username' />
                </Form.Field>
                <Form.Field style={input} >
                <label>Password</label>
                <input 
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder='Password' />
                </Form.Field>
                <Button type='submit'>Giriş</Button>
            </Form>
        )
        return(
           
            <div>
                 <h1>LOGIN</h1>
                {
                   
                    form
                }
            </div>
        )
    }
}

export default LoginForm;