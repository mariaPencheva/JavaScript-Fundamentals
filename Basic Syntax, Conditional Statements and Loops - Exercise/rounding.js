function rounding(num, precision){
    if(precision > 15){
        precision = 15;
    } 
    let fixedNum = num.toFixed(precision);
 
    console.log(Number(fixedNum));

}



rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);

