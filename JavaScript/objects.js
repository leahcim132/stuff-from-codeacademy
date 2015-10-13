var friends = {};

friends.bill = { 
    firstName : "Bill",
    lastName : "Gates",
    number : "288-288-2882",
    address : ["1111 Apple suX Road","Cali","WA","11111"]
};

friends.steve = {
    firstName : "Steve",
    lastName : "Jobs",
    number : "888-888-8888",
    address : ["101 Wind0w$ $uX","India", "IN", "22222"]
};

var list = function(names) {
    for (var i in names){
        console.log(i);
    }   
}

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Bill");
