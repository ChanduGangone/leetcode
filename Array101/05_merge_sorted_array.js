// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

const merge = function(nums1, m, nums2, n) {
    let i,key,  j; 
    for (i = m; i < m+n; i++)
    { 
        key = nums2[i-m]; 
        j = i - 1; 
   
        while (j >= 0 && nums1[j] > key)
        { 
            nums1[j + 1] = nums1[j]; 
            j = j-1; 
        } 
        nums1[j + 1] = key; 
    } 
};