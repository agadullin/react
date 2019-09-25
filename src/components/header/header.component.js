import React, {Component} from 'react';
import style from './header.component.css';
import Logo from '../logo/logo.component';
import Menu from '../menu/menu.component'

class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <Logo/>
                <Menu/>
            </div>
        )
    }
}

export default Header;