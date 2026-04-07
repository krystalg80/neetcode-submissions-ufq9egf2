class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i <= nums.length - 2; i++){
            for(let j = i + 1; j <= nums.length - 1; j++) {
                if(nums[i] === nums[j]){
                    return true
                }
            }
        } 
        return false;
    }
}

/* 
[1, 2, 3, 3]

nums = [1, 4, 6, 8, 9, 6] 

i = 2
j = 1

iterate through the array from the first value to the end of the array
if there is no duplicate, iterate from the second value to the end of the array again,
repeat process until duplicate is found, if no duplicate is found
outside of our for loop, we will return false;

if the first value in the array = the next value then it is true, if not 
we go to the next value and keep going until the end of the array

if [i] > 2
true



*/