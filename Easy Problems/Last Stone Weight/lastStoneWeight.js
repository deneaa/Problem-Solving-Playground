var lastStoneWeight = function(stones) {

    while (stones.length > 1) {
        stones.sort((a, b) => b - a); 

        let max = stones.shift();
        let min = stones.shift();

        if (max !== min) {
            stones.unshift(max - min);
        }
    }

    return stones.length === 1 ? stones[0] : 0; 
};

// Teste
console.log(lastStoneWeight([2,7,4,1,8,1])); // 1
console.log(lastStoneWeight([1,3])); // 2
console.log(lastStoneWeight([1,1])); // 0
console.log(lastStoneWeight([2,2])); // 0
console.log(lastStoneWeight([3,7,8,9])); // 3
console.log(lastStoneWeight([2,2,3])); // 1
console.log(lastStoneWeight([1,2,3])); // 0
