import React, {Component} from "react";
import s from "./app.component.css";
import Header from '../header/header.component';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            valueMenu : "X",
            valueAuth : true
        };
        this.onChangeState = this.onChangeState.bind(this);
    }
    onChangeState(){
        const value = this.state.valueMenu === "X" ? 'O' : 'X';
        console.log(this.state.valueMenu);
        this.setState({valueMenu: value});
    }
    render() {
        return (
            <div className = {s.app}>
                <Header valueMenu={this.state.valueMenu} changeState={this.onChangeState}/>
            </div>
         );
    }
}
export default App;