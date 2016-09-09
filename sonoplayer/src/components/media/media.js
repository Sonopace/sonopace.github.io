import React, { Component } 	from 'react';
import ReactDOM 		from 'react-dom'; // do i really need it?
import {Howl} 			from 'howler'; 

import { playlist } from './../../reducers/playlist';

class Media extends Component {

  appendPlaylist(action){

    console.log("log: media");

    var files 	= action.target.files;
    var urls = [];    

    for(var i = 0; i < files.length; i++) {
      var file = files[i];
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);

      console.log("creating ObjectUrl for " + file.name );
      var  url = (URL.createObjectURL(file));
      console.log();
      var sound = new Howl({
	//src: [url, "http://goldfirestudios.com/proj/howlerjs/sound.ogg"],
	src: ["http://goldfirestudios.com/proj/howlerjs/sound.ogg"],
      }).play();

      // Uploading
      var xhr = new XMLHttpRequest();
      // xhr.open("post", "http://api.sonopace.com/v1/songs", true);
      xhr.open("post", "http://localhost:9292/v1/songs?file=" + {file}, true);

      // Set appropriate headers
      // xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.setRequestHeader("X-File-Name", file.name);
      xhr.setRequestHeader("X-File-Size", file.size);
      xhr.setRequestHeader("X-File-Type", file.type);

      xhr.send(file);

    }; // loop over files

  }; // appendPlaylist(action);

  render() {

    var  input_style = {
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
  };
};

export default Media;
