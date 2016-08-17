$(document).ready(function(){

  $("#login").click(function(){
    $("input").prop('required',true);
    if ($("#login_form").valid()) {
      var login_data = $("#login_form").serialize();
      $.ajax({
	type: "GET",
	// url: "http://api.sonopace.com/v1/spaces/session",
	url: "http://localhost:8080/v1/spaces/session",
	data: login_data,

	statusCode: {
	  200: function (response){
	    console.log(response); 
	    Cookies.set('sonopace_id', response["id"]);
	    Cookies.set('sonopace_token', response["access_token"]);
	    console.log(Cookies.get('sonopace_id')); 
	    console.log(Cookies.get('sonopace_token')); 

	    $("#session_container").hide();
	    $("#player_container").show();
	  },
	  401: function (response){
	    console.log(response); 
	    console.log("not authorized");
	    alert("try again");
	    $("#login_form").trigger('reset');
	  }
	},

	dataType: "json"

      });
      return false;
    }
  });

  $("#signup").click(function(){
    $("input").prop('required',true);
    $("#signup_form").validate({
      rules: {
	pass: { 
	  required: true,
	  minlength: 8,
	  maxlength: 15,
	} , 

	cfmpass: { 
	  equalTo: "#pass",
	  minlength: 8,
	  maxlength: 15
	}
      },
      messages:{
	password: { required:"the password is required"
	}
      }
    });
    if ($("#signup_form").valid()) {
      var signup_data = $("#signup_form").serialize();
      $.ajax({
	type: "POST",
	// url: "http://api.sonopace.com/v1/spaces/session",
	url: "http://localhost:8080/v1/spaces/session",
	data: signup_data,
	statusCode: {
	  201: function (response){
	    console.log(response); 
	    Cookies.set('sonopace_id', response["id"]);
	    Cookies.set('sonopace_token', response["access_token"]);
	    console.log(Cookies.get('sonopace_id')); 
	    console.log(Cookies.get('sonopace_token')); 

	    $("#session_container").hide();
	    $("#player_container").show();
	  },
	  409: function (response){
	    console.log(response); 
	    console.log("not authorized");
	    alert("try again");
	    $("#login_form").trigger('reset');
	  }
	},
	dataType: "json"
      });
      return false;
    }
  });


  $("#channel").click(function(){
    console.log(Cookies.get('sonopace')); 
    $.ajax({
      //url: "http://api.sonopace.com/v1/channels?access_token=" + Cookies.get('access_token'),
      // url: "http://localhost:8080/v1/channels?access_token=" + Cookies.get('access_token'),
      url: "http://localhost:8080/v1/channels?id=" + Cookies.get('sonopace_id') + "&access_token=" + Cookies.getJSON('sonopace_token'),
      //data: data,
      success: function(data){ 
	// get channel url
	console.log(Cookies.get('access_token'));
	console.log("use it to get the channel"); 
      },
      dataType: "json"
    });
    return false;


  });


});


// music player
var playing = false;
var audio = new Audio("http://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.ogg");

$('#player').click(function() {

  $('#player').toggleClass('glyphicon-play glyphicon-pause');

  playing = !playing;

  var animation = playing ? audio.play() : audio.pause();
  var animation = playing ? 'stop' : 'play';

  //$('#animate_to_' + animation).get(0).beginElement();

  // $('#player_info').text('click to ' + (playing ? 'stop' : 'play'));
  $('#player_info').text('song info');
});

// $(".play-button").click(function() {
//  $(this).toggleClass("paused");
//});
