//max number
function max(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}
let getMax = max(1,2,3);
console.log('max number is', getMax);

let maxNumber = Math.max(11,22,33);
console.log('The max number is', maxNumber);

//min number
function min(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
}
let getMin = max(1,2,3);
console.log('min number is', getMin);

let minNumber = Math.min(11,22,33);
console.log('The min number is', minNumber);