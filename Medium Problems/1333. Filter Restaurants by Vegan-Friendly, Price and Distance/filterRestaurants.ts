function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  restaurants = restaurants.filter(
    (restaurant) => restaurant[3] <= maxPrice && restaurant[4] <= maxDistance
  );
  if (veganFriendly === 1)
    restaurants = restaurants.filter((res) => res[2] === 1);
  let res = restaurants.sort((a, b) =>
    b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]
  );
  return res.map((res) => {
    return res[0];
  });
}
