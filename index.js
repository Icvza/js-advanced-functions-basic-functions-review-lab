// Your code here
function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (val3="*", val4) {
    return function (val4) {
        return `You are ${val3}${val4}${val3}!`
    }
}

const Calculator = {
    add (a,b) {return a+b},
    subtract (a,b) {return a-b},
    multiply (a,b) {return a*b},
    divide (a,b) {return a/b}
}



function actionApplyer (integer, array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            integer = array[i](integer);
            console.log(integer)   
        }
        return integer;
    }
    else {
        return integer; 
    }
}