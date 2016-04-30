
/*
  Create a function named Car with one property named `manufactured_date`
 */

//Capitalized treats it as a "class"
//We are going to use this function as a construstor
function Car() {
  this.manufactured_date = new Date();
}



/*
  Create a function named Make. 
  Set its prototype to the Car function.
  Define a property `manufacaturer` with a default value of empty string.
 */

function Make() {
  this.manufacturer = "";
}

Make.prototype = new Car();
Make.prototype.setManufacturer = function(company) {
  this.manufacturer = company;
}

/*
    Create a function named Model. 
    Set its prototype to the Make function.
    Define a property `modelName` with a default value of empty string.
*/

function Model(modelName) {
  this.modelName = modelName;
  this.color = "";
}

Model.prototype = new Make();
Model.prototype.setColor = function(color) {
  this.color = color;
}

/*
    Create a new Make object - your favorite one (e.g. Mini)
*/

var mini = new Make();
mini.setManufacturer("BMW");
console.log("mini", mini);



/*
    Create a new Model object of your favorite model (e.g. Clubman)
*/

var hondaCivic = new Model("civic");
console.log("honda", hondaCivic);




/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new objects for each of your three favorite cars.
*/



var Corolla = function (color) {
  this.setManufacturer("Toyota");
  this.setColor(color)
}

Corolla.prototype = new Model("Corolla")

var redCar = new Corolla("red");
// redCar.setManufacturer("Toyota")
// redCar.setColor("red");

var blueCar = new Model("Corolla");
blueCar.setManufacturer("Toyota")
blueCar.setColor("blue");

var greenCar = new Model("Corolla");
greenCar.setManufacturer("Toyota")
greenCar.setColor("green")

console.log(redCar, blueCar, greenCar);







/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

var honda = new Make();
honda.setManufacturer("Honda");

var redCivic = new Model("Civic");
redCivic.setManufacturer("Honda");
redCivic.setColor("red");

var blueCRV = new Model("CRV");
blueCRV.setManufacturer("Honda");
blueCRV.setColor("blue");

var blackAztec = new Model("Aztec");
blackAztec.setManufacturer("Pontiac");
blackAztec.setColor("black");

console.log(redCivic, blueCRV, blackAztec);





