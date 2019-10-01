import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaugh} from '@fortawesome/free-solid-svg-icons';
import User from '../user/user.component';
import style from './auth.component.css';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                firstName : "",
                lastName : ""
            }
        }
    }

    blabla(event) {
        console.log(event.target.innerHTML);
    }
    render() {
        return (
           <div className={style.header__auth}>
               <FontAwesomeIcon icon={faLaugh} color='white'/>
               <User user={this.state.user} vent={this.blabla}/>
           </div>
        )
    }
}

export default Auth;