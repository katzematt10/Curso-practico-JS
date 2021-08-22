const lista1 = [
  1,
  2,
  1,
  3,
  3,
  3,
  4,
  1,
  2,
  3,
  4,
  5,
  6  
];

//We need to count how many times each element appears in the list.
//To do that, we need to create an object.

const lista1Count = {};

lista1.map(
    function(i){
        if (lista1Count[i]){
            lista1Count[i] += 1; //This "if" represents when an element "i" already exist and sum 1 to the previous count
        } else {
            lista1Count[i] =1 ; //This "else" represents when an element doesn't exist and needs to be created
        }
    }
);

//It's necessary to study this function because is a simplified "for" that travers an iterative element
//In this case we used a function that adds elements to the object with the count we defined.
//Now we need to defined the mode.

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        valorAcumulado - nuevoValor
    }
);