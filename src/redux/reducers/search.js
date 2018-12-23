import makeReducer from '../../utils/fabrickReducer';
import { SET_SEARCH } from '../constants'

const initialState = {
  search: '',
  searchResults: [],
  resultFull: null
};

export default makeReducer(initialState, SET_SEARCH);