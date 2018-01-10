import React from 'react';
export default class Greeting extends React.Component{
    
    constructor(){
        super()
        this.state = {name : '', count: 0}
    }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSave(){
        let state = {}
        count = 1
    }

    handleClick(click){
        click = click + 1
        this.setState({count: click})
    }
   
    render(){
        return(
            <div>
                 <h1>Greeting</h1>
                 Name: <input type="text" name ="name" value = {this.state.name} onChange = {this.handleChange.bind(this)}/>
                 
                 <button onClick = {()=>this.handleClick(this.state.count)}>Greet</button>

                 <div>{this.state.name}</div>
                 {this.state.count}
                
            </div>
        )
    } 
}