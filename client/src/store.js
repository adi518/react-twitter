import { useReducer } from 'react';

export const __initialState = {
  tweets: [],
  token: null,
  nextResults: null,
  isLoadingMore: false
};

const RESET = 'reset';
const SET_TOKEN = 'set_token';
const SET_TWEETS = 'set_tweets';
const SET_IS_LOADING_MORE = 'set_is_loading_more';

function reducer(state, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_TWEETS:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload.tweets),
        nextResults: action.payload.nextResults || null
      };
    case SET_IS_LOADING_MORE:
      return { ...state, isLoadingMore: action.payload };
    case RESET:
      return __initialState;
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

export function useStore(initialState = __initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reset = () => dispatch({ type: RESET });
  const setToken = token => dispatch({ type: SET_TOKEN, payload: token });
  const setTweets = tweets => dispatch({ type: SET_TWEETS, payload: tweets });
  const setIsLoadingMore = isLoadingMore =>
    dispatch({ type: SET_IS_LOADING_MORE, payload: isLoadingMore });
  return { state, reset, setToken, setTweets, setIsLoadingMore };
}
