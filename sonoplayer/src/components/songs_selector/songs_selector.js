import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // do i really need it?
import { createStore } from 'redux';

import { playliststore } from './../../reducers/playlist';

var defaultState = {
  files: {}
};

// Add the actions here that we created in the previous steps...
function playlist(state, action) {
  // Add the reducer logic that we added in the previous steps...
}
var store = createStore(playlist, defaultState);


class SongsSelector extends Component {


  appendPlaylist(action){
    console.log("log: SongsSelector");
    //console.log(this.props.value.files);
    //
    var files = action.target.files;
    console.log(files);
  }

  render() {

    var  input_style = {
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden !important'
    };

    return (
	<div>
	<input style={input_style} type="file" id="input" name="files[]" accept="audio/*" multiple onChange={ this.appendPlaylist.bind(this) } />

	<ul>
	<li>{this.appendPlaylist.props}</li>
	<li>Tea</li>
	<li>Milk</li>
	</ul>

	</div>);
  }

};

export default SongsSelector;
