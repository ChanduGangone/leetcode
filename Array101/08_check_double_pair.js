// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

const checkIfExist = function(arr) {
    let hashm = {};
    for (let i = 0; i < arr.length ; i++) {
        if (hashm[arr[i]*2] == true || (hashm[arr[i]/2] == true && arr[i]%2 == 0 )){
            return true;
        }
        hashm[arr[i]] = true;
    }
    return false;
};