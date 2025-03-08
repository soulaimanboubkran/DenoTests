
import { MinStack } from "./algos/MinStack.ts";
import { isVailid,generateParenthesis,dailyTemperatures } from "./algos/stack.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const stack = new MinStack();
stack.push(1);
stack.push(-1);
stack.push(1);
const poped = stack.pop();
console.log(stack.getMin(),
  poped);

  //console.log(isVailid("(]"));
 //console.log(generateParenthesis(3));
 //console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
}
