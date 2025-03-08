
export function  isVailid(s:string) : boolean{
    const stack : string[] = [];
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }else{
            if(stack.length === 0){
                return false;
            }
            const top = stack.pop();
            if(s[i] === ')' && top !== '(' || 
                s[i] === '}' && top !== '{' ||
                s[i] === ']' && top !== '['
            ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

export function evalRPN(tokens : string[]): number{
    const stack: number[] = [];

    for (const token of tokens) {
        if (!['+', '-', '*', '/'].includes(token)) {
            stack.push(parseInt(token));
        } else {
            const nbr2 = stack.pop()!;
            const nbr1 = stack.pop()!;
            let result = 0;

            switch (token) {
                case "+":
                    result = nbr1 + nbr2;
                    break;
                case "-":
                    result = nbr1 - nbr2;
                    break;
                case "*":
                    result = nbr1 * nbr2;
                    break;
                case "/":
                    result = nbr1 / nbr2 > 0 ? Math.floor(nbr1 / nbr2) : Math.ceil(nbr1 / nbr2);
                    break;
            }
            stack.push(result);
        }
    }
    return stack.pop()!;
}
//the order in which the valid combinations are generated and pushed into the result array is deeply rooted 
// in the recursion tree structure and backtracking logic. The recursion function explores 
// all possible valid combinations step by step, using a systematic approach
export function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    function backtrack(current: string, openCount: number, closeCount: number) {
        // Base case: when we've used n open and n close parentheses, we've found a valid combination.
        if (openCount === n && closeCount === n) {
            res.push(current);  // Add valid combination to the result array.
            return;  // This is the backtrack step! The function returns to the previous call.
        }
    
        // Add ' (' if we still have open parentheses to use.
        if (openCount < n) {
            backtrack(current + '(', openCount + 1, closeCount);  // Recurse after adding '('.
        }
    
        // Add ')' if we have more open parentheses than close parentheses.
        if (closeCount < openCount) {
            backtrack(current + ')', openCount, closeCount + 1);  // Recurse after adding ')'.
        }
    }
    

    backtrack('', 0, 0);
    return res;
}

export function dailyTemperatures(T: number[]): number[] {
   const stack: number[] = [];
   const map : number[] = new Array(T.length).fill(0);
   for(let i = 0 ; i < T.length ; i++){
    while(stack.length > 0 && T[i] > T[stack[stack.length - 1]]){
        const index = stack.pop()!;
        map[index] = i - index;
    }
    stack.push(i);
   }
    return map;
}

export function carFleet(target: number, position: number[], speed: number[]): number {
    const n = position.length;
    if(n === 1) return 1;

    const cars : number[][] = [];
    for(let i = 0 ; i < n ; i++){
        const timeToTarget = (target - position[i]) / speed[i];
        cars.push([position[i],timeToTarget]);
    }

    cars.sort((a,b) => a[0] - b[0]);

    const stack : number[] = [];
    for(const car of cars){
        const time = car[1];//time to reach target
        if(stack.length === 0 || time > stack[stack.length - 1]){
            stack.push(time);
        }
    }
    return stack.length;
}
function carFleet2(target: number, position: number[], speed: number[]): number {
    const line = new Array(target + 1).fill(0);

    for (let i = 0; i < position.length; i++) {
        line[position[i]] = speed[i];
    }

    let res = 0;
    let stack = [];

    for (let i = line.length - 1; i >= 0; i--) {
        let sp = line[i];
        if (sp === 0) {
            continue;
        }

        const timeTo = (target - i) / sp;
        stack.push(timeTo);
        const len = stack.length;  
 
        if (len > 1 && stack[len - 2] >= stack[len -1]) {
            stack.pop()
        }
    }

    return stack.length;
};