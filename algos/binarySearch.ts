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