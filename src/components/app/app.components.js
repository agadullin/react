import React, {Component} from "react";
import s from "./app.component.css";
import Header from '../header/header.component';

class App extends Component {
    render() {
        return (
            <div className = {s.app}>
                <Header/>
            </div>
         );
    }
}
export default App;