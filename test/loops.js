/*jshint multistr:true */

var text = "Hello my name is bob";
var myName = "Millo";
var hits = [];

for(var i = 0 ; i < text.length; i++)
{
    if (myName[0] === 'M'){
        for(var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

if(hits === []){
    console.log("Your name wasn't found!");
}

else{
    console.log(hits);   
}  