import React, {Component} from 'react';
import style from './header.component.css';
import Logo from '../logo/logo.component';
import Menu from '../menu/menu.component';
import MenuItem from '../menuItem/menuItem.component';
import Auth from '../auth/auth.component';

class Header extends Component {
    constructor(props){
        super(props);
        this.onChangeMenuForApp = this.onChangeMenuForApp.bind(this);
    }
    onChangeMenuForApp() {
        this.props.changeState()
    }
    render() {
        return (
            <div className={style.header}>
                <Logo/>
                <Menu value={this.props.valueMenu} onChangeMenu={this.onChangeMenuForApp}/>
                <MenuItem name="Команда"/>
                <MenuItem name="Панда"/>
                <MenuItem name="Лаванда"/>
                <MenuItem name="Пропаганда"/>
                <Auth/>
            </div>
        )
    }
}

export default Header;