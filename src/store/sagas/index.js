import { takeLatest, put, call } from 'redux-saga/effects';

import { Types } from "~/store/ducks/todo";
import api from '~/services/api';
import config from '~/config';

function getMovies() {
  return new Promise((resolve, reject) => {
    api.get(`/discover/movie?api_key=${config.API_KEY}&language=pt&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

function* getTodoList(action) {
  try {
    const response = yield call(getMovies);

    yield put({ type: Types.SUCCESS_TODO_LIST, payload: { data: response.results } });
  } catch (err) {
    yield put({ type: Types.FAILURE_TODO_LIST });
  }
}

function getDetails(movieId) {
  return new Promise((resolve, reject) => {
    api.get(`/movie/${movieId}?api_key=${config.API_KEY}&language=pt`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

function* getDetailsMovie(action){
  try {
    const response = yield call(getDetails, action.payload);
    console.log(response);

    yield put({ type: Types.SUCCESS_DETAILS_MOVIE, payload: { data: response } });
  } catch (err) {
    console.log(err);
  }
}

export default function* todo() {
  yield takeLatest(Types.REQUEST_TODO_LIST, getTodoList);
  yield takeLatest(Types.REQUEST_DETAILS_MOVIE, getDetailsMovie);
}
