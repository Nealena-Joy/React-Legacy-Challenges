import React, {Component} from 'react';
import ToDoItems from './ToDoItems';
 
class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
           items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);

        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Enter task" type="text" name="text" autoComplete="off"/>
                    <button type="submit">Add</button>
                </form>
                <ToDoItems entries={this.state.items} />
            </div>
        )
    }


}
export default ToDoList;