import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaugh} from '@fortawesome/free-solid-svg-icons';
import style from './auth.component.css';

class Auth extends Component {
    render() {
        return (
           <div className={style.header__auth}>
               <FontAwesomeIcon icon={faLaugh} pulse color='red'/>
               Authorization
           </div>
        )
    }
}

export default Auth;