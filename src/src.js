//API request for vegan recipes
const recipeApiRequest = `https://api.spoonacular.com/recipes/complexSearch?diet=vegan&apiKey=be6ae57f7b8c425994e6a529e04cb682&number=30`;

//mock data
const recipeMockData = {
  results: [
    {
      id: 716426,
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715594,
      title: "Homemade Garlic and Basil French Fries",
      image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644387,
      title: "Garlicky Kale",
      image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 782601,
      title: "Red Kidney Bean Jambalaya",
      image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 794349,
      title: "Broccoli and Chickpea Rice Salad",
      image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 766453,
      title: "Hummus and Za'atar",
      image: "https://spoonacular.com/recipeImages/766453-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716627,
      title: "Easy Homemade Rice and Beans",
      image: "https://spoonacular.com/recipeImages/716627-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 798400,
      title: "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
      image: "https://spoonacular.com/recipeImages/798400-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715769,
      title: "Broccolini Quinoa Pilaf",
      image: "https://spoonacular.com/recipeImages/715769-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 782600,
      title: "Quinoa Salad with Vegetables and Cashews",
      image: "https://spoonacular.com/recipeImages/782600-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715540,
      title: "Summer Berry Salad",
      image: "https://spoonacular.com/recipeImages/715540-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 640062,
      title: "Corn Avocado Salsa",
      image: "https://spoonacular.com/recipeImages/640062-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 639535,
      title: "Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather",
      image: "https://spoonacular.com/recipeImages/639535-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 652417,
      title: "Moroccan chickpea and lentil stew",
      image: "https://spoonacular.com/recipeImages/652417-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 649931,
      title: "Lentil Salad With Vegetables",
      image: "https://spoonacular.com/recipeImages/649931-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715543,
      title: "Homemade Guacamole",
      image: "https://spoonacular.com/recipeImages/715543-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 652423,
      title: "Moroccan Couscous and Chickpea Salad",
      image: "https://spoonacular.com/recipeImages/652423-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 662670,
      title: "Swiss Chard Wraps",
      image: "https://spoonacular.com/recipeImages/662670-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716195,
      title: "Spicy Indian-Style Hummus",
      image: "https://spoonacular.com/recipeImages/716195-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 663559,
      title: "Tomato and lentil soup",
      image: "https://spoonacular.com/recipeImages/663559-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 633942,
      title: "Balsamic Roasted Vegetables",
      image: "https://spoonacular.com/recipeImages/633942-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 658509,
      title: "Roasted Broccoli with Lemon and Garlic",
      image: "https://spoonacular.com/recipeImages/658509-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716406,
      title: "Asparagus and Pea Soup: Real Convenience Food",
      image: "https://spoonacular.com/recipeImages/716406-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 647875,
      title: "Indian-Style Dill and Turmeric Potato Salad",
      image: "https://spoonacular.com/recipeImages/647875-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 637162,
      title: "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
      image: "https://spoonacular.com/recipeImages/637162-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 982371,
      title: "Instant Pot Quinoa Grain Bowl",
      image: "https://spoonacular.com/recipeImages/982371-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 1095753,
      title: "Roasted Cauliflower Detox Bowl with Tahini Sauce",
      image: "https://spoonacular.com/recipeImages/1095753-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 636602,
      title: "Butternut Squash Soup (In Half An Hour!)",
      image: "https://spoonacular.com/recipeImages/636602-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 792072,
      title: "Dressed Up Kale Salad",
      image: "https://spoonacular.com/recipeImages/792072-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 632269,
      title: "Amaranth and Roast Veggie Salad",
      image: "https://spoonacular.com/recipeImages/632269-312x231.jpg",
      imageType: "jpg",
    },
  ],
  offset: 0,
  number: 30,
  totalResults: 657,
};

//API request for
const nutritionApiRequest = `https://api.spoonacular.com/recipes/716426/nutritionWidget.json?apiKey=be6ae57f7b8c425994e6a529e04cb682`;

