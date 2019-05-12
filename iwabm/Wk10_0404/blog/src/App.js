import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts => {
        this.setState({
          posts: posts
        })
        console.log(this.state.posts)
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          welcome
        </header>
        <div className="Blog-container">
          {this.state.posts.map((post) => {
            return <div className="Blog-post">{post.title}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
