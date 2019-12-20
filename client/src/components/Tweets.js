import styled from 'styled-components';

const Tweets = styled.div`
  width: 598px;
  margin: auto;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid #38444d;
  border-right: 1px solid #38444d;

  @media (max-width: 767.98px) {
    width: auto;
    padding-left: 0;
    padding-right: 0;
    border-left: none;
    border-right: none;
  }
`;

export default Tweets;
