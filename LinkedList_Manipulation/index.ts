class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    head: ListNode<T> | null;
  
    constructor() {
      this.head = null;
    }
  
    // Add a new element at the end of the list
    add(value: T): void {
      const newNode = new ListNode(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove an element from the list by value
    remove(value: T): boolean {
      if (!this.head) return false;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return true;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
        return true;
      }
  
      return false;
    }
  
    // Find an element in the list by value
    find(value: T): ListNode<T> | null {
      let current = this.head;
  
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
  
      return null;
    }
  
  }
  
  