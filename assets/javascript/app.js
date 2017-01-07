//  The stop function
//  Clears our intervalId
//  We just pass the name of the interval
//  to the clearInterval function.
//  Execute the run function.
$(document).ready(function(){
	
	//the questions and score card should be hidden on load
	reset();
	function reset() {
		number = 30;
		$("#questionContent").hide(0);
		$("#scoreCard").hide(0);
		console.log("loaded"); 
	}
	var number = 30;
	var intervalId;
	
	//on click, timer countdown starts
	$("#beginBtn").click(function(){
		console.log("click received");
		timerRun();
		$("#begin").hide(0);
		$("#questionContent").show(0);
		
	});
	//on click timer countdown stops, questions hide, Score shows and questions hide
	//NEED: function for score keeping needs to run
	$("#doneBtn").click(function(){
		stop();
	    scoreObj.calc()
		$("#scoreCard").show();
		$('#allDone').html("All Done!");
		$("#questionContent").hide();
	});
	//timerRun begins the decrement
	function timerRun() {
	  intervalId = setInterval(decrement, 1000);
	}
	//decrement lowers the number, posts to DOM, makes alert to the user and clears the interval 
	function decrement() {
	  number--;
	  $("#timer").html(number);
	  //if the timer runs out, stop the timerRun, alert time up, hide questions, show score

	  if (number === 0) {
	    stop();
	    scoreObj.calc()
	    $("#scoreCard").show();
	    $('#timeUp').html("Time Up!");
		$("#questionContent").hide();
	  }
	}
	//stops the timer interval
	function stop() {
	  clearInterval(intervalId);
	}

	var scoreObj = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		calc: function(){
			var correctAns = ["humerus", "clavicle", "femur", "tibia"]
			var userAns = [];
			var userAns = [$('input[name="humerus"]:checked').val(), 
			$('input[name="clavicle"]:checked').val(), 
			$('input[name="femur"]:checked').val(), 
			$('input[name="tibia"]:checked').val()]
			console.log("1: " + userAns[1] + " 2: " + userAns[2] + " 3: " + userAns[3] + " 4: " + userAns[4])
			for (var i = 0; i < userAns.length; i++) {
				if (userAns[i] === undefined){
					scoreObj.unanswered++;
				}else if (userAns[i] !== correctAns[i]) {
					scoreObj.incorrect++;
				}else if (userAns[i] === correctAns[i]){
					scoreObj.correct++;
				}
			};
			$('#correct').html('Correct: ' + scoreObj.correct)
			$('#incorrect').html('Incorrect: ' + scoreObj.incorrect)
			$('#unanswered').html('Unanswered: ' + scoreObj.unanswered)

		}
	}

});


