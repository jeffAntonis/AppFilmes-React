// Action Types

export const Types = {
  REQUEST_TODO_LIST: 'REQUEST_TODO_LIST',
  SUCCESS_TODO_LIST: 'SUCCESS_TODO_LIST',
  FAILURE_TODO_LIST: 'FAILURE_TODO_LIST',
  REQUEST_DETAILS_MOVIE: 'REQUEST_DETAILS_MOVIE',
  SUCCESS_DETAILS_MOVIE: 'SUCCESS_DETAILS_MOVIE',
};

// Reducer

const INITIAL_STATE = {
  data: [],
  details: [],
  loading: false,
  requestSucess: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_TODO_LIST:
      return { ...state, loading: true };
    case Types.SUCCESS_TODO_LIST:
      return { data: action.payload.data, loading: false, requestSucess: true };
    case Types.FAILURE_TODO_LIST:
      return { data: [], loading: false, requestSucess: false };
    case Types.REQUEST_DETAILS_MOVIE:
      return { ...state };
    case Types.SUCCESS_DETAILS_MOVIE:
      return { ...state, details: action.payload.data };
    default:
      return state;
  }
}

// Action Creators

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