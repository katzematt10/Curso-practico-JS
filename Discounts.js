function Calculate_Price_With_Discount(Price, Discount){
    const Percentage_with_Discount = 100 - Discount;
    const Final_Price = (Price * Percentage_with_Discount)/100;
    return Final_Price;  
};

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const Price_with_Discount = Calculate_Price_With_Discount(valuePrice,valueDiscount);

    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "Your final price is: $" + Price_with_Discount;
};
//This is my file to calculate discounts and final prices
// const Original_Price = 120;
// const discount = 15;

//Printing the info
// console.log({
//     Original_Price,
//     discount,
//     Percentage_with_Discount,
//     Final_Price
// });
