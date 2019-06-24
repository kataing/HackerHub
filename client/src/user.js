import React from 'react';

const User = (props) => {
    return(
      <div>
        <img src={props.avatar_url} alt='user image' />
        <div>Username: {props.login}</div>
        <div>Score: {props.score}</div>
      </div>
    )
}

export default User;