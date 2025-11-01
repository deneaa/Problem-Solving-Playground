function arrayToListNode(arr: number[]) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return dummy.next;
}

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let response = [];

  let i = 0;
  let size = 1;

  while (i < arr.length) {
    const group = arr.slice(i, i + size);
    if (group.length % 2 === 0) group.reverse();
    response.push(group);
    i += size;
    size++;
  }

  response = response.flat();
  return arrayToListNode(response);
}
