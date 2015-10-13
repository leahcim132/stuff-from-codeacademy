var user = prompt("Are you ready to play, my friend.").toUpperCase();
var month = 2;
var boy = true;

switch(user){
    case "YES":
        if(month == 1 || boy == true){
            console.log("Whats up? boy");
        }
        else{
            console.log("it is not January");
        }
        console.log("Great, let's start.");
        break;
    
    case "NO":
        if(month == 2 && boy == true){
            console.log("boy 2");
        }
        console.log("Ok.... bye.");
        break;
    
    case "MAYBE":
        console.log("I take that as a yes my friend.");
        break;
        
    default:
        console.log("what?");
    

}
