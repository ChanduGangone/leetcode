// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

const sortedSquares = function(nums) {
    return nums.map(num => num*num).sort((a,b) => a-b);
};