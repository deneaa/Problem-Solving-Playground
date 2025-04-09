var MyCalendarThree = function() {
    this.timeline = new Map();
    this.maxBooking = 0;
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function(startTime, endTime) {
    this.timeline.set(start, (this.timeline.get(start) || 0) + 1);
    this.timeline.set(end, (this.timeline.get(end) || 0) - 1);

    let active = 0;
    let max = 0;
    const sortedTimes = Array.from(this.timeline.keys()).sort((a, b) => a - b);
    for (let time of sortedTimes) {
        active += this.timeline.get(time);
        if (active > max) {
            max = active;
        }
    }

    this.maxBooking = max;
    return this.maxBooking;

};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */