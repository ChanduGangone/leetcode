// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

const removeElement = function(nums, val) {
    let pos = 0,i;
    for ( i = 0; i < nums.length ; i++) {
        if(nums[i] !== val) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    return pos;
};