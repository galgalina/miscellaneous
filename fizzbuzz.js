var n = prompt("Enter your number");
    if(n%3===0 && n%5!==0){
        alert("Fizz");
    }else if(n%5===0 && n%3!==0){
        alert("Buzz");
    }else if(n%3===0 && n%5===0){
        alert("FizzBuzz");
    }else{
        alert("Try again");
    }
