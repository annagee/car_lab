function Car(make, model, year, color, state, previousOwners,currentOwner, passengners){ 
  this.year = year;
  this.state = 'off';
  this.previousOwners = [ ];
  this.currentOwner = 'Manufacturer';
  this.passengers = [ ];


}



  // boby.....

Car.prototype.sale = function(newOwner){
  this.newOwner = "Charlie";
  this.previousOwners = ["Manufacturer"];
  this.currentOwner ="Charlie";
};


Car.prototype.paint = function(newColor){
  this.color = "Blue";
};

Car.prototype.start= function(start){
  this.state = "on";
  
};

 Car.prototype.off= function(currentstate){
  this.state = "off";
};

Car.prototype.pickUp= function(passengers){
  if (this.state === "on") {        
 this.passengers = ["john"];
 };
}

Car.prototype.dropOff= function(passengers){
  if(this.state === 'on') {
    this.passengers = [ ];
  };
}



module.exports=Car;