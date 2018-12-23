import { fork, all } from 'redux-saga/effects';
import { isDebug } from '../../constants/config';
import search from './search';

// Run when the application starts
function* startup() {
  try {
    isDebug && console.log('application Start')
  } catch (error) {
    isDebug && console.log('error')
  }
}

export default function* rootSaga() {
  yield all([
    fork(startup),
    ...search
  ])
}
