import React, { Component } from 'react';
//import './select_songs.css';
//import select_songs_local from './folder.svg';
//import select_songs_remote from './cloud.svg';
// <input className="" id='audio_file' type='file' accept='audio/*' />

class SongsSelector extends Component {
  // 
  //TODO use redux to update the state of the "playlist"
  //
  render() {
    return (
	<div>

	<div>
	<h2>select localdrive songs</h2>
	<input type="file" id="files" name="files[]" multiple />
	</div>

	<div>
	<h2>select cloud songs</h2>
	</div>

	</div>
	);
  }
}

export default SongsSelector;