//mock data nutritional values
const nutritionalMockData = {
  calories: "191k",
  carbs: "29g",
  fat: "6g",
  protein: "6g",
  bad: [
    {
      title: "Calories",
      amount: "191k",
      indented: false,
      percentOfDailyNeeds: 9.58,
    },
    {
      title: "Fat",
      amount: "6g",
      indented: false,
      percentOfDailyNeeds: 9.78,
    },
    {
      title: "Saturated Fat",
      amount: "1g",
      indented: true,
      percentOfDailyNeeds: 6.45,
    },
    {
      title: "Carbohydrates",
      amount: "29g",
      indented: false,
      percentOfDailyNeeds: 9.7,
    },
    {
      title: "Sugar",
      amount: "3g",
      indented: true,
      percentOfDailyNeeds: 3.68,
    },
    {
      title: "Cholesterol",
      amount: "0.0mg",
      indented: false,
      percentOfDailyNeeds: 0,
    },
    {
      title: "Sodium",
      amount: "428mg",
      indented: false,
      percentOfDailyNeeds: 18.62,
    },
  ],
  good: [
    {
      title: "Protein",
      amount: "6g",
      indented: false,
      percentOfDailyNeeds: 13.7,
    },
    {
      title: "Vitamin C",
      amount: "65mg",
      indented: false,
      percentOfDailyNeeds: 79.85,
    },
    {
      title: "Vitamin K",
      amount: "73µg",
      indented: false,
      percentOfDailyNeeds: 69.61,
    },
    {
      title: "Manganese",
      amount: "1mg",
      indented: false,
      percentOfDailyNeeds: 65.81,
    },
    {
      title: "Copper",
      amount: "0.48mg",
      indented: false,
      percentOfDailyNeeds: 24.16,
    },
    {
      title: "Fiber",
      amount: "5g",
      indented: false,
      percentOfDailyNeeds: 22.92,
    },
    {
      title: "Folate",
      amount: "89µg",
      indented: false,
      percentOfDailyNeeds: 22.34,
    },
    {
      title: "Magnesium",
      amount: "87mg",
      indented: false,
      percentOfDailyNeeds: 21.9,
    },
    {
      title: "Vitamin B6",
      amount: "0.42mg",
      indented: false,
      percentOfDailyNeeds: 20.91,
    },
    {
      title: "Phosphorus",
      amount: "188mg",
      indented: false,
      percentOfDailyNeeds: 18.84,
    },
    {
      title: "Vitamin B1",
      amount: "0.25mg",
      indented: false,
      percentOfDailyNeeds: 16.93,
    },
    {
      title: "Iron",
      amount: "2mg",
      indented: false,
      percentOfDailyNeeds: 14.92,
    },
    {
      title: "Potassium",
      amount: "490mg",
      indented: false,
      percentOfDailyNeeds: 14,
    },
    {
      title: "Calcium",
      amount: "132mg",
      indented: false,
      percentOfDailyNeeds: 13.28,
    },
    {
      title: "Vitamin B3",
      amount: "2mg",
      indented: false,
      percentOfDailyNeeds: 12.62,
    },
    {
      title: "Zinc",
      amount: "1mg",
      indented: false,
      percentOfDailyNeeds: 11.3,
    },
    {
      title: "Vitamin B5",
      amount: "0.96mg",
      indented: false,
      percentOfDailyNeeds: 9.62,
    },
    {
      title: "Vitamin A",
      amount: "445IU",
      indented: false,
      percentOfDailyNeeds: 8.92,
    },
    {
      title: "Vitamin B2",
      amount: "0.15mg",
      indented: false,
      percentOfDailyNeeds: 8.55,
    },
    {
      title: "Selenium",
      amount: "4µg",
      indented: false,
      percentOfDailyNeeds: 6.42,
    },
    {
      title: "Vitamin E",
      amount: "0.42mg",
      indented: false,
      percentOfDailyNeeds: 2.82,
    },
  ],
  expires: 1634865343957,
  isStale: true,
};
