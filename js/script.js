$(function() {
  
  console.log("ready");
  $("#input2").on("keyup",function() {
    print2();
  });
  
  // Makes the output draggable
  $("#output").draggable();

  function print() {
    $("#output").text("");
    
    var inputText = $("#input").val();
    
    console.log(inputText);
    
    //If the user enters nothing alert them
    if(inputText == "") {
      window.alert("You didnt enter anything");
    } else {
       $("#output").html('<p>' + inputText + '</p>');
    }
   
    $("#input").val("");
  }
  
  function print2() {
    var inputText2 = $("#input2").val();
     $("#output2").html('<p>' + inputText2 + '<p>');
  }
  
  $("#button").on('click', print);  

 });