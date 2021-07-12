import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./todoData"
import AddItem from "./addItem"
import DataList from "./dataList"
import Nav from "./Nav"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData,
            userInput: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.uniqueId = this.uniqueId.bind(this)
        /*this.handleDelete = this.handleDelete.bind(this)*/
                
          
        
    }
   

    handleChange = id => {
        const updatedTodos = this.state.list.map(todo => {
            if (todo.id === id) {
                todo.check = !todo.check;
            }
            return todo;
        });
        this.setState({ list: updatedTodos })
        console.log(this.state.list)
    };

    updateInput = event => {
        this.setState({
            userInput: event.target.value.toString(),
        });
    }


    uniqueId = () => {
        let randomizer = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        
        }
        return randomizer() + randomizer() + '-' + randomizer() + '-' + randomizer();
      
    }

    addI =() => {

        if (this.state.userInput !== "") {

            var ele = {};
            ele.id = this.uniqueId()
            ele.value = this.state.userInput;
            ele.check = false;

            this.state.list.push(ele);

            console.log("--", this.state.list)
            this.setState({
                userInput: ''
            })
        }
        
    }

    handleDelete = itemId => {
        const items = this.state.list.filter(item => item.id !== itemId);
        this.setState({ list: items }
        );
        console.log(this.state.list)        
    };

      render() {
        
          //const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)


          return (
              <div>
              <Nav />
            <div className="todo-list">
                
                <AddItem target={this.state} updateInput={this.updateInput} addI={this.addI} />
                {/*<AddItem addI={ this.updateInput} />*/}
                {/*{todoItems}*/}

                <DataList target={this.state.list} handleChange={this.handleChange} handleDelete={this.handleDelete} />

                
               
                     
                  </div>
                  </div>
        )
    }
}

export default App