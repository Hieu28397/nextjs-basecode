import {
  GET_USERS_FAILURE,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
} from '../actionTypes';

const defaultState = {
  data: [],
  isLoading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
