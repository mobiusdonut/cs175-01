$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
	var phonePattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

	// move the focus to the first text box
	$("#arrival_date").focus();

	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;

			// TODO: validate the requested arrival date
			var date = $("#arrival_date").val().trim();
			if (email == "") {
				$("#arrival_date").next().text("This field is required.");
			  isValid = false;
			}
			else if (!datePattern.test(date) ) {
				$("#arrival_date").next().text("Must be a valid date in the form MM/DD/YYYY.");
				isValid = false;
			}
			else {
			  $("#arrival_date").next().text("");
			}
			$("#arrival_date").val(date);

			// TODO: validate the number of nights
			var age = $("#nights").val();
			if (isNaN(age)) {
				$("#nights").next().text("This field must contain a numeric value.");
				isValid = false;
			}
			$("#nights").val(age);

			// TODO: validate the name entry
			if (!$("#name").attr("disabled")) {
				var name = $("#name").val().trim();
				if (name == "") {
					$("#name").next().text("This field is required.");
				  isValid = false;
				}
				else {
				  $("#name").next().text("");
				}
			  $("#name").val(name);
			}

			// TODO: validate the email entry with a regular expression
			var email = $("#email").val().trim();
			if (email == "") {
				$("#email").next().text("This field is required.");
			  isValid = false;
			}
			else if (!emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			}
			else {
			  $("#email").next().text("");
			}
			$("#email").val(email);

			// TODO: validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") {
				$("#phone").next().text("This field is required.");
			  isValid = false;
			}
			else if (!phonePattern.test(phone) ) {
				$("#phone").next().text("Must be a valid phone number in the form XXX-XXX-XXXX.");
				isValid = false;
			}
			else {
			  $("#phone").next().text("");
			}
			$("#phone").val(phone);

			// prevent the submission of the form if any entries are invalid
			if (isValid == false) {
				event.preventDefault();
			}
		}
	);	// end submit
}); // end ready
