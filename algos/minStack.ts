class Node {
    val: number;
    min: number;
    next: Node | null;

    constructor(val: number, min: number, next: Node | null) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}

export class MinStack {
    private head: Node | null = null;

    constructor() {}

    public push(val: number): void {
        if (this.head === null) {
            this.head = new Node(val, val, null);
        } else {
            this.head = new Node(val, Math.min(val, this.head.min), this.head);
        }
    }

    public pop(): number | null {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        const poppedValue = this.head.val; // Store the value before removing the node
        this.head = this.head.next; // Remove the top node
        return poppedValue; // Return the popped value
    }
    

    public top(): number {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        return this.head.val;
    }

    public getMin(): number {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        return this.head.min;
    }
}
