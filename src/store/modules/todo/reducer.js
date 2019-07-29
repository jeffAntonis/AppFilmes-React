import Types from '~/store/modules/todo/actionsTypes';

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
