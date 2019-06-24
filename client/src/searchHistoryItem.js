import React from 'react';

const SearchHistoryItem = (props) => {
  return(
    <div>This is each searched item 
      <div>Searched User: {props.item.login}</div>
      <div>Score: {props.item.score}</div>
      <img src={props.item.avatar_url} alt='user image'/>
    </div>
  );
}

export default SearchHistoryItem;