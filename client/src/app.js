import React from 'react';
import axios from 'axios';

// import User from './user.js';
// import Search from './search.js';
// import Followers from './followers.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      users: []
    }
    this.getGithub = this.getGithub.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  };

  getGithub() {
    // get information from gitHub API
    var query = 'arthur kim';
    axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(({ data }) => {
        const { login, score, avatar_url } = data.items[0];
        this.post({ login, score, avatar_url });
      })
  }

  get() {
    axios
      .get('/users')
      .then(({ data }) => {
        console.log(data);
        this.setState({
          users: data,
          text: data[6].username
        })
      })
  }

  post(githubData) {
    const { login, score, avatar_url } = githubData;
    axios
      .post('/users', { login, score, avatar_url })
      .then(() => { console.log('Your axios posted') })
      .catch(() => { console.log('Your request was not completed')})
  }

  update() {
    // update database
  }

  delete() {
    // delete from databse
  }

  render() {
    return (
      <div>App has rendered: This is from the database: {this.state.text}</div>
      // <User />
      // <Search />
      // <Followers />
    )
  };

  componentDidMount() {
    // do stuff
    // this.getGithub();
    // this.post();
    this.get();
  }
}

export default App;