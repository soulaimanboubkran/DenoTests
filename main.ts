import { MinStack } from "./algos/MinStack.ts";
import { isVailid, generateParenthesis, dailyTemperatures } from "./algos/stack.ts";
import { isPalindrome } from "./algos/towPointers.ts";
import { hasCycle, ListNode } from "./algos/linkedLists.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
// const stack = new MinStack();
// stack.push(1);
// stack.push(-1);
// stack.push(1);
// const poped = stack.pop();
// console.log(stack.getMin(), poped);
//
// // Set up linked list with a cycle
// const head = new ListNode(3);
// head.next = new ListNode(2);
// head.next.next = new ListNode(0);
// head.next.next.next = new ListNode(-4);
// head.next.next.next.next = head.next; // Create a cycle
//
// console.time("hasCycle execution time");
// console.log("Cycle detected:", hasCycle(head));
// console.timeEnd("hasCycle execution time");
}
