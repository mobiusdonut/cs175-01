"use strict";
$(document).ready(function() {

    var scoreStrings = [];
    var scores = [];

    var displayScores = function () {
        var totalScore = 0;
    		var numberOfScores = 0;
    		var averageScore = 0;

        for (var i = 0; i < scores.length; i++) {
            totalScore += scores[i];
        }
        numberOfScores = scores.length;
        averageScore = totalScore / numberOfScores;
        $("#average_score").val(averageScore);

        $("#scores").val("");
        for (var i = 0; i < scores.length; i++) {
            $("#scores").val($("#scores").val() + scoreStrings[i]);
        }
    };

    $("#add_button").click(function() {
        if ($("#first_name").val() == "" || $("#last_name").val() == "" || parseFloat($("#score").val()) > 100 || parseFloat($("#score").val()) < 0) {
      		alert("You must enter a name and a valid score.");
      	}

        else {
          var scoreNumber = parseFloat($("#score").val() );
          var scoreString = $("#last_name").val() + ", " +
                            $("#first_name").val() + ": " +
                            $("#score").val() + "\n";

          scoreStrings.push(scoreString)
          scores.push(scoreNumber);
      	}

        displayScores();

        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()

    $("#clear_button").click(function() {
        scoreStrings = [];
        scores = [];

        displayScores();

        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
        $("#average_score").val("");
    }); // end click()

    $("#sort_button").click(function() {
		    scoreStrings.sort();
        displayScores();
    }); // end click()

    $("#first_name").focus();
}); // end ready()
