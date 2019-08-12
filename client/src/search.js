import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.searchGithub(this.state.query);
    this.setState({
      query: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <h2>Search for a user</h2>
          <input className='searchbar' onChange={this.handleOnChange} value={this.state.query}></input>
          <button className='submit' onClick={this.handleOnSubmit}>Search</button>
        </form>
      </div> 
    )
  }
  
}

export default Search;