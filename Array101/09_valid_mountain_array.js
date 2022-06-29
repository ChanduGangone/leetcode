// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/ 

const validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    let max = Math.max(...arr);
    let maxindex = arr.indexOf(max);
    
    if(arr.slice(maxindex+1, arr.length).some(el => el == max) || maxindex == 0 || maxindex == arr.length-1) {
        return false;
    }
    for (let i = 1; i < arr.length ; i++) {
        if( i > maxindex ? arr[i] >= arr[i-1] : arr[i] <= arr[i-1]) {
            return false;
        }
    }
        return true;
};