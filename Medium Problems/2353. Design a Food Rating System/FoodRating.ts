class FoodRatings {
  foods: string[];
  cuisines: string[];
  ratings: number[];
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    let indexes: number[] = [];
    for (let i = 0; i < this.foods.length; i++) {
      if (this.foods[i] === food) {
        indexes.push(i);
      }
    }
    for (let i = 0; i < indexes.length; i++) {
      this.ratings[indexes[i]] = newRating;
    }
  }

  highestRated(cuisine: string): string {
    let indexes: number[] = [];
    for (let i = 0; i < this.cuisines.length; i++) {
      if (this.cuisines[i] === cuisine) {
        indexes.push(i);
      }
    }
    let max = -Infinity;
    let index = 0;
    for (let i = 0; i < indexes.length; i++) {
      if (
        this.ratings[indexes[i]] > max ||
        (this.ratings[indexes[i]] === max &&
          this.foods[indexes[i]] < this.foods[index])
      ) {
        max = this.ratings[indexes[i]];
        index = indexes[i];
      }
    }
    return this.foods[index];
  }
}
