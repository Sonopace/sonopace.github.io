import React 		from 'react';
import ReactDOM 	from 'react-dom';
import App 		from './../app/App';
import SongsSelector 	from './../songs_selector/songs_selector';

import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
    );


ReactDOM.render(
    <SongsSelector />,
    document.getElementById('songs_selector')
    );

