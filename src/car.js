function Car(make, model, year, color, state, previousOwners,currentOwner, passengners){ 
  this.year = year;
  this.state = 'off';
  this.previousOwners = [ ];
  this.currentOwner = 'Manufacturer';
  this.passengers = [ ];


}



  // body...

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;