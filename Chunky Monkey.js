
/*Write a function that splits an array (first argument) into groups
 the length of size (second argument) and returns
 them as a two-dimensional array.*/


 function chunkArrayInGroups(arr, size) {

   for (var i = 0; i < arr.length; i++){            //iterate through each array item in arr
    console.log(arr[i]);

     var done = arr.slice(i, size);
     console.log(arr[i]);



    }
      console.log(done);
      console.log(arr);
   return arr;
 }

 chunkArrayInGroups(["a", "b", "c", "d"], 2);
