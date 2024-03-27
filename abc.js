// Classes / Functions / Inheritance /Polymorphism - the concept in which one class or one function calls up with diiferent values

//Method OVerloading

function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;

    if(arguments.length == 1) {
        this.breadth = length;
    }
}

Rectangle.prototype.area = function() {
    return this.length * this.breadth;
} //Basic Prototype

let getRectangle = new Rectangle(3,4);
console.log(getRectangle.area());

let getSq = new Rectangle(3);
console.log(getSq.area());
