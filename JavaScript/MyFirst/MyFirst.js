var today = new Date();  // Date(); is a Class.
var hourNow = today.getHours(); //getHours is a method.
var greeting ;

if(hourNow > 20){
	greeting = 'Good Night... Happy Sleep';
} else if(hourNow > 18){
	greeting = 'Good Evening';
} else if(hourNow > 12){
	greeting = 'Good AfterNoon';
} else if (hourNow > 0){
	greeting = 'Great Morning';
} else {
	greeting = 'Welcome...!' ;
}
document.write('<h3>'+greeting+'</h3>'); 