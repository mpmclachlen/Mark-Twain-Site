
function largestOfFour(arr) {

  //empty array to send the final four highest numbers selected from each array
  var finalFour = [];
  var currentHighest = 0;

  for (var i = 0; i < 4; i++){
    currentHighest = 0;
    //console.log(arr[i]);
    for (var j = 0; j < 4; j++){
      //console.log(arr[i][j]);

      if (arr[i][j] > currentHighest)
          {
            currentHighest = arr[i][j];
          }


        }
          finalFour.push(currentHighest)
    }

  console.log(finalFour);
  return finalFour;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
