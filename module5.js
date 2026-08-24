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
    // --- PETIKAN 1 (Soalan 1 - 5: Healthy Eating Habits) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_1.png"),
      "q": "1. Why is it important to eat fruits and vegetables every day?",
      "options": ["A) They contain vitamins that keep us healthy", "B) They have lots of sugar and fat", "C) They make us sleepy"],
      "ans": "A) They contain vitamins that keep us healthy"
    },
    {
      "type": "mcq",
      "q": "2. How many glasses of water should we drink each day?",
      "options": ["A) At least 6 to 8 glasses", "B) Only 1 glass", "C) 15 to 20 glasses"],
      "ans": "A) At least 6 to 8 glasses"
    },
    {
      "type": "mcq",
      "q": "3. What happens if we eat too many sweets and crisps?",
      "options": ["A) It can damage our teeth and health", "B) It makes our bones very strong", "C) It helps us run faster"],
      "ans": "A) It can damage our teeth and health"
    },
    {
      "type": "mcq",
      "q": "4. Which food group gives us energy to run and play?",
      "options": ["A) Carbohydrates like bread and rice", "B) Soft drinks", "C) Candy bars"],
      "ans": "A) Carbohydrates like bread and rice"
    },
    {
      "type": "mcq",
      "q": "5. What should we eat before going to school in the morning?",
      "options": ["A) A healthy breakfast", "B) A bag of potato chips", "C) Ice cream"],
      "ans": "A) A healthy breakfast"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Maya's Lunchbox) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_6.png"),
      "q": "6. What did Maya pack in her lunchbox today?",
      "options": ["A) A egg sandwich, an apple, and a bottle of milk", "B) A burger and fries", "C) Two chocolate bars"],
      "ans": "A) A egg sandwich, an apple, and a bottle of milk"
    },
    {
      "type": "mcq",
      "q": "7. Does Maya bring soft drinks to school?",
      "options": ["A) No, she prefers water and milk", "B) Yes, every day", "C) Only on Mondays"],
      "ans": "A) No, she prefers water and milk"
    },
    {
      "type": "mcq",
      "q": "8. What food item in Maya's lunchbox provides protein?",
      "options": ["A) The egg in her sandwich", "B) The apple", "C) The cucumber slices"],
      "ans": "A) The egg in her sandwich"
    },
    {
      "type": "mcq",
      "q": "9. Why does Maya's mother prepare homemade food for her?",
      "options": ["A) Because it is cleaner and healthier", "B) Because it is expensive", "C) Because canteen food is closed"],
      "ans": "A) Because it is cleaner and healthier"
    },
    {
      "type": "mcq",
      "q": "10. What healthy snack does Maya share with her friends at break time?",
      "options": ["A) Fresh fruit slices", "B) Salty crisps", "C) Sweet candies"],
      "ans": "A) Fresh fruit slices"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A tall glass or plastic container used for holding liquids like water or milk is a ______.",
      "options": ["A) bottle", "B) box", "C) bag"],
      "ans": "A) bottle"
    },
    {
      "type": "mcq",
      "q": "12. Crunchy thin slices of fried potato eaten as a snack are called ______.",
      "options": ["A) crisps / chips", "B) biscuits", "C) cereal"],
      "ans": "A) crisps / chips"
    },
    {
      "type": "mcq",
      "q": "13. A cardboard container used to hold milk or juice is called a ______.",
      "options": ["A) carton", "B) packet", "C) cup"],
      "ans": "A) carton"
    },
    {
      "type": "mcq",
      "q": "14. Small dry sweet baked cakes, usually flat, are called ______.",
      "options": ["A) biscuits", "B) vegetables", "C) noodles"],
      "ans": "A) biscuits"
    },
    {
      "type": "mcq",
      "q": "15. A food made from grain eaten usually with milk for breakfast is ______.",
      "options": ["A) cereal", "B) soup", "C) salad"],
      "ans": "A) cereal"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How ______ milk do you drink every day?",
      "options": ["A) much", "B) many", "C) number"],
      "ans": "A) much"
    },
    {
      "type": "mcq",
      "q": "17. How ______ apples are there in the basket?",
      "options": ["A) many", "B) much", "C) size"],
      "ans": "A) many"
    },
    {
      "type": "mcq",
      "q": "18. You ______ eat too much sugar; it is bad for your teeth.",
      "options": ["A) shouldn't", "B) should", "C) must"],
      "ans": "A) shouldn't"
    },
    {
      "type": "mcq",
      "q": "19. We need a ______ of cereal for breakfast.",
      "options": ["A) box", "B) bottle", "C) glass"],
      "ans": "A) box"
    },
    {
      "type": "mcq",
      "q": "20. There is ______ water left in the jug.",
      "options": ["A) some", "B) many", "C) a few"],
      "ans": "A) some"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) You should drink plenty of water.", "B) you should drink plenty of water.", "C) You should drink plenty of water"],
      "ans": "A) You should drink plenty of water."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ water / How much / do you / drink ]",
      "options": ["A) How much water do you drink?", "B) Water do you drink how much?", "C) How do you drink much water?"],
      "ans": "A) How much water do you drink?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ eat / shouldn't / You / junk food / too much ]",
      "options": ["A) You shouldn't eat too much junk food.", "B) Too much junk food you shouldn't eat.", "C) You junk food shouldn't eat too much."],
      "ans": "A) You shouldn't eat too much junk food."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Vegetables", "B) Vegetabels", "C) Vegtables"],
      "ans": "A) Vegetables"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'How much water do you drink daily?' How do you answer?",
      "options": ["A) I drink about six glasses a day.", "B) I drink water in the room.", "C) Water is blue."],
      "ans": "A) I drink about six glasses a day."
    },
    {
      "type": "mcq",
      "q": "26. How do you advise a friend who eats too many sweets?",
      "options": ["A) You shouldn't eat so many sweets.", "B) You should eat more sweets.", "C) Sweets are very cheap."],
      "ans": "A) You shouldn't eat so many sweets."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Would you like a packet of crisps?' How do you decline politely?",
      "options": ["A) No, thank you. I am trying to eat healthy.", "B) No, I hate bags.", "C) Yes, I am 10 years old."],
      "ans": "A) No, thank you. I am trying to eat healthy."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_28.png"),
      "q": "28. Read the food pyramid chart. Which level should we eat the MOST of?",
      "options": ["A) Grains, fruits, and vegetables", "B) Sweets and fats", "C) Meat and dairy"],
      "ans": "A) Grains, fruits, and vegetables"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_29.png"),
      "q": "29. Read the canteen poster. How much is a bottle of mineral water?",
      "options": ["A) RM 1.00", "B) RM 3.50", "C) RM 5.00"],
      "ans": "A) RM 1.00"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_30.png"),
      "q": "30. Read the nutrition label. How many grams of sugar are in one serving?",
      "options": ["A) 5 grams", "B) 25 grams", "C) 50 grams"],
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
    // --- PETIKAN 1 (Soalan 1 - 5: Healthy Snacks) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_1.png"),
      "q": "1. Apples and bananas are ____.",
      "options": ["A) fruits", "B) toys", "C) sweets"],
      "ans": "A) fruits"
    },
    {
      "type": "mcq",
      "q": "2. We should drink ____ every day.",
      "options": ["A) water", "B) cola", "C) ink"],
      "ans": "A) water"
    },
    {
      "type": "mcq",
      "q": "3. Fruits are good for our ____.",
      "options": ["A) health", "B) clothes", "C) shoes"],
      "ans": "A) health"
    },
    {
      "type": "mcq",
      "q": "4. Candy has a lot of ____.",
      "options": ["A) sugar", "B) water", "C) salt"],
      "ans": "A) sugar"
    },
    {
      "type": "mcq",
      "q": "5. Eating well makes us feel ____.",
      "options": ["A) strong", "B) sick", "C) sad"],
      "ans": "A) strong"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Breakfast) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_6.png"),
      "q": "6. Ali eats cereal with ____.",
      "options": ["A) milk", "B) oil", "C) soup"],
      "ans": "A) milk"
    },
    {
      "type": "mcq",
      "q": "7. When does Ali eat cereal?",
      "options": ["A) In the morning", "B) At night", "C) At school"],
      "ans": "A) In the morning"
    },
    {
      "type": "mcq",
      "q": "8. Cereal is a good ____.",
      "options": ["A) breakfast", "B) dinner", "C) lunch"],
      "ans": "A) breakfast"
    },
    {
      "type": "mcq",
      "q": "9. Cereal comes in a ____.",
      "options": ["A) box", "B) bottle", "C) cup"],
      "ans": "A) box"
    },
    {
      "type": "mcq",
      "q": "10. Who eats cereal for breakfast?",
      "options": ["A) Ali", "B) John", "C) Sara"],
      "ans": "A) Ali"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A bottle of ______.",
      "options": ["A) water", "B) cereal", "C) chips"],
      "ans": "A) water"
    },
    {
      "type": "mcq",
      "q": "12. A box of ______.",
      "options": ["A) cereal", "B) milk", "C) water"],
      "ans": "A) cereal"
    },
    {
      "type": "mcq",
      "q": "13. A packet of ______.",
      "options": ["A) biscuits", "B) milk", "C) juice"],
      "ans": "A) biscuits"
    },
    {
      "type": "mcq",
      "q": "14. A carton of ______.",
      "options": ["A) milk", "B) crisps", "C) apples"],
      "ans": "A) milk"
    },
    {
      "type": "mcq",
      "q": "15. Sweet food that damages teeth: ______.",
      "options": ["A) candy / sweets", "B) carrots", "C) apples"],
      "ans": "A) candy / sweets"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How ______ apples do you have?",
      "options": ["A) many", "B) much", "C) some"],
      "ans": "A) many"
    },
    {
      "type": "mcq",
      "q": "17. How ______ water do you drink?",
      "options": ["A) much", "B) many", "C) any"],
      "ans": "A) much"
    },
    {
      "type": "mcq",
      "q": "18. You ______ eat healthy food.",
      "options": ["A) should", "B) shouldn't", "C) don't"],
      "ans": "A) should"
    },
    {
      "type": "mcq",
      "q": "19. You ______ eat too much candy.",
      "options": ["A) shouldn't", "B) should", "C) must"],
      "ans": "A) shouldn't"
    },
    {
      "type": "mcq",
      "q": "20. I have ______ milk in my cup.",
      "options": ["A) some", "B) many", "C) two"],
      "ans": "A) some"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Water", "B) Wateer", "C) Watar"],
      "ans": "A) Water"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Drink / water / more ]",
      "options": ["A) Drink more water.", "B) Water more drink.", "C) More water drink."],
      "ans": "A) Drink more water."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Apple", "B) Apel", "C) Appell"],
      "ans": "A) Apple"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ I like / fruits ]",
      "options": ["A) I like fruits.", "B) Fruits I like.", "C) Like fruits I."],
      "ans": "A) I like fruits."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Do you drink milk?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I have."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "26. Is candy healthy?",
      "options": ["A) No, it isn't.", "B) Yes, it is.", "C) Yes, it can."],
      "ans": "A) No, it isn't."
    },
    {
      "type": "mcq",
      "q": "27. Would you like an apple?",
      "options": ["A) Yes, please.", "B) Yes, I am.", "C) No, I do."],
      "ans": "A) Yes, please."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_28.png"),
      "q": "28. Look at the picture. What food is this?",
      "options": ["A) Banana", "B) Milk", "C) Candy"],
      "ans": "A) Banana"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_29.png"),
      "q": "29. Look at the picture. Is this drink healthy?",
      "options": ["A) Yes, mineral water is healthy.", "B) No, it is bad.", "C) It is candy."],
      "ans": "A) Yes, mineral water is healthy."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_30.png"),
      "q": "30. Read the sign. How much is an orange?",
      "options": ["A) 50 sen", "B) RM 10", "C) RM 50"],
      "ans": "A) 50 sen"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 5: Eating right"] = remedialModule5Data;
window.quizBank["REMEDIAL SET"]["Remedial 5 - Eating right"] = remedialModule5Data;
