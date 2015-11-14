$(document).ready(function() {



  $('form').on('submit', function(event) {


  var  data = $(this).serializeArray(); // turns form data into object
    console.log(data);


  data.forEach(function(elem) { //goes through content in object and assigns values
      var $div = $('<div>');
      var $p = $('<p>');
      var $btn = $('<button>You Are Fired</button>');


//switch statement to display elements, prob most inefficient way possible to do this
      switch (elem.name) {
        case "firstname":
          elem.name = "First Name";
          $p.text(elem.name + ": " + elem.value);
          $('#content').append($p);
          break;
        case "lastname":
          elem.name = "Last Name";
          $p.text(elem.name + ": " + elem.value);
          $('#content').append($p);
          break;
        case "employeenumber":
          elem.name = "Employee Number";
          $p.text(elem.name + ": " + elem.value);
          $('#content').append($p);
          break;
        case "title":
          elem.name = "Title";
          $p.text((elem.name) + ": " + elem.value);
          $('#content').append($p);
          break;
        case "lastreviewscore":
          elem.name = "Last Review Score";
          if (elem.value === "5"){
            $p.text(elem.name + ": " + elem.value).css('color', 'red');
              $('#content').append($p);
          } else if (elem.value === "4"){
            $p.text(elem.name + ": " + elem.value).css('color', 'blue');
              $('#content').append($p);
          } else if (elem.value === "3"){
            $p.text(elem.name + ": " + elem.value).css('color', 'green');
              $('#content').append($p);
          } else if (elem.value === "2"){
            $p.text(elem.name + ": " + elem.value).css('color', 'orange');
              $('#content').append($p);
          } else {
            $p.text(elem.name + ": " + elem.value).css('color', 'yellow');
              $('#content').append($p);
            }
          break;
        case "salary":
          elem.name = "Salary";
          $p.text(elem.name + ": " + "$" + elem.value);
          $('#content').append($p).append($btn);
          break;

      }


$('form')[0].reset();
event.preventDefault();


})
})
});
