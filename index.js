//Subtraction buttom//
function sub(){
   var x = document.getElementById("num1").value;
   var y = document.getElementById("num2").value;
   var z = x - y;

   document.getElementById("screen").innerHTML=
   z;
}

//division button//
function div(){
   var x = document.getElementById("num1").value;
   var y = document.getElementById("num2").value;
   var z = x/y;

   document.getElementById("screen").innerHTML=
   z;
}

//multiplication button//
function mul(){
   var x = document.getElementById("num1").value;
   var y = document.getElementById("num2").value;
   var z = x*y;

   document.getElementById("screen").innerHTML=
   z;
}

//Addition button//
function sum(){
   var x = document.getElementById("num1").value;
   var y = document.getElementById("num2").value;
   var z = x - - y ;

   document.getElementById("screen").innerHTML=
   z;
}


//percentage button//
function per(){
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;
  var z = x * y/100

  document.getElementById("screen").innerHTML=
  z;
}




