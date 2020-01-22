 $(document).ready(function() {
    $("form.counter").submit(function(event) {
    event.preventDefault();  
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    console.log(countBy);

    for (var index = 0; index <= countTo; index += countBy) {
       $("ul").append("<li>" + index + "</li>");


 
    }

 });
});

