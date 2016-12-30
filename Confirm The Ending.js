
function confirmEnding(str, target) {

  //console.log(str.substr(str.length - target.length , str.length));
  if (str.substr(str.length - target.length , str.length) == target){

      return true;
  }
  else{
      return false;
  }

}

confirmEnding("Bastian", "b");
