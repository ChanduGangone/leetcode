// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

var removeDuplicates = function(nums) {
    //[0,0,0,1,2,2] => [0,1,2] 
    let pos = 0,i=0,j ;
    while (i < nums.length) {
        j = i + 1;
        while(j <nums.length ) {
            if(nums[j] == nums[i])
            { 
                j++;
            }
            else {
                break;
            }
        }
        nums[pos] = nums[j-1];
        pos++;
        i = j;
    }
    return pos;
};