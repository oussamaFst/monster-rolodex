import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import LifeCycles from "./lifeCycles";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowText:true,
            text:''
        }
    }


    render() {
        console.log("render App component")
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <button className="button App-button" onClick={()=>{
                        this.setState({ShowText: !this.state.ShowText})
                    }}>
                        lifeCycle handler
                    </button>
                    <button className="button App-button" onClick={()=>{
                        this.setState({text:this.state.text + "-hello"})
                    }}>
                        Change Text
                    </button>
                    {this.state.ShowText? <LifeCycles text={this.state.text}/>:null}
                </header>
            </div>
        );
    }

}

export default App;
