import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {

	state = {
		songs: []
	}

componentDidMount(){
	fetch('http://localhost:4000/users/1/songs')
	.then(res => res.json())
	.then(response=> this.setState({
		songs:response
	 })
	)
}
  render() {
  	const {songs} = this.state
  	console.log(this.state.songs)
    return (
      <div className="app">
        <Header />
        <KaraokeContainer songs={songs}/>
      </div>
    );
  }
}

export default App;
