import React from 'react'
import Hello from './Hello.jsx'
import Greeting from './Greeting.jsx'
import Greeting3 from './Greeting3.jsx'


export default class App extends React.Component{
    render(){
        return(
        <div>
           <Hello name='Thanh'/>
           <Hello name='Hien'/>

           <Greeting3/>
           
        </div>
        )
    }
}