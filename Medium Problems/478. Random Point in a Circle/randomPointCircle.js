/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let theta = 2 * Math.PI * Math.random();
    let r = Math.sqrt(Math.random()) * this.radius;

    let x = this.x_center + r * Math.cos(theta);
    let y = this.y_center + r * Math.sin(theta);

    return [x, y];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
