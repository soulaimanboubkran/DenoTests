export function search(nums: number[], target: number): number {
    let l= 0 
    let r= nums.length -1
  

    while(l <= r){
        const m = l + ((r - l) >> 1)  

        if(nums[m] === target) return m;
        if(nums[m] < target) l = m + 1;
        else r = m -1
    }
    return -1
};
export function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
     const n = matrix[0].length;
 
     let left = 0, right = m * n - 1;
 
     while (left <= right) {
         const mid = left + ((right - left) >> 1);
         const midVal = matrix[Math.floor(mid / n)][mid % n];
 
         if (midVal === target) return true;
         else if (midVal < target) left = mid + 1;
         else right = mid - 1;
     }
 
     return false;
 }

 export  function minEatingSpeed(piles: number[], h: number): number {
    let left : number  = 1;
    let right: number =   Math.max(...piles);

    while(left <= right){
        const k:number = left + Math.floor((right - left)/2);
        if(canEatInTime(piles,k,h)){
            right = k-1;

        }else{
            left = k+1;
        }
    }
    return left;
 };
 function canEatInTime(piles: number[], k: number, h: number): boolean {
    let hours: number = 0;
    
    for (const pile of piles) {
        const div: number = Math.floor(pile / k);
        hours += div;
        if (pile % k !== 0) hours++;
    }
    
    return hours <= h;
}
function searchRotated(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // If we found the target
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target is in the left sorted half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        } 
        // Right half is sorted
        else {
            // Check if target is in the right sorted half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }
    
    return -1; // Target not found
};