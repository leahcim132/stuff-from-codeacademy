var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
    totalDamage += damageThisRound;
    
    if(youHit === 1){
        if(totalDamage >= 4){
            console.log("You slayed the dragon sonnn.");
            slaying = false;
        }
        
        else{
            youHit = Math.floor(Math.random() * 2);
        }
        console.log("Good job. He dun goof.");
    }
    else{
        console.log("You dead son.");
    }
    slaying = false;   
}   