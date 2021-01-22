import React from 'react';
import { useEffectOnce } from 'react-use';

import { useStore } from './store';
import { parseQueryString } from './utils';
import { getToken, getTweets } from './api';

import StyledApp from './App.styled';
import Logo from './components/Logo';
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
      const {
        data: { access_token: accessToken }
      } = await getToken();
      setToken(accessToken);
      const {
        data: {
          statuses: tweets,
          search_metadata: { next_results: nextResults }
        }
      } = await getTweets({ accessToken });
      setTweets({ tweets, nextResults });
    })();
  });

  const handleScroll = async event => {
    const clientHeight = parseInt(event.target.clientHeight * SCROLL_SCALE);
    const scrollEnd =
      event.target.scrollHeight - event.target.scrollTop <= clientHeight;
    if (scrollEnd && state.nextResults && !state.isLoadingMore) {
      setIsLoadingMore(true);
      const {
        data: {
          statuses: tweets,
          search_metadata: { next_results: nextResults }
        }
      } = await getTweets({
        accessToken: state.token,
        query: parseQueryString(state.nextResults)
      });
      setIsLoadingMore(false);
      setTweets({ tweets, nextResults });
    }
  };

  return (
    <StyledApp onScroll={handleScroll}>
      <Logo />
      <TwitterLogo />
      {state.isLoadingMore && <SmallLoader />}
      {state.tweets.length ? (
        <Tweets>
          <React.Fragment>
            {state.tweets.map(tweet => (
              <Tweet {...tweet} key={tweet.id} />
            ))}
          </React.Fragment>
        </Tweets>
      ) : (
        <Loader />
      )}
    </StyledApp>
  );
}

export default App;
