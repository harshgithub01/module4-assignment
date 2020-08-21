(function(window) {
	var speakWord = "Good Bye";
	var speakBye = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.speakBye = speakBye;

})(window);