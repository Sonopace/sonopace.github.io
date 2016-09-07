import React, { Component } from 'react';

class SongsSelector extends Component {

  appendPlaylist(action){
    console.log(name);
    console.log("logging...");
    console.log(this.props);
    console.log(action.target.files);
  }

  render() {
    return (
	<div>
	<h6> SELECT SONGS </h6>
	<input type="file" id="input" name="files[]" accept="audio/*" multiple onChange={ this.appendPlaylist.bind(this) } />


	<div  className="mdl-button mdl-shadow--2dp" onClick={ this.appendPlaylist.bind(this) } > HardDrive </div>
	</div>);
  }

};

export default SongsSelector;
