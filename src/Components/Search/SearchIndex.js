import React, { Component, useState} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
    constructor(props){
      super(props)
      this.state = {
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      }
      this.searchFunction = this.searchFunction.bind(this);
    }
    
    searchFunction(event) {
      this.setState({value: event.target.value})
      console.log("Search Term:", (event.target.value))
    }
  
    render() {
      return(
          <div>
            <Input placeholder='Search Here' type="text" name="search" id="search" onChange={this.searchFunction} value={this.value}/>
            <h3>Results:</h3>
            <ul>
              {this.state.things.filter(thing => thing.includes(this.state.value)).map(filteredThing => (
                <li key={filteredThing}>
                  {filteredThing}
                </li>
              ))}
            </ul>
          </div>
        
      )
    }
} 