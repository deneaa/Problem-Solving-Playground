function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    if (!root) return -1;

    const map = new Map<number, number>();

    function dfs(node: TreeNode | null, level: number) {
        if (!node) return;
        map.set(level, (map.get(level) || 0) + node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    const sums = Array.from(map.values()).sort((a, b) => b - a); 
    return sums.length >= k ? sums[k - 1] : -1;
}
