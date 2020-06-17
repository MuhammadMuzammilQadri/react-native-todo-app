import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TapBar from './TapBar';

let todoIndex = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  setType(type) {
    console.log('Type set to: ' + type);
    this.setState({type});
  }

  inputChange(inputValue) {
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValue: ''}, () => {
      console.log('State from SubmitTodo(): ', this.state);
    });
  }

  // eslint-disable-next-line no-shadow
  deleteTodo(todoIndex) {
    console.log('Todo deleted at index: ' + todoIndex);
    let {todos} = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos});
  }

  // eslint-disable-next-line no-shadow
  toggleComplete(todoIndex) {
    let {todos} = this.state;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
        console.log('Todo completed: ' + todo.title);
      }
    });
    this.setState({todos});
  }

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={todoIndex => this.toggleComplete(todoIndex)}
            deleteTodo={todoIndex => this.deleteTodo(todoIndex)}
            todos={todos}
            type={type}
          />
          <Button submitTodo={() => this.submitTodo()} />
        </ScrollView>
        <TapBar type={type} setType={type => this.setType(type)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
