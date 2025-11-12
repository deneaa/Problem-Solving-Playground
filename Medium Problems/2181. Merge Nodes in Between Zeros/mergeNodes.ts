function mergeNodes(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let prev = dummy;
  let sum = 0;

  head = head.next;
  while (head !== null) {
    if (head.val === 0) {
      if (sum > 0) {
        prev.next = new ListNode(sum);
        prev = prev.next;
        sum = 0;
      }
    } else {
      sum += head.val;
    }
    head = head.next;
  }

  return dummy.next;
}
