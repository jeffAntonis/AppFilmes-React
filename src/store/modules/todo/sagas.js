import { takeLatest, put, call, all } from 'redux-saga/effects';

import Types from '~/store/modules/todo/actionsTypes';
import api from '~/services/api';
import config from '~/config';

function* getTodoList(action) {
  try {
    const response = yield call(api.get, `/movie/popular?api_key=${config.API_KEY}&language=pt&page=1`);

    yield put({ type: Types.SUCCESS_TODO_LIST, payload: { data: response.data.results } });
  } catch (err) {
    console.log(err);
  }
}

function* getDetailsMovie(action){
  try {
    const response = yield call(api.get, `/movie/${action.payload}?api_key=${config.API_KEY}&language=pt`);
    yield put({ type: Types.SUCCESS_DETAILS_MOVIE, payload: { data: response.data } });
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest(Types.REQUEST_TODO_LIST, getTodoList),
  takeLatest(Types.REQUEST_DETAILS_MOVIE, getDetailsMovie),
]);
