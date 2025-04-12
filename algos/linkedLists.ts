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
        slow = slow!.next;
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
        slow = slow!.next;
        fast = fast.next.next;
    }
    prev!.next = null;

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


export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode | null = new ListNode(0);
    dummy.next = head;
    let back: ListNode | null = dummy;
    let front: ListNode | null = dummy;

    // Move 'front' n steps ahead
    for (let i = 0; i <= n; i++) {
        front = front!.next;
    }

    // If 'front' is null, it means we need to remove the first node
    if (front === null) {
        return head!.next;
    }

    // Move both 'front' and 'back' until 'front' reaches the end
    while (front !== null) {
        front = front.next;
        back = back!.next;
    }

    // Skip the target node
    back!.next = back!.next!.next;
    return dummy.next; // Return the updated head
};
class _Node {
        val: number
        next: _Node | null
        random: _Node | null
    
        constructor(val?: number, next?: _Node, random?: _Node) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
            this.random = (random===undefined ? null : random)
        }
    }
    export function copyRandomList(head: _Node | null): _Node | null {
        if (head === null) {
            return null;
        }
    
        const hm: Map<_Node, _Node> = new Map();
    
        let current: _Node | null = head;
        hm.set(current, new _Node(current.val));
    
        while (current !== null) {
            const currentClone = hm.get(current)!;
    
            if (current.random !== null && !hm.has(current.random)) {
                hm.set(current.random, new _Node(current.random.val));
            }
    
            currentClone.random = current.random !== null ? hm.get(current.random) ?? null : null;
    
            if (current.next !== null && !hm.has(current.next)) {
                hm.set(current.next, new _Node(current.next.val));
            }
    
            currentClone.next = current.next !== null ? hm.get(current.next) ?? null : null;
    
            current = current.next;
        }
    
        return hm.get(head) ?? null;
    }
    

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy : ListNode | null = new ListNode(0);
    let current : ListNode | null = dummy;
    let carry : number = 0;

    while(l1 !== null || l2 !== null){
        let sum = carry;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if(carry > 0){
        current.next = new ListNode(carry);
    }
    return dummy.next;
}

export function findDuplicate(nums: number[]): number {
    
    let slow : number = nums[0];
    let fast : number= nums[0];


   
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    slow = nums[0];
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};


class LRUCache {
    // Define LRUNode as a nested class
    private _LRUNode = class {
        key: number;
        val: number;
        next: this | null;
        prev: this | null;

        constructor(key: number, val: number) {
            this.key = key;
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    };

    private capacity: number;
    private cache: Map<number, InstanceType<LRUCache['_LRUNode']>>;
    private head: InstanceType<LRUCache['_LRUNode']>;
    private tail: InstanceType<LRUCache['_LRUNode']>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        
        // Create dummy head and tail nodes
        this.head = new this._LRUNode(0, 0);
        this.tail = new this._LRUNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key)!;
        this.removeNode(node);
        this.addToFront(node);

        return node.val;
    }

    put(key: number, value: number): void {
        // If key exists, update and move to front
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.val = value;
            this.removeNode(node);
            this.addToFront(node);
            return;
        }

        // If at capacity, remove least recently used
        if (this.cache.size === this.capacity) {
            const lruNode = this.tail.prev!;
            this.removeNode(lruNode);
            this.cache.delete(lruNode.key);
        }

        // Add new node
        const newNode = new this._LRUNode(key, value);
        this.addToFront(newNode);
        this.cache.set(key, newNode);
    }

    private removeNode(node: InstanceType<LRUCache['_LRUNode']>): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private addToFront(node: InstanceType<LRUCache['_LRUNode']>): void {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }
}