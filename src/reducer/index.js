import { CURRENCY_CHANGED } from '../actions/index';

const initialState = {
  currency: 'gbp'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_CHANGED:
      return { ...state, currency: action.currency };

    default:
      return state;
  }
};
