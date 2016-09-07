import { createStore, combineReducers }	 from "redux";

// We need a reducer
const playlistReducer	= function(state={songs: []}, action) {
  // no state mutation EVER!!
  switch (action.type){
    case "ADD":{

      state = {...state, songs: state.songs.concat(action.payload.songs)};

      console.log(state);
      return state 
    }
  }
  return state;
};


const reducers = combineReducers({
  playlist: playlistReducer
});

// We need a store 
const store = createStore(reducers);

// We need to subscribe before we dispatch inorder to catch it
store.subscribe(() => {
  console.log("store changed...", store.getState());
})

store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello1", artist: "adele1"}, {name:"intheend1", artist:"linkinpark1"}]}} );
store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello2", artist: "adele2"}, {name:"intheend2", artist:"linkinpark2"}]}} );
store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello3", artist: "adele3"}, {name:"intheend3", artist:"linkinpark3"}]}} );
store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello3", artist: "adele3"}, {name:"intheend3", artist:"linkinpark3"}]}} );
store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello3", artist: "adele3"}, {name:"intheend3", artist:"linkinpark3"}]}} );
store.dispatch(	{type: "ADD", payload: {songs: [{name: "hello3", artist: "adele3"}, {name:"intheend3", artist:"linkinpark3"}]}} );


console.log("my playlist");
var playlist = store.getState().playlist;
console.log(playlist);

for(var i = 0; i < playlist.songs.length; i++) {
  var obj = playlist.songs[i];
  console.log(obj.name);
  console.log(obj.artist);
}
