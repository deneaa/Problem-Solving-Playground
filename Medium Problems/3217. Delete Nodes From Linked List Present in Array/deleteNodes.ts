class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  let set = new Set(nums);
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let response = arr.filter((n) => !set.has(n));
  return arrayToListNode(response);
}

function arrayToListNode(arr: number[]) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return dummy.next;
}
console.log(modifiedList([1, 2, 3], arrayToListNode([1, 2, 3, 4, 5])));
