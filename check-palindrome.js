var x = "madam";
  var palindromeFunction= function(x){
    x = x.toLowerCase();
    x = x.split(" ").join("");
  var y = x.split("").reverse().join("");
    if(y===x){
      return "Given string is a palindrome";
    }else{
    return "Given string is not a palindrome";
    }
  }
alert(palindromeFunction(x));