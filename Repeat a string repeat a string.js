
function repeatStringNumTimes(str, num) {
  /* Repeat a given string (first argument) num times (second argument).
  Return an empty string if num is not a positive number.*/
  if (num < 0){
    str = '';
    return str;
  }
  else{
    return str.repeat(num);
  }
  return str;
}

repeatStringNumTimes("abc", 3);
