// This file is only to analyze our variables and generate calculations, like average, median, mode, etc.
//1. Create an array with the salaries.

const SalariesColombia = Colombia.map(
    function(person){
        return person.salary;
    }
);

//2. create a new array with the ordered values.
const SalariesColombiaSorted = SalariesColombia.sort(
    function(SalaryA, SalaryB){
        return SalaryA - SalaryB
    }
);

//3. Calculate the Median but first checking if the array is even or odd
function esPar(numero){
    return (numero % 2 ===0);
};

function MedianSalary(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)== true){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2= lista[mitad];
        return (personaMitad1 + personaMitad2)/2;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};  

//We need to create a variable for our general median.
const MedianaGeneralColombia = MedianSalary(SalariesColombiaSorted)

//To calculate our top 10%, we need our sorted array and certain number of positions.
//To use the method Splice we need to define where are we going to start
const SpliceStart = SalariesColombiaSorted.length * (90/100); //To our total length we calculate the 90%
//Now we need to define the number of the positions
const SpliceCount = SalariesColombiaSorted.length - SpliceStart; //The cut is the difference

const SalariosColTop10 = SalariesColombiaSorted.splice(
    SpliceStart,
    SpliceCount
);

//Calculate the top 10% median
const MedianaTop10Colombia = MedianSalary(SalariosColTop10);

//At the end we're going to print our general median and our top 10%.
console.log({
    MedianaGeneralColombia,
    MedianaTop10Colombia,
});