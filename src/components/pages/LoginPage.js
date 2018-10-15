import React,{Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../LoginForm';
import {token} from '../../actions/movies'
class LoginPage extends Component{
    render(){
        console.log(this.props.token);
        return(
            
            <div>
                <LoginForm token={this.props.token}/>
            </div> 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        token:state
    }
}

const mapDispatchToProps={
    token
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);