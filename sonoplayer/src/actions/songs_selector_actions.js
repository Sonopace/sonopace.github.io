import * as songs_selector from "./actions/songs_selector_actions"

export function selectSongs(songs){
  return{
    type: "SONGS",
    payload: songs 
      /*
	 {
	 songs[
	 {name: "firstsongs",path: "~/Music/test"},
	 {name: "firstsongs",path: "~/Music/test"}
	 ]
	 }
	 */
  }
}
