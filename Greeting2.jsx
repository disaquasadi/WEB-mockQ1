import React from 'react';
export default class Greeting2 extends React.Component{
    constructor(){
        super()
        this.state = {name:'',count:0}
    }
    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    handleSave(){
        let newstater = {}
        count = 1
    }
    handleClick(){
        click += 1
        this.setState({count:click})
    }
    render(){
        return(
            <div>
                <h1>Greeter</h1>
                Name: <input type="text" name = "" value = {this.state.name} onChange = {this.handleChange.bind(this)}/>
                <button onClick = {()=>this.handleClick(this.state.count)}>greet</button>
                <div>{this.state.name}|{this.state.count}</div>
            </div>
        )
    }
}