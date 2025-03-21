 export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function reverseList(head: ListNode | null): ListNode | null {
    let current : ListNode | null = head;
    let prev : ListNode | null = null;
    let next : ListNode | null = null;

    while(current !== null){
        next = current.next;//store the next node
        current.next = prev;//reverse the current node 
        prev = current;//move the prev node to the current node sow when we move to the next node we can reverse it
        current = next;//move to the next node
    }
    return prev;
};


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let tail : ListNode | null = new ListNode(0);
    let current : ListNode | null = tail;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1;//Inside the loop: We then change what list1 points to, effectively taking just one node
            list1 = list1.next; // This line changes what list1 refers to
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2; //Outside the loop: We don't change what list1 points to, keeping the entire remaining list connected
    // No change to list1 after this
    
    return tail.next;
};

export function hasCycle(head: ListNode | null): boolean {
    //algorithm: Floyd's cycle detection algorithm
    if(head === null) return false;
    let fast : ListNode | null = head;
    let slow : ListNode | null = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
};

export function reorderList(head: ListNode | null): void {
    if(head === null || head.next  === null) return;
    let l1 : ListNode | null = head;
    let slow : ListNode | null = head;
    let fast : ListNode | null = head;
    let prev : ListNode | null = null;

    //split the list into two halves in order to reverse the second half
    while(fast !== null && fast.next !== null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    //reverse the second half
    let l2 : ListNode | null = reverseList(slow);
    mergeAlternately(l1,l2);
};

function mergeAlternately(l1 : ListNode | null, l2 : ListNode | null): ListNode | null {
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    l1.next = mergeAlternately(l2,l1.next);
    return l1;
}
//✅ Example:
//
//l1: 1 → 3 → 5
//l2: 2 → 4 → 6
