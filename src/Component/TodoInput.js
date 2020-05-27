import React, { Component } from 'react'

class TodoInput extends Component {
    render() {

        return (
            <div className="card card-body my-3 ">
                <form onSubmit={this.props.handleSubmit}
                >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book "></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" value={this.props.item} onChange={this.props.handleChange} placeholder="add a  todo item pls" />
                    </div>
        <button className="btn-primary mt-3 btn btn-block" type="submit" >{this.props.editItem?"edit me ":"add item"}</button>
                </form>



            </div>
        )
    }
}
export default TodoInput