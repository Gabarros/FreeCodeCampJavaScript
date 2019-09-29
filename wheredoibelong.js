function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    if(arr !== []) {
        arr.sort(sortNumber);
    }else
    {
        return 0;
    }

    for (let i in arr) {
        if (num < arr[i]) {
            alert(i);
        }else if(num > arr[arr.length-1]){
            alert(arr.length-1);
        }
    }

}

function sortNumber(a, b) {
    return a - b;
  }

getIndexToIns([2, 5, 10], 15);