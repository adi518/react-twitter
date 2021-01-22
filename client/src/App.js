import React from 'react';
import { useEffectOnce } from 'react-use';

import { useStore } from './store';
import { parseQueryString } from './utils';
import { getTweets, getTokenUtil, getTweetsUtil } from './api';

import StyledApp from './App.styled';
import Tweet from './components/Tweet';
import Tweets from './components/Tweets';
import TwitterLogo from './components/TwitterLogo';
import Loader, { SmallLoader } from './components/Loader';

const SCROLL_SCALE = 1.667;

function App({ initialState }) {
  const { state, setToken, setIsLoadingMore, setTweets } = useStore(
    initialState
  );

  useEffectOnce(() => {
    (async () => {
      const accessToken = state.token || (await getTokenUtil());
      setToken(accessToken);
      const response = await getTweets({ accessToken });
      const { tweets, nextResults } = getTweetsUtil(response);
      setTweets({ tweets, nextResults });
    })();
  });

  const handleScroll = async (event) => {
    const clientHeight = parseInt(event.target.clientHeight * SCROLL_SCALE);
    const scrollEnd =
      event.target.scrollHeight - event.target.scrollTop <= clientHeight;
    if (scrollEnd && state.nextResults && !state.isLoadingMore) {
      setIsLoadingMore(true);
      const response = await getTweets({
        accessToken: state.token,
        query: parseQueryString(state.nextResults),
      });
      const { tweets, nextResults } = getTweetsUtil(response);
      setIsLoadingMore(false);
      setTweets({ tweets, nextResults });
    }
  };

  return (
    <StyledApp onScroll={handleScroll}>
      <TwitterLogo />
      {state.isLoadingMore && <SmallLoader />}
      {state.tweets.length ? (
        <Tweets>
          {state.tweets.map((tweet) => (
            <Tweet {...tweet} key={tweet.id} />
          ))}
        </Tweets>
      ) : (
        <Loader />
      )}
    </StyledApp>
  );
}

export default App;
