import { SET_SEARCH, GET_SEARCH, GET_SEARCH_RESULT_BY_ID } from '../constants';

export const setSearch = payload => ({ type: SET_SEARCH, payload });
export const getSearch = () => ({ type: GET_SEARCH });
export const getSearchById = id => ({ type: GET_SEARCH_RESULT_BY_ID, id });