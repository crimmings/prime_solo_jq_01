$(document).ready(function() {

  var theTemplateScript = $('#employeescript').html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  //var $p =$('<p>');
  var $btn = $('<button>Bye-Bye</button>');

//Employee constructor
function Employee (firstName, lastName, employeeNum, title, lastReview, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNum = employeeNum;
  this.title = title;
  this.lastReview = lastReview;
  this.salary = salary;
}

// array that stores employee objects
var dataArray = [];

//handlebars

$('form').on('submit', function(event) {

  event.preventDefault();

//serialize data from form
  data = $(this).serializeArray();
  console.log(data);

//create array of only value properties return from serialized array
//forEach(): executes a provided function once per array element.

/* data.forEach(function(elem){
  dataArray.push(elem.value);
  console.log(elem);
  console.log(dataArray);
});
*/
  //var elem = data[j];
//array holds new instances of Employee objects assigning values from dataArray elements
var employee = new Employee(data[0].value, data[1].value, data[2].value, data[3].value,
                                              data[4].value, data[5].value);

console.log(employee);

//push employee objects in an array of employee objects
dataArray.push(employee);

var theData = {employee: dataArray};

var compiledHTML = theTemplate(theData);


$('#employeestable').append(compiledHTML);


/*
var $container = $('<span>');


for (var j = 0; j < data.length; j++){//iterate through data.serializeArray


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
          $p.text(elem.name + ": " +  "$" + elem.value);
          $($container).append($p);
          $($container).append($btn);
          break;


      }//switch

    } //for loop
*/

 $('form')[0].reset();


$($btn).on("click", function() {
  $(this).parent().remove();
});




});//submit


}); //doc ready
