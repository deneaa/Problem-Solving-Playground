class FoodRatings {
  foods: string[];
  cuisines: string[];
  foodsMap: Map<string, number> = new Map();
  cuisineMap: Map<string, string[]> = new Map();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;

    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];

      this.foodsMap.set(food, rating);

      if (!this.cuisineMap.has(cuisine)) {
        this.cuisineMap.set(cuisine, []);
      }
      this.cuisineMap.get(cuisine)!.push(food);
    }
  }

  changeRating(food: string, newRating: number): void {
    this.foodsMap.set(food, newRating);
  }

  highestRated(cuisine: string): string {
    const foods = this.cuisineMap.get(cuisine)!;

    let maxRating = -Infinity;
    let bestFood = "";

    for (let food of foods) {
      const rating = this.foodsMap.get(food)!;
      if (rating > maxRating || (rating === maxRating && food < bestFood)) {
        maxRating = rating;
        bestFood = food;
      }
    }

    return bestFood;
  }
}
