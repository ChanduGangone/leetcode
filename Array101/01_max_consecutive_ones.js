//https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
const findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, count = 0 ;
    
    for (let num of nums) {
        if ( num === 1 ) {
            count++;
        }
        else {
            if (count >= maxCount) {
                maxCount = count;
            }
            count = 0;
        }
        
    }
    if (count >= maxCount) {
        maxCount = count;
    }
    return maxCount;
    
}; 