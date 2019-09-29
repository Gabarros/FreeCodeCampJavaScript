function mutation(arr) {

    let array1 = arr[0].toLowerCase;
    let array2 = arr[1].toLowerCase;
    let word = arr[1].split("");
    let array = [...arr[0]];
    let valida = true;
       for(let i in word){
          if(array.indexOf(word[i]) === -1){
           return false;
      }
  }
  return valida;
}
  
  mutation(["hello", "hey"]);