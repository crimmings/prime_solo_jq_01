$(document).ready(function() {
var i = 0;//global variable to count <span's>added with new employee

$('form').on('submit', function(event) {

  data = $(this).serializeArray();
  event.preventDefault();
  console.log(data);

var $container = $('<span>');


for (var j = 0; j < data.length; j++){//iterate through data.serializeArray

      var elem = data[j];
      var $p =$('<p>');
      var $btn = $('<button>Bye-Bye</button>');


//switch statement to display elements, prob most inefficient way possible to do this
   switch (elem.name) {
        case "firstname":
          elem.name = "First Name";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "lastname":
          elem.name = "Last Name";
          $p.text(elem.name + ": " +  elem.value);
          $($container).append($p);
          break;
        case "employeenumber":
          elem.name = "Employee Number";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "title":
          elem.name = "Title";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "lastreviewscore":
          elem.name = "Last Review Score";
          if (elem.value === "5"){
            $p.text(elem.name + ": " +  elem.value).css('color', 'pink');
            $($container).append($p);
          } else if (elem.value === "4"){
            $p.text(elem.name + ": " +  elem.value).css('color', '#00FF00');
           $($container).append($p);
          } else if (elem.value === "3"){
            $p.text(elem.name + ": " +  elem.value).css('color', '#00FFFF');
            $($container).append($p);
          } else if (elem.value === "2"){
            $p.text(elem.name + ": " +  elem.value).css('color', '#FF0000');
            $($container).append($p);
          } else {
            $p.text(elem.name + ": " +  elem.value).css('color', '#FF00FF');
            $($container).append($p);
            }
          break;
        case "salary":
          elem.name = "Salary";
          $p.text(elem.name + ": " +  elem.value);
          $($container).append($p);
          $($container).append($btn);
          break;


      }//switch

    } //for loop

 $('form')[0].reset();


$($btn).on("click", function() {
  $(this).parent().remove();
});

$container.appendTo('#employeelist');//attached to global i variable to assign unique ID to each new employee span
$container.attr("id", 'elem' + i );//didn't figure out how to style and assign for an unpredictable number of employees
i++;



})//submit



}) //doc ready
