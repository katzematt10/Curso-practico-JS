function CHeigh(Side1, Side2, Side3){
    if (Side1 == Side2){
        //base is side 3
        a2 = Side1 ** 2;
        b2 = (Side3/2) ** 2;
        c = Math.sqrt(a2 - b2);
        return c;
    } else if(Side1 == Side3){
        //Base is Side 2
        a2 = Side1 ** 2;
        b2 = (Side2/2) ** 2;
        c = Math.sqrt(a2 - b2);
        return c;
    } else if(Side2 == Side3){
         //Base is Side 1
        a2 = Side2 ** 2;
        b2 = (Side1/2) ** 2;
        c = Math.sqrt(a2 - b2);
        return c;
    } else {
        //Not apply
    };
};
function CArea(Side1, Side2, Side3, Heigh){
    if (Side1 == Side2){
        //base is side 3
        return (Heigh * Side3)/2;
    } else if(Side1 == Side3){
        //Base is Side 2
        return (Heigh * Side2)/2;
    } else if(Side2 == Side3){
         //Base is Side 1
        return (Heigh * Side1)/2;
    } else {
        //Not apply
    };
};
function CPerimeter(Side1, Side2, Side3){
    Side1=Number(Side1);
    Side2=Number(Side2);
    Side3=Number(Side3);
    return Side1 + Side2 + Side3
};
function CalculateHeigh(){
    //The following command lets me obtain info from the input when we put the id we assigned
    //before in the function argument.
     const  input1 = document.getElementById("InputTriangleSide1");
     const  input2 = document.getElementById("InputTriangleSide2");
     const  input3 = document.getElementById("InputTriangleSide3");
     //But this is to get ALL the info, to get the value we need to use the following command
     const  Side1 = input1.value;
     const  Side2 = input2.value;
     const  Side3 = input3.value;
     //now we're going to show an alert
     if ((Side1 == Side2)||(Side1 == Side3)||(Side2 == Side3)){
        //It's Isosceles
        var Heigh= CHeigh(Side1, Side2, Side3);
        alert(Heigh);
     } else{
        //It's not isosceles
        alert("Triangle is not isosceles");
    }; 
 };
     
 function CalculateArea(){
    //The following command lets me obtain info from the input when we put the id we assigned
    //before in the function argument.
     const  input1 = document.getElementById("InputTriangleSide1");
     const  input2 = document.getElementById("InputTriangleSide2");
     const  input3 = document.getElementById("InputTriangleSide3");
     //But this is to get ALL the info, to get the value we need to use the following command
     const  Side1 = input1.value;
     const  Side2 = input2.value;
     const  Side3 = input3.value;
     //now we're going to show an alert
     if ((Side1 == Side2)||(Side1 == Side3)||(Side2 == Side3)){
        //It's Isosceles
        var Heigh= CHeigh(Side1, Side2, Side3);
        var Areas= CArea(Side1, Side2, Side3, Heigh);
        alert(Areas);
     } else{
        //It's not isosceles
        alert("Triangle is not isosceles");
    }; 
 };   

 function CalculatePerimeter(){
    //The following command lets me obtain info from the input when we put the id we assigned
    //before in the function argument.
     const  input1 = document.getElementById("InputTriangleSide1");
     const  input2 = document.getElementById("InputTriangleSide2");
     const  input3 = document.getElementById("InputTriangleSide3");
     //But this is to get ALL the info, to get the value we need to use the following command
     const  Side1 = input1.value;
     const  Side2 = input2.value;
     const  Side3 = input3.value;
     //now we're going to show an alert
     Perimeter = CPerimeter(Side1, Side2, Side3);
        alert(Perimeter);
};   
     
     //normally the console.log shows something in console but we don't want the users see the 
     //console so, here we're going to set the alert.
     