import React, { Component } from 'react';
//import './select_songs.css';
//import select_songs_local from './folder.svg';
//import select_songs_remote from './cloud.svg';
// <input className="" id='audio_file' type='file' accept='audio/*' />

const getSongs = (songs, filter) => {
  switch (filter) {
    case 'EMPTY':
      return todos
    case 'SELECTED':
	return todos.filter(t => t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    songs: getSongs(state.songs, state.visibilityFilter)
  }
}

class SongsSelector extends Component {
  // 
  //TODO use redux to update the state of the "playlist"
  //
  render() {
    return (
	<div>
	<h6> SELECT SONGS </h6>
	<input type="file" id="files" name="files[]" accept='audio/*' multiple />
	<a href=""  className="mdl-button mdl-shadow--2dp">
	HardDrive	
	</a>


	</div>
	);
    //	<div>
    //	<a href=""  className="mdl-button mdl-shadow--2dp">
    //	Cloud
    //	</a>
    //	</div>
  }
}

export default SongsSelector;
