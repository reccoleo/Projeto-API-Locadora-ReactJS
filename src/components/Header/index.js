import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

//<Link to="/">Pagina Header</Link> o to="/" siignifica que ele esta mandando para a pagina principal

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Link to="/">Locadora Online</Link>
            </div>
        );
    }
}

export default Header;