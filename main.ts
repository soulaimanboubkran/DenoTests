
import { MinStack } from "./algos/MinStack.ts";

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
}
