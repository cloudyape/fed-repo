function greet(name) {
    return "HI " + name;
}

function callMe(greeting, wellbeing) {
    console.log(greeting + " " + wellbeing);
}

callMe(greet("Vinod"), "HOw are you");

/*
Prototype are of two types

1. Built In Protypes
2. Custom Protypes
*/

const myHunting = {
    name: "ANkit",
    greet() {
        console.log("HI " + this.name);
    }
}

const myWellBeing = {
    name: "Vinod",
    wellBing() {
        console.log("How are you");
    }
}

myHunting.__proto__ = myWellBeing;

myHunting.wellBing();