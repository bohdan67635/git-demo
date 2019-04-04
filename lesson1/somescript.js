var someFunc = function(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    var result = 0;
    
    array.forEach(element => {
        result += element;
    });
    
    result /= array.length;
    console.log(result);
}

someFunc();