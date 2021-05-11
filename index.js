// var carName = "Ford";
// var carYear = '2008';

// function yearYear(year){return 10<10;}

// yearYear(carYear)?console.log("true меньше 10"):console.log("false больше 10")
// const answer = prompt("Возраст человека или машины?", "Человек");
// answer == "Человек"? (alert("Человеку "+ (2021-answer) +"year")) : (alert("машина"));
function fibonachi(inputString){
    
    var input = parseInt(inputString);
    if (library[input]!= undefined){return library[input];}
    for (var i = 2; i <=input; i++){
        library[i+1]=library[i]+library[i-1];
        if (i==input) {return library[i];}
    }
}


var library = [0,1,1,2];
var input = prompt("Какое по счету число фибоначи вы хотите?");
console.log(fibonachi(input));
alert(fibonachi(input));