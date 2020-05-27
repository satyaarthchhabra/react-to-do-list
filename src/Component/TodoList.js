import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        
        let todoitems ;
    todoitems=this.props.items.map(item=>{
            return  <TodoItem handleDelete={this.props.handleDelete}  handleEdit={this.props.handleEdit} title={item.item} id={item.id} key={item.id} /> 
        })
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className=
                    "text-capitalize text-center">to do list </h3>
              {todoitems}       
                    <button type="button"style={{display: this.props.showClear?"block":"none"}} className="btn btn-danger btn-block text-capitalize mt-5" onClick={this.props.clearAllList}> clear list </button>
     
                </ul>
                
              
            </div>
        )
    }
}
