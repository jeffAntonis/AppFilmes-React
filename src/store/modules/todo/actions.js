
import Types from '~/store/modules/todo/actionsTypes';

export function requestTodoList() {
  return {
    type: Types.REQUEST_TODO_LIST,
  }
}

export function requestDetailsMovie(id) {
  return {
    type: Types.REQUEST_DETAILS_MOVIE,
    payload: id
  }
}