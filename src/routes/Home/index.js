import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Form, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import logo from '../../images/logo.svg';
import { setSearch, getSearch, getSearchById } from '../../redux/actions/search';
import '../../App.css';

@connect(({ search }) => ({
  ...search
}),dispatch => bindActionCreators({
  push,
  setSearch,
  getSearch,
  getSearchById
}, dispatch))
class Home extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
    getSearch: PropTypes.func.isRequired,
    getSearchById: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired
  };

  changeInput = ({ target}) => {
    this.props.setSearch({ search: target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Поисковик фильмов</h1>
          <Form inline>
            <FormControl
              type={'text'}
              name={'search'}
              value={this.props.search}
              onChange={this.changeInput}
            />
            <Button onClick={this.props.getSearch}>Поиск</Button>
          </Form>
        </header>
        <ListGroup>
          {this.props.searchResults.map(item => (
            <ListGroupItem header={item.Title} onClick={() => this.props.getSearchById(item.imdbID)}>
              <p>{item.Year}</p>
              <img style={{ height: 300, width: 'auto'}} src={item.Poster}/>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Home;