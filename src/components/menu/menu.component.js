import React, {Component} from 'react';
import style from './menu.component.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "X"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onChangeMenu(e.target.innerHTML);
    }
    render() {
        return(
            <div className={style.header__menu}>
                <div onClick={this.handleClick}>
                    {this.props.value}
                 </div>
            </div>
        )
    }
}

export default Menu;