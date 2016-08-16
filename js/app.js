$(document).ready(function(){

  $("#login").click(function(){
    $("input").prop('required',true);
    if ($("#login_form").valid()) {
      var login_data = $("#login_form").serialize();
      $.ajax({
	type: "GET",
	// url: "http://api.sonopace.com/v1/spaces/auth",
	url: "http://localhost:8080/v1/spaces/auth",
	data: login_data,
	success: function(data){ 
	  console.log(data); 
	  //Cookies.set('access_token', data["access_token"]);
	  
	  Cookies.set('sonopace_id', data["id"]);
	  Cookies.set('sonopace_token', data["access_token"]);

	  console.log(Cookies.get('sonopace_id')); 
	  console.log(Cookies.get('sonopace_token')); 

	  console.log("hello"); 
	},
	dataType: "json"
      });
      return false;
    }
  });

$("#signup").click(function(){
    $("input").prop('required',true);
    if ($("#signup_form").valid()) {
      var signup_data = $("#signup_form").serialize();
      $.ajax({
	type: "POST",
	url: "http://localhost:8080/v1/spaces/signup",
	data: signup_data,
	success: function(data){ 
	  console.log(data); 
	  // Cookies.set('access_token', data["access_token"]);
	  Cookies.set('sonopace_id', data["id"]);
	  Cookies.set('sonopace_token', data["access_token"]);
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


