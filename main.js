$(document).ready(function() {
  $(".mod").hide();
  $("#next").hide();
  $(".mod").click(function(){
    $(".mod").fadeOut("fast");
  })
  
  $("#next").click(function(){
    document.location = next;
  })
})

function setGeese(amt) {
  geese = amt;
  $("#gc").children(".statamt").html("" + geese);
}