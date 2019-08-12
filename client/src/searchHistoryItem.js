import React from 'react';

const SearchHistoryItem = (props) => {
  return(
    <div className='search-item'>
      <img src={props.item.avatar_url} alt='user image'/>
      <div>User: {props.item.login}</div>
      <div>Score: {Math.round(props.item.score)}</div>
    </div>
  );
}

export default SearchHistoryItem;