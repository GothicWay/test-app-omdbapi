import { put, call, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { GET_SEARCH, GET_SEARCH_RESULT_BY_ID } from '../constants';
import { callApi } from '../../utils/callApi';
import { isDebug } from '../../constants/config';
import { setSearch } from '../actions/search';

function* getSearchResult() {
  try {
    const { search } = yield select(state => state.search);
    const res = yield call(callApi, {
      endpoint: 'search',
      method: 'POST',
      payload: {
        search
      }
    });
    yield put(setSearch({ searchResults: res.data }));
  } catch (err) {
    isDebug && console.error('getSearchResult: ',err);
  }
}

function* getSearchById({id}) {
  try {
    const res = yield call(callApi, {
      endpoint: 'search_id',
      method: 'POST',
      payload: {
        id
      }
    });
    yield put(setSearch({ resultFull: res.data }));
    yield put(push(`/film/${id}`))
  } catch (err) {
    isDebug && console.error('getSearchById: ', err)
  }
}

export default [takeLatest(GET_SEARCH, getSearchResult), takeLatest(GET_SEARCH_RESULT_BY_ID, getSearchById)]