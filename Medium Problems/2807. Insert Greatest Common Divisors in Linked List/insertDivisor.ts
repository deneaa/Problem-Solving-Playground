function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let node = head;

  while (node?.next) {
    const g = gcd(node.val, node.next.val);
    node.next = new ListNode(g, node.next);
    node = node.next.next;
  }

  return head;
}

function gcd(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}
