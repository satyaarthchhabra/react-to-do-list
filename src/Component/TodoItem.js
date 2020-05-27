import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{this.props.title}</h6>
                <div className="todo-icon">
                    <span className="text-success mx-2 " onClick={()=>{this.props.handleEdit(this.props.id)}}>
                        <i className=" fas fa-pen "></i>
                    </span>
                    <span className="text-danger mx-2 " onClick={()=>{this.props.handleDelete(this.props.id)}}>
                    <i class="fas fa-trash"></i>
                    </span>
                </div>
            </li>

        )
    }
}
