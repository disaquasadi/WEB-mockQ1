import React from 'react';
export default class Greeting4 extends React.Component{
    constructor(){
        super()
        this.state = {name: "",count: 0}
    }

    handeChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSave(){
        this.setState({count: this.state.count + 1})
    }

    // handleClick(raise){
    //     raise = raise + 1
    //     this.setState({count: raise})
    // }

    render(){
        return(
            <div>
                <h1>Greet</h1>
                <input type="text" name= "name" value = {this.state.name} onChange = {this.handeChange.bind(this)}/>
                <button onClick = {()=>this.handleSave.bind(this)}>Greet</button>
               <div> {this.state.name} | {this.state.count} </div>
            </div>
        )
    }
}