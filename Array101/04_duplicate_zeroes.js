// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

const duplicateZeros = function(arr) {
    let i = arr.length-1;
    let j = i+ arr.filter(el => el ===0).length;//7
    while ( i !== j) {
        copyvalue(arr, i ,j--);
        if(arr[i] === 0 ){
            copyvalue(arr, i ,j--);
        }
        i--;
    }
};
function copyvalue ( arr, i ,j) {
    if (j < arr.length)
    arr[j] = arr[i];
}