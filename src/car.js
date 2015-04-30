function Car(make, model, year, color, state, previousOwners,currentOwner){ 
  this.year = year;
  this.state = 'off';
  this.previousOwners = [ ];
  this.currentOwner = 'Manufacturer';

}



  // body...

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;