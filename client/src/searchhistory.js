import React from 'react';
import SearchHistoryItem from './searchHistoryItem.js';

const SearchHistory = (props) => {
  return(
    <div>
      <h3>Your Search History</h3>
      { props.history.map((item, key) => {
        return(
          <SearchHistoryItem key={key} item={item}/>
        );
      }) }
    </div>
  );
}

export default SearchHistory;