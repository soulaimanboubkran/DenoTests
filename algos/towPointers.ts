export function isPalindrome(s: string): boolean {
    var s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left : number = 0 
    let right : number = s.length - 1;

    while(left < right){
        if(s.charAt(left) !== s.charAt(right)){
            return false;
        }else{
            left++;
            right--;
        }
    }
    return true;
};

export function twoSum(numbers: number[], target: number): number[] {
    let left : number = 0;
    let right : number = numbers.length - 1;

    while(left < right){
        const sum = numbers[left] + numbers[right];
        if(sum === target){
            return [left+1,right+1];
        }else if(sum < target){//the sum is too small sow we need to increase it since the array is sorted
            left++;
        }else{//the sum is too big so we need to decrease it since the array is sorted
            right--;
        }
    }
    return [-1,-1];
};

export function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b);
    const res:number[][] = [];

    for(let i = 0; i<nums.length -2 ;i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                res.push([nums[i] , nums[left] , nums[right]])
                while(left < right && nums[left] === nums[left + 1]) left++;
                while(left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }   
        }
    }
    return res;

}


function maxArea(height: number[]): number {
    let maxArea : number = 0;
    let left : number = 0;
    let right : number = height.length - 1;

    while(left < right){
        if(height[left] < height[right]){
            //we calculate the area with the left height sow the water will be limited by the left height logically
            maxArea = Math.max(maxArea , height[left] * (right - left)); // the width is the difference between the two pointers (right - left)
            left++;
        }else{
            //we calculate the area with the right height sow the water will be limited by the right height logically
            maxArea = Math.max(maxArea , height[right] * (right - left));
            right--;
        }
    }
    return maxArea;
};
function trap(height: number[]): number {
    // Edge case: can't trap water with fewer than 3 elements
    if(height.length === 0 || height.length < 3) return 0;

    // Initialize two pointers at the ends of the array
    let left : number = 0;
    let right : number = height.length - 1;
    
    // Track maximum heights from both sides
    let leftMax : number = height[left];
    let rightMax : number = height[right];
    
    // Total water trapped
    let water : number = 0;

    while(left < right){
        if(leftMax < rightMax) {
            // Move left pointer inward since left side has smaller barrier
            left++;
            // Update the maximum height seen from left side
            leftMax = Math.max(leftMax, height[left]);
            // Add trapped water at current position (could be 0 if it's a new max)
            water += leftMax - height[left];
        } else {
            // Move right pointer inward since right side has smaller barrier
            right--;
            // Update the maximum height seen from right side
            rightMax = Math.max(rightMax, height[right]);
            // Add trapped water at current position (could be 0 if it's a new max)
            water += rightMax - height[right];
        }
    }
    return water;
//The algorithm is checking for trapped water by verifying if a position can hold water, which happens when:
//There are higher elevations on both sides of the current position
//The amount of water that can be trapped is determined by the shorter of those surrounding heights
};
