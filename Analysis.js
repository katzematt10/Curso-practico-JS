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
    } else {
        const personaMitad = lista[mitad];
    }
};