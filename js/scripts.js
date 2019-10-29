$(document).ready(function() {
  $("#form1").submit(function(event) {
    var personInput = $("input#person").val();
    var ageInput = $("input#age").val();
    var yearsOfExperianceInput = $("inpu#yearsOfExperiance").val();
    var languageInput = $("input#language").val();

        $(".person").text("name");
        $(".age").text("age");
        $(".yearsOfExperiance").text("yearsOfExperiance");
        $(".language").text("language");

    $("#choices").show();

    event.preventDefault();
  });
});
