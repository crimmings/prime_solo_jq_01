$(document).ready(function() {



  $('form').on('submit', function(event) {




  var  data = $(this).serializeArray(); // turns form data into object
  /*  len = data.length,
    dataObj = {};
    $(data).each(function(i, field){
      dataObj[field.name] = field.value;

    });

for (i=0; i<len; i++) {
  dataObj[data[i].name] = data[i].value;
console.log(data[i].value);
};
*/

  data.forEach(function(elem) { //goes through content in object and assigns values
      var $div = $('<div>');
      var $p = $('<p>');
      var $li = $('<li>');
      var $ul = $('<ul>');
      var $btn = $('<button>You Are Fired</button>');


//switch statement to display elements, prob most inefficient way possible to do this
      switch (elem.name) {
        case "firstname":
          elem.name = "First Name";
          $li.text(elem.name + ":");
          $p.text(elem.value);
          $('#content').append($li);
          $('#content').append($p);
          break;
        case "lastname":
          elem.name = "Last Name";
          $li.text(elem.name + ":");
          $p.text(elem.value);
          $('#content').append($li);
          $('#content').append($p);
          break;
        case "employeenumber":
          elem.name = "Employee Number";
          $li.text(elem.name + ":");
          $p.text(elem.value);
          $('#content').append($li);
          $('#content').append($p);
          break;
        case "title":
          elem.name = "Title";
          $li.text(elem.name + ":");
          $p.text(elem.value);
          $('#content').append($li);
          $('#content').append($p);
          break;
        case "lastreviewscore":
          elem.name = "Last Review Score";
          if (elem.value === "5"){
            $li.text(elem.name + ": ");
            $p.text(elem.value).css('color', 'red');
            $('#content').append($li);
              $('#content').append($p);
          } else if (elem.value === "4"){
            $li.text(elem.name + ": ");
            $p.text(elem.value).css('color', 'blue');
            $('#content').append($li);
            $('#content').append($p);
          } else if (elem.value === "3"){
            $li.text(elem.name + ": ");
            $p.text(elem.value).css('color', 'green');
            $('#content').append($li);
            $('#content').append($p);
          } else if (elem.value === "2"){
            $li.text(elem.name + ": ");
            $p.text(elem.value).css('color', 'orange');
            $('#content').append($li);
            $('#content').append($p);
          } else {
            $li.text(elem.name + ": ");
            $p.text(elem.value).css('color', 'yellow');
            $('#content').append($li);
            $('#content').append($p);
            }
          break;
        case "salary":
          elem.name = "Salary";
          $li.text(elem.name + ": ");
          $p.text("$" + elem.value);
          $('#content').append($li);
          $('#content').append($p).append($btn);
          break;

      }


$('form')[0].reset();
event.preventDefault();


})





		});

});
