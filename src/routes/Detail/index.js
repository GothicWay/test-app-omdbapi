import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Form, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import logo from '../../images/logo.svg';
import { getSearchById } from '../../redux/actions/search';
import '../../App.css';

@connect(({ search, routerReducer }) => ({
  ...search,
  ...routerReducer
}),dispatch => bindActionCreators({
  push,
  getSearchById
}, dispatch))
class Detail extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    getSearchById: PropTypes.func.isRequired,
    resultFull: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    if(!this.props.resultFull && this.props.location.pathname !== '') {
      const arrPath = this.props.location.pathname.split('/');
      this.props.getSearchById(arrPath[arrPath.length-1])
    }
  };

  changeInput = ({ target}) => {
    this.props.setSearch({ search: target.value });
  };

  render() {
    const { resultFull } = this.props;
    if(resultFull) {
      return (
        <div className="App">
          <div className="top-info">
            <div className="left-info">
              <h2>{resultFull.Title}</h2>
              <p>{resultFull.Type}</p>
              <h4>{`${resultFull.Year}, ${resultFull.Country}`}</h4>
              <p>{`Премьера: ${resultFull.Released}`}</p>
              <p>{`Длительность: ${resultFull.Runtime}`}</p>
              <p>{`Жанр: ${resultFull.Genre}`}</p>
              <p>{`Режиссер: ${resultFull.Director}`}</p>
              <p>{`Издатель: ${resultFull.Production}`}</p>
              <p>{`Рейтинг: ${resultFull.imdbRating}`}</p>
              <p>{`Язык: ${resultFull.Language}`}</p>
              <p>{`рейтинг MPAA: ${resultFull.Rated}`}</p>
              <p>{`Сбор: ${resultFull.BoxOffice}`}</p>
              <p>{`Выход на DVD: ${resultFull.DVD}`}</p>
            </div>
            <div className="right-info">
              <img src={resultFull.Poster} alt={resultFull.Title}/>
            </div>
          </div>
          <div className="bottom-info">
            <p>{`Описание: \n ${resultFull.Plot}`}</p>
            <p>{`Актеры: \n ${resultFull.Actors}`}</p>
            <p>{`Награды: \n ${resultFull.Awards}`}</p>
            <p>Рейтинги других ресурсов:</p>
            {
              resultFull.Ratings.map(item => (
               <p><span>{item.Source} </span> {item.Value}</p>
              ))
            }
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="loading-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Загрузка...</h1>
        </div>
      </div>
    );
  }
}

export default Detail;