import React, {Component} from 'react';
import style from "./menuItem.component.css";

class MenuItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <a className={style.header__menuItem} href="#">{this.props.name}</a>
        )
    }
}

export default MenuItem;