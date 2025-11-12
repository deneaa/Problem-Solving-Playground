function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let prev = dummy;

  while (head !== null && head.next !== null) {
    let first = head;
    let second = head.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    head = first.next;
  }
  return dummy.next;
}
