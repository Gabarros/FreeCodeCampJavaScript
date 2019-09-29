function chunkArrayInGroups(arr, size) {
    // Break it up.
    let arr_split = [];
    let temp = [];
    let number = 0;

    for (let i = 0; i < arr.length && number < arr.length; i++) {
	
        for (let x = 0; x < size && number < arr.length; x++) {
            temp.push(arr[number]);
            number++;
        }
        arr_split.push(temp);
        temp = [];
    }
   return arr_split;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

// Avançada

// function chunkArrayInGroups(arr, size) {
//     var newArr = [];
//     while (arr.length) {
//       newArr.push(arr.splice(0,size));
//     }
//     return newArr;
//   }