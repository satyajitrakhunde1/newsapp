import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apikey =process.env.REACT_APP_NEW_API;      //for env file to hide api key
  state={
    progress:0
  }

  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
     
    
  

    <Router>
    <Navbar/> 
    <LoadingBar         //this is top loading bar npm package code 
        color='#1166c1'
        progress={this.state.progress}  //top progress bar 
        height={3}
        />
       
{/* //below are all the route data sending to news component */}
    <Switch>
          <Route exact path="/"><News setprogress={this.setprogress} apikey={this.apikey} key="general" country="in" category="general"/></Route> 
          <Route exact path="/business"><News setprogress={this.setprogress} apikey={this.apikey} key="business" country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setprogress={this.setprogress} apikey={this.apikey} key="general" country="in" category="general"/></Route> 
          <Route exact path="/health"><News setprogress={this.setprogress} apikey={this.apikey} key="health" country="in" category="health"/></Route> 
          <Route exact path="/science"><News setprogress={this.setprogress} apikey={this.apikey} key="science" country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setprogress={this.setprogress} apikey={this.apikey} key="sports" country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setprogress={this.setprogress} apikey={this.apikey} key="technology" country="in" category="technology"/></Route> 
        </Switch> 

</Router>


 






        
        

        
    )
  }
}


