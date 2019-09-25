import React, {Component} from 'react';
import style from './logo.component.css'
import srcImg from './logo.png';

class Logo extends Component {
    render() {
        return (
            <a href="#">
            <img src={srcImg} alt="rocket" className={style.header__logo}/>
            </a>
        );
    }
}

export default Logo;