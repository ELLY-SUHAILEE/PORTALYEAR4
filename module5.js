// Memastikan pangkalan data global wujud tanpa memadam data sedia ada
window.quizBank = window.quizBank || {};
window.quizBank["GET SMART SET"] = window.quizBank["GET SMART SET"] || {};
window.quizBank["REMEDIAL SET"] = window.quizBank["REMEDIAL SET"] || {};

// Fungsi pembantu gambar secara selamat
if (typeof window.wrapCenterImage !== 'function') {
  window.wrapCenterImage = function(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
  };
}

// ==========================================
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 5)
// ==========================================
const getSmartModule5Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Sarah's Healthy Lunchbox) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_1.png"),
      "q": "1. What does Sarah pack in her lunchbox for school?",
      "options": ["A) A sandwich, a red apple, and a carton of milk", "B) Potato chips, chocolate bars, and fizzy soda", "C) Fried chicken, French fries, and ice cream"],
      "ans": "A) A sandwich, a red apple, and a carton of milk"
    },
    {
      "type": "mcq",
      "q": "2. Why does Sarah avoid drinking too many sugary sodas?",
      "options": ["A) Because sodas are not good for her teeth and health", "B) Because she does not like cold drinks", "C) Because sodas are too expensive"],
      "ans": "A) Because sodas are not good for her teeth and health"
    },
    {
      "type": "mcq",
      "q": "3. How much water does Sarah drink every day?",
      "options": ["A) Only one small glass", "B) At least eight glasses of water", "C) No water at all"],
      "ans": "B) At least eight glasses of water"
    },
    {
      "type": "mcq",
      "q": "4. What snack does Sarah eat when she feels hungry in the afternoon?",
      "options": ["A) A bowl of fresh fruits", "B) A bag of salty crisps", "C) A piece of sweet cake"],
      "ans": "A) A bowl of fresh fruits"
    },
    {
      "type": "mcq",
      "q": "5. What is the main message of Sarah's daily diet?",
      "options": ["A) Skip breakfast every day", "B) Eat balanced meals with plenty of fruits and water", "C) Eat fast food for dinner every night"],
      "ans": "B) Eat balanced meals with plenty of fruits and water"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Making a Fresh Fruit Salad) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_6.png"),
      "q": "6. What ingredients are needed to make Tom's fruit salad?",
      "options": ["A) Bananas, strawberries, apples, and natural yogurt", "B) Rice, chicken, carrots, and cabbage", "C) Chocolate, butter, flour, and sugar"],
      "ans": "A) Bananas, strawberries, apples, and natural yogurt"
    },
    {
      "type": "mcq",
      "q": "7. How many bananas does Tom slice into the mixing bowl?",
      "options": ["A) Five whole bananas", "B) Two ripe bananas", "C) Ten green bananas"],
      "ans": "B) Two ripe bananas"
    },
    {
      "type": "mcq",
      "q": "8. What does Tom add at the end to make the fruit salad creamy?",
      "options": ["A) A spoonful of natural yogurt", "B) A cup of olive oil", "C) Hot chocolate syrup"],
      "ans": "A) A spoonful of natural yogurt"
    },
    {
      "type": "mcq",
      "q": "9. Why is fruit salad a healthy dessert option?",
      "options": ["A) It contains high amounts of refined sugar", "B) It is packed with vitamins and natural fiber", "C) It is fried in heavy vegetable oil"],
      "ans": "B) It is packed with vitamins and natural fiber"
    },
    {
      "type": "mcq",
      "q": "10. Which step should Tom do before cutting the fruits?",
      "options": ["A) Wash the fruits thoroughly with clean water", "B) Freeze the fruits overnight", "C) Add sugar directly onto the unpeeled skin"],
      "ans": "A) Wash the fruits thoroughly with clean water"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A liquid dairy drink rich in calcium is ______.",
      "options": ["A) milk", "B) flour", "C) oil"],
      "ans": "A) milk"
    },
    {
      "type": "mcq",
      "q": "12. Small, sweet red berries with seeds on the outside are ______.",
      "options": ["A) grapes", "B) strawberries", "C) pineapples"],
      "ans": "B) strawberries"
    },
    {
      "type": "mcq",
      "q": "13. Food items like lettuce, carrots, and cucumbers belong to the ______ group.",
      "options": ["A) sweets", "B) dairy", "C) vegetables"],
      "ans": "C) vegetables"
    },
    {
      "type": "mcq",
      "q": "14. A container made of paperboard used for holding milk or juice is a ______.",
      "options": ["A) carton", "B) cup", "C) plate"],
      "ans": "A) carton"
    },
    {
      "type": "mcq",
      "q": "15. Crunchy, thin slices of fried potato often sold in small bags are ______.",
      "options": ["A) crisps", "B) noodles", "C) pancakes"],
      "ans": "A) crisps"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How ______ milk is there in the fridge?",
      "options": ["A) many", "B) much", "C) any"],
      "ans": "B) much"
    },
    {
      "type": "mcq",
      "q": "17. How ______ apples do we need for the fruit salad?",
      "options": ["A) much", "B) any", "C) many"],
      "ans": "C) many"
    },
    {
      "type": "mcq",
      "q": "18. There isn't ______ sugar left in the bowl.",
      "options": ["A) any", "B) some", "C) many"],
      "ans": "A) any"
    },
    {
      "type": "mcq",
      "q": "19. Would you like ______ fresh orange juice with your meal?",
      "options": ["A) any", "B) some", "C) many"],
      "ans": "B) some"
    },
    {
      "type": "mcq",
      "q": "20. There ______ a few bananas on the dining table.",
      "options": ["A) is", "B) are", "C) was"],
      "ans": "B) are"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) We need some apples milk and bread.", "B) We need some apples, milk, and bread.", "C) we need some apples, milk and bread."],
      "ans": "B) We need some apples, milk, and bread."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ much / How / water / drink / you / do / ? ]",
      "options": ["A) How much water do you drink?", "B) How water much do you drink?", "C) Do you drink how much water?"],
      "ans": "A) How much water do you drink?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ are / There / apples / some / the / in / basket / . ]",
      "options": ["A) There are some apples in the basket.", "B) Some apples are there in the basket.", "C) In the basket are there some apples."],
      "ans": "A) There are some apples in the basket."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Vegeatables", "B) Vegetables", "C) Vegtables"],
      "ans": "B) Vegetables"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'How much water do you drink every day?' How do you answer?",
      "options": ["A) I drink six to eight glasses a day.", "B) Yes, I like drinking water.", "C) Water is clear and cold."],
      "ans": "A) I drink six to eight glasses a day."
    },
    {
      "type": "mcq",
      "q": "26. A waiter asks: 'Would you like some fruit juice?' How do you reply politely?",
      "options": ["A) Yes, please. I would like orange juice.", "B) No, I am ten years old.", "C) Juice is made from fruits."],
      "ans": "A) Yes, please. I would like orange juice."
    },
    {
      "type": "mcq",
      "q": "27. Your friend asks: 'Are there any biscuits in the tin?' How do you answer?",
      "options": ["A) No, there aren't any left.", "B) Yes, it is a tin.", "C) Biscuits are sweet."],
      "ans": "A) No, there aren't any left."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_28.png"),
      "q": "28. Look at the Food Pyramid diagram. Which food group should we eat the most?",
      "options": ["A) Fats, oils, and sweets", "B) Rice, grains, and bread", "C) Meat and poultry"],
      "ans": "B) Rice, grains, and bread"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_29.png"),
      "q": "29. Read the grocery shopping list. Which item is UNCOUNTABLE?",
      "options": ["A) Milk", "B) Eggs", "C) Apples"],
      "ans": "A) Milk"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_30.png"),
      "q": "30. Look at the nutrition label. How many grams of sugar are in one serving?",
      "options": ["A) 5 grams", "B) 12 grams", "C) 25 grams"],
      "ans": "A) 5 grams"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 5: Eating right"] = getSmartModule5Data;
window.quizBank["GET SMART SET"]["Module 5 - Eating right"] = getSmartModule5Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 5)
// ==========================================
const remedialModule5Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Healthy Food) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_1.png"),
      "q": "1. Apples and oranges are ____.",
      "options": ["A) fruits", "B) toys", "C) clothes"],
      "ans": "A) fruits"
    },
    {
      "type": "mcq",
      "q": "2. We should drink plenty of ____.",
      "options": ["A) oil", "B) water", "C) soda"],
      "ans": "B) water"
    },
    {
      "type": "mcq",
      "q": "3. Carrots are good for our ____.",
      "options": ["A) eyes", "B) hair", "C) shoes"],
      "ans": "A) eyes"
    },
    {
      "type": "mcq",
      "q": "4. Milk makes our bones ____.",
      "options": ["A) weak", "B) strong", "C) small"],
      "ans": "B) strong"
    },
    {
      "type": "mcq",
      "q": "5. Eating fruits makes us ____.",
      "options": ["A) healthy", "B) sick", "C) sad"],
      "ans": "A) healthy"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Tim's Breakfast) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_6.png"),
      "q": "6. Tim eats ____ for breakfast.",
      "options": ["A) bread and eggs", "B) ice cream", "C) candy"],
      "ans": "A) bread and eggs"
    },
    {
      "type": "mcq",
      "q": "7. Tim drinks a glass of ____.",
      "options": ["A) milk", "B) ink", "C) oil"],
      "ans": "A) milk"
    },
    {
      "type": "mcq",
      "q": "8. Breakfast gives Tim ____.",
      "options": ["A) energy", "B) sleep", "C) homework"],
      "ans": "A) energy"
    },
    {
      "type": "mcq",
      "q": "9. Tim goes to school at ____.",
      "options": ["A) 7:30 AM", "B) 10:00 PM", "C) 12:00 AM"],
      "ans": "A) 7:30 AM"
    },
    {
      "type": "mcq",
      "q": "10. Tim is a ____ boy.",
      "options": ["A) healthy", "B) lazy", "C) dirty"],
      "ans": "A) healthy"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Red round fruit: ______.",
      "options": ["A) Apple", "B) Egg", "C) Milk"],
      "ans": "A) Apple"
    },
    {
      "type": "mcq",
      "q": "12. White drink from cows: ______.",
      "options": ["A) Milk", "B) Water", "C) Juice"],
      "ans": "A) Milk"
    },
    {
      "type": "mcq",
      "q": "13. Long yellow fruit: ______.",
      "options": ["A) Banana", "B) Carrot", "C) Mango"],
      "ans": "A) Banana"
    },
    {
      "type": "mcq",
      "q": "14. Orange vegetable: ______.",
      "options": ["A) Carrot", "B) Apple", "C) Bread"],
      "ans": "A) Carrot"
    },
    {
      "type": "mcq",
      "q": "15. Sweet food item: ______.",
      "options": ["A) Chocolate", "B) Salt", "C) Water"],
      "ans": "A) Chocolate"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How ______ apples are there?",
      "options": ["A) many", "B) much", "C) any"],
      "ans": "A) many"
    },
    {
      "type": "mcq",
      "q": "17. How ______ milk is in the cup?",
      "options": ["A) much", "B) many", "C) count"],
      "ans": "A) much"
    },
    {
      "type": "mcq",
      "q": "18. There is ______ milk in the bottle.",
      "options": ["A) some", "B) many", "C) two"],
      "ans": "A) some"
    },
    {
      "type": "mcq",
      "q": "19. Are there ______ bananas left?",
      "options": ["A) any", "B) much", "C) some"],
      "ans": "A) any"
    },
    {
      "type": "mcq",
      "q": "20. There ______ an apple on the table.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Milk", "B) Melk", "C) Milck"],
      "ans": "A) Milk"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ I drink / water. ]",
      "options": ["A) Water I drink.", "B) I drink water.", "C) Drink I water."],
      "ans": "B) I drink water."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Fruit", "B) Froot", "C) Fruite"],
      "ans": "A) Fruit"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Eat / healthy food. ]",
      "options": ["A) Healthy food eat.", "B) Eat healthy food.", "C) Food eat healthy."],
      "ans": "B) Eat healthy food."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Do you like apples?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "26. Would you like some water?",
      "options": ["A) Yes, please.", "B) No, I am ten.", "C) I am fine."],
      "ans": "A) Yes, please."
    },
    {
      "type": "mcq",
      "q": "27. How much milk do you drink?",
      "options": ["A) One glass.", "B) Two apples.", "C) Five bananas."],
      "ans": "A) One glass."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_28.png"),
      "q": "28. Look at the picture. What fruit is this?",
      "options": ["A) Banana", "B) Apple", "C) Orange"],
      "ans": "A) Banana"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_29.png"),
      "q": "29. Look at the picture. What drink is this?",
      "options": ["A) Milk", "B) Tea", "C) Soda"],
      "ans": "A) Milk"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_30.png"),
      "q": "30. Look at the picture. Is this healthy food?",
      "options": ["A) Yes, it is.", "B) No, it isn't.", "C) Maybe."],
      "ans": "A) Yes, it is."
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 5: Eating right"] = remedialModule5Data;
window.quizBank["REMEDIAL SET"]["Remedial 5 - Eating right"] = remedialModule5Data;
