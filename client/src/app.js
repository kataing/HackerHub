import React from 'react';
import axios from 'axios';

import User from './user.js';
import Search from './search.js';
import Followers from './followers.js'
import SearchHistory from './searchHistory.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      score: null,
      avatar_url: null,
      history: []
    }
    this.searchGithub = this.searchGithub.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  };

  // search users using github api
  searchGithub(query) {
    axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(({ data }) => {
        const { login, score, avatar_url } = data.items[0];
        this.setState({ login, score, avatar_url }, () => {
        })
        this.post({ login, score, avatar_url });
      })
      .catch(() => { console.log('We were not able to retrieve github data') })
  }

  // get info from database
  get() {
    axios
      .get('/users')
      .then(({ data }) => {
        this.setState({ history: data }, () => {
          console.log(this.state.history);
        })
      })
  }

  // post github data to database
  post(githubData) {
    const { login, score, avatar_url } = githubData;
    axios
      .post('/users', { login, score, avatar_url })
      .then(() => { 
        console.log('Your axios posted')
        this.get();
      })
      .catch(() => { console.log('Your request was not completed') })
  }

  update() {
    // update database
  }

  delete() {
    // delete from databse
  }

  render() {
    return (
      <div>
        <h1>Welcome to HackerHub</h1>
        <Search searchGithub={this.searchGithub}/>
        <User login={this.state.login} score={this.state.score} avatar_url={this.state.avatar_url} />
        {/* <Followers /> */}
        <SearchHistory history={this.state.history}/>
      </div>

    )
  };

  componentDidMount() {
    this.searchGithub('kristina taing');
  }
}

export default App;