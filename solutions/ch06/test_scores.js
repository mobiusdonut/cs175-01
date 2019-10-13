var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var namescore = [{name: "Ben", score: 88}, {name: "Joel", score: 98}, {name: "Judy", score: 77}, {name: "Anne", score: 88}]

var $ = function (id) { return document.getElementById(id); };

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
	let th = document.createElement("th");
	let text = document.createTextNode("Name");
	th.appendChild(text);
	row.appendChild(th);
	let th2 = document.createElement("th");
	let text2 = document.createTextNode("Score");
	th2.appendChild(text2);
	row.appendChild(th2);
}
function generateTable(table) {
  for (var i = 0; i < names.length; i++) {
    let row = table.insertRow();
		let cell = row.insertCell();
		let text = document.createTextNode(names[i]);
		cell.appendChild(text);
		let cell2 = row.insertCell();
		let text2 = document.createTextNode(scores[i]);
		cell2.appendChild(text2);
  }
}

var displayScores = function() {
	let table = $("scores_table");
	table.innerHTML = "";
	generateTableHead(table);
	generateTable(table);
}

var displayResults = function() {
	let results = $("results");
	results.innerHTML = "";
	var sum = 0;
	for (var i = 0; i < scores.length; i++) {
		sum += scores[i];
	}
	var para = document.createElement("p");
	var textnode = document.createTextNode("Average score = " + sum / scores.length);
	para.appendChild(textnode);
	$("results").appendChild(para);
	var max = 0;
	var maxname = "";
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] > max) {
			max = scores[i];
			maxname = names[i];
		}
	}
	var para2 = document.createElement("p");
	var textnode2 = document.createTextNode("High score = " + maxname + " with a score of " + max);
	para2.appendChild(textnode2);
	$("results").appendChild(para2);
}

var addScore = function() {
	if ($("name").value == "" || parseFloat($("score").value) > 100 || parseFloat($("score").value) < 0) {
		alert("You must enter a name and a valid score.");
	}
	else {
		names.push($("name").value);
		scores.push(parseFloat($("score").value));
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};
