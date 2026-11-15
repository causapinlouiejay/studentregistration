var form = document.getElementById("myForm");
var dobInput = document.getElementById("dob");
var ageDisplay = document.getElementById("ageDisplay");
var age = 0;

dobInput.onchange = function () {
  var birthYear = new Date(dobInput.value).getFullYear();
  var currentYear = new Date().getFullYear();
  age = currentYear - birthYear;
  ageDisplay.innerText = "Age: " + age;
};

form.onsubmit = function (event) {
  event.preventDefault(); 

  var fullName = document.getElementById("fullName").value;
  var studentId = document.getElementById("studentId").value;
  var emergencyName = document.getElementById("emergencyName").value;
  var instEmail = document.getElementById("instEmail").value;
  var persEmail = document.getElementById("persEmail").value;
  var mobile = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  var units = document.getElementById("units").value;
  var gwa = document.getElementById("gwa").value;
  var program = document.getElementById("program").value;
  var notes = document.getElementById("notes").value;
  var agree = document.getElementById("agree").checked;

  if (age < 16) {
    alert("You must be at least 16 years old.");
    return;
  }

  if (!instEmail.endsWith(".edu") && !instEmail.endsWith(".edu.ph")) {
    alert("Institutional email must end with .edu or .edu.ph");
    return;
  }

  if (instEmail == persEmail) {
    alert("Institutional and Personal email cannot be the same.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  var labs = document.querySelectorAll('input[name="lab"]:checked');
  if (labs.length == 0) {
    alert("Please select at least 1 lab course.");
    return;
  }

  var selectedLabs = "";
  for (var i = 0; i < labs.length; i++) {
    selectedLabs = selectedLabs + labs[i].value + " ";
  }

  var file = document.getElementById("myFile").files[0];
  if (file.size > 2000000) {
    alert("File is too big! Maximum size is 2MB.");
    return;
  }

  var fileName = file.name.toLowerCase();
  if (!fileName.endsWith(".png") && !fileName.endsWith(".jpg") && !fileName.endsWith(".jpeg") && !fileName.endsWith(".pdf")) {
    alert("Only PNG, JPG, JPEG, or PDF files are allowed.");
    return;
  }

  if (agree == false) {
    alert("You must agree to the School Terms.");
    return;
  }

  var year = document.querySelector('input[name="year"]:checked').value;
  var status = document.querySelector('input[name="status"]:checked').value;
  var output = document.getElementById("output");
  output.innerHTML =
    "<p><b>Full Name:</b> " + fullName + "</p>" +
    "<p><b>Student ID:</b> " + studentId + "</p>" +
    "<p><b>Emergency Contact:</b> " + emergencyName + "</p>" +
    "<p><b>Institutional Email:</b> " + instEmail + "</p>" +
    "<p><b>Personal Email:</b> " + persEmail + "</p>" +
    "<p><b>Mobile:</b> " + mobile + "</p>" +
    "<p><b>Date of Birth:</b> " + dobInput.value + " (Age: " + age + ")</p>" +
    "<p><b>Program:</b> " + program + "</p>" +
    "<p><b>Year Level:</b> " + year + "</p>" +
    "<p><b>Status:</b> " + status + "</p>" +
    "<p><b>Units:</b> " + units + "</p>" +
    "<p><b>GWA:</b> " + gwa + "</p>" +
    "<p><b>Lab Courses:</b> " + selectedLabs + "</p>" +
    "<p><b>File Uploaded:</b> " + file.name + "</p>" +
    "<p><b>Notes:</b> " + notes + "</p>";

  document.getElementById("myModal").style.display = "block";
};

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}