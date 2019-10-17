var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
  if (parseInt($("cents").value) > 99 || parseInt($("cents").value) < 0 || isNaN(parseInt($("cents").value))) {
    alert("Enter a number between 0 and 99.");
  }
  else {
    makeChange(parseInt($("cents").value));
  }
};

var makeChange = function(cents) {
  var quarters = (cents - cents % 25)/25;
  cents = cents - quarters * 25;
  var dimes = (cents - cents % 10)/10;
  cents = cents - dimes * 10;
  var nickels = (cents - cents % 5)/5;
  cents = cents - nickels * 5;
  var pennies = cents;
  $("quarters").value = quarters;
	$("dimes").value = dimes;
  $("nickels").value = nickels;
	$("pennies").value = pennies;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
	  $("cents").focus();
};
