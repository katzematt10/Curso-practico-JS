//Create a list to calculate the median
var Lis1 = [
    100,
    20,
    200,
    10000,
    1
];
console.log(Lis1);
for (i=0;i<Lis1.length;i++){
    Lis[i]=Number(Lis[i])
};
Lis2 = Lis1.sort();

console.log(Lis2);
// Calculate the middle of the array
const Middle_Lista = Lis2.length/2;
//console.log(Middle_List);
//Now we need to verify if our list is odd or not.

//let median;
if (Lis2.length <2){
    Median = Lis2[0];
} else {
    if (Middle_Lista % 2 == 0){
        //Es par, entonces tomamos los dos valores de la mitad
        Value1 = Lis2[Middle_Lista];
        Value2 = Lis2[Middle_Lista-1];
        Median = (Value1 + Value2) / 2;
    } else {
        Median = Lis2[parseInt(Middle_Lista)];
    };
};
console.log(Median);

