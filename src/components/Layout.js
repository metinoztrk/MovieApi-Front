import React,{Component} from 'react';
import {
    Image,
    Menu,
    Visibility
  } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {menuStyle,fixedMenuStyle} from '../helpers/styleHelper'; 
import LoginButtons from './LoginButtons';
class Layout extends Component{

    
    state = {
        menuFixed: null,
        overlayFixed: false
      };
      stickTopMenu = () => this.setState({ menuFixed: true })
    
      unStickTopMenu = () => this.setState({ menuFixed: null })

    render(){

        const { menuFixed } = this.state;
        console.log(this.props.state)
        return(
            <div>
                <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
                >
                    <Menu 
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                    <Menu.Item>
                    <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                    <Menu.Item header>
                    <Link to="/">Movie App</Link>
                    </Menu.Item>
                    <Menu.Item >
                    <Link to="/movies">Movies</Link>
                    </Menu.Item>
                    <Menu.Item>
                    <Link to="/addMovie" >Add Movie</Link>
                    </Menu.Item>
                    <Menu.Item>
                        {this.props.state.state.token.login ? <LoginButtons state={this.props.state}/> : ""}
                    </Menu.Item>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}
export default Layout;