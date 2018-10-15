import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    Container,
  } from 'semantic-ui-react';
import {token,deleteToken} from '../actions/movies';
import LoginPage from '../components/pages/LoginPage';
import Layout from './Layout';

class Header extends Component{
    
      
      render(){ 
        
      return(
          <div > 
              <Container>
               {
                 this.props.state.token.login ? <Layout state={this.props} />  : <LoginPage/>
               }
              </Container>
          </div>
      )
    }
}

const mapStateToProps = (state)=>{
  return{
      state:state
  }
}

const mapDispatchToProps={
  token,
  deleteToken
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);