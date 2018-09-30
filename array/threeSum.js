const threeSum = function(nums) {
    let result = [];

    if(nums.length < 3){
        return result;
    }

    nums.sort(function(a,b){return a>b ? 1 : -1;});

    let len = nums.length;

    for(var i = 0; i < len-2; i++){

        if(i === 0 || nums[i] > nums[i-1]){ // very important, same as line 40, remove duplicate as 111 will only run once 1-> rather tan 1 1 1
            let target = 0 - nums[i];

            let j = i + 1;
            let k = len - 1;

            while(j < k){
                if(nums[j] + nums[k] === target){
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]){j++;}
                    while(j < k && nums[k] === nums[k+1]){k--;}
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else {
                    k--;
                }
            }
        }
        // very important, same as line 19
        // if(i < len - 1){
        //     while(nums[i] === nums[i+1]){i++;}
        // }
    }

    return result;
};

var start = Date.now()
var threeSumRes = threeSum([13, -14, -10, -4, 4, 4, 0, -14, 5, -9, -3, -10, 14, 7, -3, -4, -3, 12, -14, 2, -11, -6, 0, -7, 13, -2, -7, -11, -14, -13, 5, 14, -12, 11, -13, -1, -8, 2, 0, 4, 1, 4, 10, -8, -11, -8, 3, 1, 11, 4, -12, 8, 5, -4, -14, -4, 9, -13, -8, 2, -11, 12, -7, 14, 0, -5, -2, 7, 5, 5, -3, 13, -6, -8, -10, -10, -9, 0, 6, -12, 11, 2, 11, 1, 13, 4, 12, -1, 6, -11, -14, 2, 9, -6, 1, -6, -4, 14, -13, 8, 4, -1, 6, 6, -2, 11, 11, 4, -4, -5, -1, -8, 12, -13, 1, 10, 7, -10, -14, -10, -5, -13, 0, 11])
var end = Date.now()
// console.log(threeSumRes.length);
console.log(end - start);