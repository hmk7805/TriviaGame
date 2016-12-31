//  Interval Demonstration
//  Set our number counter to 100.
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

// //  When the done button gets clicked, run the stop function.
// $("#done").on("click", stop);

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #timer tag.
  $("#timer").html(number);


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

//  Execute the run function.
run();
