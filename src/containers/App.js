import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

const endpoint = 'http://localhost:4000/users/2/songs'
class App extends Component {
  
  state = {
    songs: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/users/2/songs')
    .then(response => response.json())
    .then(songsJSON => 
      this.setState({
        songs: songsJSON
      })
    )
  }
// if like is pressed then do this

  handleLikeIncrement = (object) => {
    console.log(object)
    const id = object.id
    const copylikes = object.likes

    // componentDidMount(){
      fetch(endpoint + '/' + id,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "likes": copylikes + 1
        })
      })
      .then(response => response.json())
      .then(console.log('done'))
    // }
  }

  handleDislikeIncrement = (object) => {
    console.log(object)
    const id = object.id
    const copydislikes = object.dislikes

    // componentDidMount(){
      fetch(endpoint + '/' + id,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "dislikes": copydislikes + 1
        })
      })
      .then(response => response.json())
      .then(console.log('done'))
    // }
  }
  
  

  //patch here to change the likes?

 

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer  handleDislikeIncrement={this.handleDislikeIncrement} handleLikeIncrement={this.handleLikeIncrement} songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
