//Define the list of data
const lista1 = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random()
];

//console.log(`The result of the ${aver}`)


function CalculateArithmeticAverage(lista){
    //Define the list's length
    const elements = lista.length
    //Initialize the sumatory
    let sumList = 0;
    for (let i=0; i<elements; i++){
        sumList+=lista[i];
        //console.log(sumList);
    };
    const aver = sumList / elements;
    return aver;
};

function CalculateArithmeticAverage2(lista){
    const elements = lista.length
    const SumList = lista.reduce(
        function(ValorAc=0, newElement){
            return ValorAc + newElement;
        }
    );
    const aver = SumList / elements;
    return aver; 
};

