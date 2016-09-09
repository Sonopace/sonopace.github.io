import React 		from 'react';
import ReactDOM 	from 'react-dom';
import App 		from './../components/app/App';
import Media 		from './../components/media/media';

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
ReactDOM.render( <Media />, document.getElementById('media') );
