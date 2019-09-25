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
    handleClick() {
        const active = this.state.value;
        this.setState({value : active === 'X' ? 'O' : 'X'});
    }
    render() {
        return(
            <div
                className={style.header__menu}
            >
                <div
                    onClick={this.handleClick}
                 >
                    {this.state.value}
                 </div>
                {this.state.value === "O" ? <p>ALERT</p> : ""}
            </div>
        )
    }
}

export default Menu;