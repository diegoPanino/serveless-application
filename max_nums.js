function find_max(arr){
    let max = 0;
    for(let i = 0; i < arr.length -1 ; i ++){
        if(arr[i] > max)
            max = arr[i]
    }
    return max;
    //return Math.max(...arr);
};

module.exports = {
    find_max:find_max
}