function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let array = [];

  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }

  let arr = array.slice(left - 1, right);
  arr.reverse();
  let result = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (i < left - 1 || i >= right) result.push(array[i]);
    else {
      result.push(arr[index]);
      index++;
    }
  }

  return arrayToList(result);
}

function arrayToList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return dummy.next;
}
