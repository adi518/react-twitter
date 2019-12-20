import { renderHook, act } from '@testing-library/react-hooks';

import { useStore, __initialState } from './store';
import tokenMock from './tokenMock';
import tweetsMock from './tweetsMock';

const {
  statuses: [mockTweet0, mockTweet1, mockTweet2]
} = tweetsMock;

const tweets = [mockTweet0, mockTweet1, mockTweet2];

describe('useStore hook', () => {
  test('should use useStore', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.state).toBe(__initialState);
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.setToken).toBe('function');
    expect(typeof result.current.setTweets).toBe('function');
    expect(typeof result.current.setIsLoadingMore).toBe('function');
  });

  test('should set token', () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setToken(tokenMock);
    });
    expect(result.current.state.token).toBe(tokenMock);
  });

  test('should set tweets', () => {
    const { result } = renderHook(() => useStore());
    const nextResultsMock =
      '?max_id=1208165945577000959&q=%23coronavirus&count=20&include_entities=1';
    act(() => {
      result.current.setTweets({
        tweets,
        nextResults: nextResultsMock
      });
    });
    expect(result.current.state.tweets).toStrictEqual(tweets);
    expect(result.current.state.nextResults).toBe(nextResultsMock);
  });

  test('should set isLoadingMore', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.state.isLoadingMore).toBe(false);
    act(() => {
      result.current.setIsLoadingMore(true);
    });
    expect(result.current.state.isLoadingMore).toBe(true);
  });

  test('should reset state', () => {
    const { result } = renderHook(() => useStore({ tweets }));
    act(() => {
      result.current.reset();
    });
    expect(result.current.state).toBe(__initialState);
  });
});
