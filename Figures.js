// Code to calculate the figure's perimeter and area.

// Square.
console.group("Squares");
//const LadoCuadrado = 5;
//console.log(`The measure of the square sides is: ${LadoCuadrado} cm`);
// Perimeter.
function Square_Perimeter(Lado){
    return Lado * 4;
};
//console.log(`The square´s perimeter is: ${Square_Perimeter} cm`);
//Area
function Square_Area(Lado){
    return Lado **2;
};
//console.log(`The square's area is: ${Square_Area} cm2`);
console.groupEnd();
//Triangle
console.group("Triangles");
//const LadoTriangle1 = 6;
//const LadoTriangle2 = 6;
//const LadoTriangle3 = 4;
//const AlturaTriangle = 5.5;
//console.log(
//    `The triangle's sides measure L1: ${LadoTriangle1} cm,L2: ${LadoTriangle2} cm, L3: ${LadoTriangle3} cm and heigh: ${AlturaTriangle}`
//);
//Perimeter
//const Triangle_Perimeter = LadoTriangle1 + LadoTriangle2 + LadoTriangle3;
function Triangle_Perimeter(Lado1, Lado2, Lado3){
    return Lado1 + Lado2 + Lado3;
};

//console.log(`the triangle's perimeter is: ${Triangle_Perimeter} cm.`)
//Area
// const Triangle_Area = (LadoTriangle2 * AlturaTriangle)/2;
function Triangle_Area(Base, Altura){
    return (Base * Altura)/2;
};
//console.log(`the triangle's perimeter is: ${Triangle_Area} cm2.`)
console.groupEnd();
//Circle
console.group("Circles");
// const Radius = 5;
// const Diameter = Radius * 2;
//PI
const P = Math.PI;
// console.log(`Radius: ${Radius} cm, Diameter: ${Diameter} cm.`);
//Perimeter
// const Cirle_Perimeter = Diameter * P;
function Cirle_Perimeter(Radius){
    return 2 * P * Radius;
};
// console.log(`The circle's perimeter is ${Cirle_Perimeter}`);
//Area
// const Cirle_Area= P * Radius ** 2;
function Cirle_Area(Radius){
    return P * Radius ** 2;
};
// console.log(`The circle's area is ${Cirle_Area} cm2`);
console.groupEnd();

//Function to conect JS with HTML
function CalculateSquarePerimeter(){
   //The following command lets me obtain info from the input when we put the id we assigned
   //before in the function argument.
    const  input = document.getElementById("InputSquare");
    //But this is to get ALL the info, to get the value we need to use the following command
    const value = input.value;
    //now we're going to show an alert
    const Perimeter = Square_Perimeter(value);
    //normally the console.log shows something in console but we don't want the users see the 
    //console so, here we're going to set the alert.
    alert(Perimeter);
};
function CalculateSquareArea(){
    //The following command lets me obtain info from the input when we put the id we assigned
    //before in the function argument.
     const  input2 = document.getElementById("InputSquare");
     //But this is to get ALL the info, to get the value we need to use the following command
     const value2 = input2.value;
     //now we're going to show an alert
     const Area = Square_Area(value2);
     //normally the console.log shows something in console but we don't want the users see the 
     //console so, here we're going to set the alert.
     console.log(Area);
     alert(Area); 
 };