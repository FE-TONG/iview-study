function oneOf(value, arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == value){
            return true;
        }
    }
    return false;
}

export {oneOf};