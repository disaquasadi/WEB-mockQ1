import React from 'react';
export default class Greeting3 extends React.Component{
    constructor(){
        super()
        this.state = {name: "",counter: 0}
    }

    handleSave(){
        let state = {};
        counter = 1

    }
    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState(change)
    }

    handleClick(click){
        click = click + 1;
        this.setState({counter: click})
    }
    render(){
        return(
            <div>
                <h1>Greet</h1>
                Name: <input type="text" name="name" value = {this.state.name} onChange = {this.handleChange.bind(this)}/>
                <button onClick = {()=> this.handleClick(this.state.counter)}>Greet</button>
                <div>{this.state.name} | {this.state.counter}</div>
                
            </div>
        )
    }

}