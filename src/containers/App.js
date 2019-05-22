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

changePlays = (id) => {
const newSongs = this.state.songs.map(song=> {
	if (song.id === id) {
		const copySong = {...song}
		console.log(copySong.plays)
		copySong.plays += 1
		return copySong
	} else {
		return song
	} 
})
 this.setState({
	songs:newSongs
})
}

changeLikes = (id,likes,way) => {
	console.log("Change",id,"in this direction", way,"current",likes)

	// fetch(`http://localhost:4000/users/1/songs/${id}/like`,
 //    {
 //        method: 'PATCH',
 //        headers: {
 //            'Content-Type': 'application/json',
 //            Accept: 'application/json'
 //        },

 //        body: JSON.stringify({'likes': newLikes})
 //    }).then((res) => {
 //        return res.json();
 //    })
}

  render() {
  	const {songs} = this.state
  
    return (
      <div className="app">
        <Header />
        <KaraokeContainer changeLikes={this.changeLikes}changePlays={this.changePlays}songs={songs}/>
      </div>
    );
  }
}

export default App;
