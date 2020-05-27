import React, { Component } from 'react';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
    showClear: false
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value }, () => {
  
    });
  }
  handleSubmit = (e) => {
    if(this.state.editItem){
      this.setState({editItem:false})
    }
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    if (newItem.item === "") {
      alert("pls enter something  ")
    } else {
      const updatedItems = [...this.state.items, newItem];
      this.setState({ items: updatedItems, id: uuidv4(), item: "", showClear: true },)
    }
  }
  clearAllList = () => {
    this.setState({ items: [] });
  }
  handleDelete = (id) => {


const filteritems=this.state.items.filter(item=>item.id!==id);
this.setState({items:filteritems})

  }
  handleEdit = (id) => {
const selectedItem = this.state.items.find(item =>item.id===id);
const filteritems=this.state.items.filter(item=>item.id!==id);
console.log(selectedItem);
this.setState({
  items:filteritems,
  item:selectedItem.item,
  editItem:true,
  id} ,()=>{console.log("state is improvised");
  })
console.log('handle edit closed');

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize  text-center">to do  input</h3>
              <TodoInput item={this.state.item} handleSubmit={this.handleSubmit} handleChange={this.handleChange} editItem={this.state.editItem} />
              <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} showClear={this.state.showClear} clearAllList={this.clearAllList} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


