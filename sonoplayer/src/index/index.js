import React 		from 'react';
import ReactDOM 	from 'react-dom';
import App 		from './../components/app/App';
import SongsSelector 	from './../components/songs_selector/songs_selector';

import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
    );

/* 
 * { 
 * songs[
 * 	{
 * 		name: "songa",
 * 		path: "/music/songa.mp3"
 * 		},
 *	{
 * 		name: "songb",
 * 		path: "/music/songb.mp3"
 * 		}
 * 	]
 *}
 */
ReactDOM.render(
    <SongsSelector />,
    document.getElementById('songs_selector')
    );
