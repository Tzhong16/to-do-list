import React, { Component } from 'react';
import Input from './components/input';
import NavBar from './components/navBar';
import Notes from './components/notes';
import { paginate } from './utils/paginate';
// import Pagination from './components/common/pagination';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import './App.css';

const apiEndpoint = 'http://jsonplaceholder.typicode.com/todos';

class App extends Component {
  state = {
    todo: { title: '' },
    todos: [],
    pageSize: 5,
    currentPage: 1,
    paginateRange: 7
  };

  async componentDidMount() {
    const { data: todos } = await axios.get(apiEndpoint);
    this.setState({ todos });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const todocopy = { ...this.state.todo };
    const { data: todo } = await axios.post(apiEndpoint, todocopy);
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
  };

  handleChange = e => {
    let todo = { ...this.state.todo };
    todo.title = e.currentTarget.value;
    this.setState({ todo });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.todos;
    const {
      todos: allTodos,
      currentPage,
      pageSize,
      paginateRange
    } = this.state;

    const todos = paginate(allTodos, currentPage, pageSize);

    return (
      <React.Fragment>
        <NavBar />
        <Input
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          note={this.state.todo.title}
        />
        <Notes todos={todos} />
        {/* <Pagination
          currentPage={this.state.currentPage}
          itermsCountPerPage={this.state.paginateRange}
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        /> */}
        <div className="container">
          <Pagination
            activePage={currentPage}
            totalItemsCount={count}
            pageRangeDisplayed={paginateRange}
            onChange={this.handlePageChange}
            activeClass={'page-item active'}
            activeLinkClass={'page-link'}
            itemClass={'page-item'}
            linkClass={'page-link'}
            hideFirstLastPages={true}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
