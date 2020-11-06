import React from 'react';
import logo from './logo.png';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if(todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  updateInput(input) {
    this.setState({newItem: input});
  }

  render(){
    return (
      <div>

        <img src={logo} width="200" height="200" className="logo" />
        <h1 className="app-title">ToDo Task Builder</h1>
        <div className="container">
          Want to add a task..?
          <br/>
          <input 
              type="text" 
              name="" 
              className="input-text" 
              placeholder="Write your tasks here.."
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
          />
          <button 
              className="add-btn"
              onClick={()=> this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
          >Add Task</button>
          <div className="list">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <input 
                  type="checkbox" 
                  name="idDone" 
                  checked={item.isDone}
                  onChnage={() => {}}
                  /> &nbsp;
                  {item.value}
                  <button
                  className="btn"
                  onClick={()=> this.deleteItem(item.id)}
                  >Delete</button>
                </li>
              );
            })}
            <li>
              <input type="checkbox" name="" />
              &nbsp; YOUR TASKS !!
              <button className="btn">Delete</button>
            </li>
          </ul>
          </div>
        </div>
        <div className="footer"><i>Copyright &copy; 2020 GVP | All rights reserved</i></div>

      </div>
      );
  }
}

export default App