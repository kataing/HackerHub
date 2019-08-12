import React from 'react';

const User = (props) => {
    return(
      <div className='search-item'>
        <img src={props.avatar_url} alt='user image' />
        <div>Username: {props.login}</div>
        <div>Score: {Math.round(props.score)}</div>
      </div>
    )
}

export default User;