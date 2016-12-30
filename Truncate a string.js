
function truncateString(str, num) {
  /*Truncate a string (first argument) if it is longer than the given maximum
  string length (second argument). Return the truncated string with a ... ending.

  Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in
 determining the truncated string.*/
//str = str.slice(str.substr(num - 1, str.length)
//console.log("A-tisket a-tasket A green and yellow basket".length); = 43
if (str.length <= num){
  return str;
}

else if (num <= 3){
  str = str.slice(0, num);
  //console.log(str);
  return str + "...";
}
else{
str = str.slice(0, num - 3) + "...";
  console.log(str);
  return str;
}

}
//truncateString("A-tisket a-tasket A green and yellow basket", 11);
//truncateString("A-", 1);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
