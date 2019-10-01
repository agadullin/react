import React, {Component} from 'react';
import style from './user.component.css';

class User extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let block;
        if (this.props.user.firstName === "" && this.props.user.lastName === '') {
            block = 'Enter';
        } else {
            block = this.props.user.firstName + " " + this.props.user.lastName;
        }
        return (
            <div className={style.auth__user} onClick={this.props.vent}>
                {block}
            </div>
        )
    }

}

export default User;

//{this.props.user.user.firstName}