// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
const findNumbers = function(nums) {
    let count = 0;
    for (let num of nums) {
        if (num.toString().length % 2 == 0)
            count++;
    }
    return count;
};