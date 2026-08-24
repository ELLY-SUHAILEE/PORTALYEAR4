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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 7)
// ==========================================
const getSmartModule7Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: School Recycling Campaign) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_1.png"),
      "q": "1. What items are pupils collecting for the school recycling drive?",
      "options": ["A) Paper, plastic bottles, and aluminum cans", "B) Leftover food and fruit peels", "C) Old shoes and electronic computers"],
      "ans": "A) Paper, plastic bottles, and aluminum cans"
    },
    {
      "type": "mcq",
      "q": "2. Where should pupils throw old newspapers and cardboard boxes?",
      "options": ["A) Into the green bin", "B) Into the blue recycling bin", "C) Into the orange bin"],
      "ans": "B) Into the blue recycling bin"
    },
    {
      "type": "mcq",
      "q": "3. What do students do with wearable old clothes instead of throwing them away?",
      "options": ["A) Burn them in the field", "B) Throw them into the river", "C) Donate them to charity organizations"],
      "ans": "C) Donate them to charity organizations"
    },
    {
      "type": "mcq",
      "q": "4. How does recycling waste materials help our environment?",
      "options": ["A) It reduces trash in landfills and saves natural resources", "B) It makes the weather colder", "C) It uses more electricity"],
      "ans": "A) It reduces trash in landfills and saves natural resources"
    },
    {
      "type": "mcq",
      "q": "5. What is the main goal of the eco-club's campaign?",
      "options": ["A) To sell toys for money", "B) To encourage students to keep their school clean and green", "C) To buy new plastic bottles"],
      "ans": "B) To encourage students to keep their school clean and green"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Helping Elderly Neighbors) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_6.png"),
      "q": "6. How do Adam and his friends help old Mr. Lee on weekends?",
      "options": ["A) They carry heavy groceries and sweep his front yard", "B) They watch television in his living room", "C) They play football inside his house"],
      "ans": "A) They carry heavy groceries and sweep his front yard"
    },
    {
      "type": "mcq",
      "q": "7. Why does Mr. Lee need help around his house?",
      "options": ["A) He is elderly and finds it hard to lift heavy objects", "B) He is away on holiday", "C) He does not like working"],
      "ans": "A) He is elderly and finds it hard to lift heavy objects"
    },
    {
      "type": "mcq",
      "q": "8. What does Mr. Lee serve the children as a thank-you gesture?",
      "options": ["A) Cold lemonade and homemade biscuits", "B) Hot spicy soup", "C) Fast food burgers"],
      "ans": "A) Cold lemonade and homemade biscuits"
    },
    {
      "type": "mcq",
      "q": "9. How do Adam and his friends feel after completing the chores?",
      "options": ["A) Tired and angry", "B) Happy and satisfied to help someone in need", "C) Bored and sleepy"],
      "ans": "B) Happy and satisfied to help someone in need"
    },
    {
      "type": "mcq",
      "q": "10. What moral lesson can be learned from the story?",
      "options": ["A) We should always show kindness and help our neighbors", "B) We should only help people for money", "C) Helping others is a waste of time"],
      "ans": "A) We should always show kindness and help our neighbors"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The process of converting waste materials into new reusable items is ______.",
      "options": ["A) recycling", "B) polluting", "C) wasting"],
      "ans": "A) recycling"
    },
    {
      "type": "mcq",
      "q": "12. Giving away money, clothes, or food to help those in need is to ______.",
      "options": ["A) borrow", "B) donate", "C) purchase"],
      "ans": "B) donate"
    },
    {
      "type": "mcq",
      "q": "13. Waste or discarded items that people throw away are called ______.",
      "options": ["A) treasure", "B) rubbish", "C) furniture"],
      "ans": "B) rubbish"
    },
    {
      "type": "mcq",
      "q": "14. Using an item multiple times instead of discarding it after one use means to ______ it.",
      "options": ["A) reuse", "B) ruin", "C) break"],
      "ans": "A) reuse"
    },
    {
      "type": "mcq",
      "q": "15. A person who offers to do work without expecting payment is a ______.",
      "options": ["A) manager", "B) customer", "C) volunteer"],
      "ans": "C) volunteer"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Is there ______ who can help me pick up these heavy recycling boxes?",
      "options": ["A) anyone", "B) no one", "C) somewhere"],
      "ans": "A) anyone"
    },
    {
      "type": "mcq",
      "q": "17. Look! ______ left a large bag of plastic bottles near the recycling bin.",
      "options": ["A) Someone", "B) Anything", "C) Anywhere"],
      "ans": "A) Someone"
    },
    {
      "type": "mcq",
      "q": "18. There is ______ inside the bin; it is completely empty.",
      "options": ["A) everything", "B) nothing", "C) someone"],
      "ans": "B) nothing"
    },
    {
      "type": "mcq",
      "q": "19. We worked together, so ______ in the park is now clean.",
      "options": ["A) everything", "B) nothing", "C) anyone"],
      "ans": "A) everything"
    },
    {
      "type": "mcq",
      "q": "20. ______ likes to live in a neighborhood filled with trash and dirt.",
      "options": ["A) No one", "B) Someone", "C) Everything"],
      "ans": "A) No one"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) We must recycle paper, glass, and plastic.", "B) we must recycle paper glass and plastic.", "C) We must Recycle paper, glass and plastic"],
      "ans": "A) We must recycle paper, glass, and plastic."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ recycle / should / We / paper / and / plastic / . ]",
      "options": ["A) We should recycle paper and plastic.", "B) Recycle we should paper and plastic.", "C) Paper and plastic we should recycle."],
      "ans": "A) We should recycle paper and plastic."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ helping / Is / clean / anyone / park / the / ? ]",
      "options": ["A) Is anyone helping clean the park?", "B) Anyone is helping clean the park?", "C) Clean the park is anyone helping?"],
      "ans": "A) Is anyone helping clean the park?"
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Recycling", "B) Recikling", "C) Recycleng"],
      "ans": "A) Recycling"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Can you help me carry these recycling bags?' How do you answer?",
      "options": ["A) Sure, I would be happy to help!", "B) I like eating apples.", "C) Recycling bins are colourful."],
      "ans": "A) Sure, I would be happy to help!"
    },
    {
      "type": "mcq",
      "q": "26. Your friend asks: 'Where should I throw this glass bottle?' How do you reply?",
      "options": ["A) Put it into the green recycling bin.", "B) Glass is smooth.", "C) It is three o'clock."],
      "ans": "A) Put it into the green recycling bin."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Is there anything left to clean in the yard?' How do you reply?",
      "options": ["A) No, everything is clean now.", "B) Yes, I am ten years old.", "C) The yard is big."],
      "ans": "A) No, everything is clean now."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_28.png"),
      "q": "28. Look at the recycling bins image. Which bin color is used for paper?",
      "options": ["A) Blue", "B) Green", "C) Orange"],
      "ans": "A) Blue"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_29.png"),
      "q": "29. Read the cleanup poster. What activity is taking place this Saturday?",
      "options": ["A) Park Cleanup Campaign", "B) Singing Competition", "C) Book Fair"],
      "ans": "A) Park Cleanup Campaign"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_30.png"),
      "q": "30. Look at the donation box image. What items should be placed in this box?",
      "options": ["A) Old clothes and toys", "B) Wet food waste", "C) Broken glass"],
      "ans": "A) Old clothes and toys"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 7: Helping out"] = getSmartModule7Data;
window.quizBank["GET SMART SET"]["Module 7 - Helping out"] = getSmartModule7Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 7)
// ==========================================
const remedialModule7Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Helping at Home) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_1.png"),
      "q": "1. Ali helps his mother at ____.",
      "options": ["A) home", "B) school", "C) the zoo"],
      "ans": "A) home"
    },
    {
      "type": "mcq",
      "q": "2. Ali picks up ____ from the floor.",
      "options": ["A) toys", "B) shoes", "C) rubbish"],
      "ans": "C) rubbish"
    },
    {
      "type": "mcq",
      "q": "3. Ali puts paper in the ____ bin.",
      "options": ["A) recycling", "B) food", "C) water"],
      "ans": "A) recycling"
    },
    {
      "type": "mcq",
      "q": "4. Ali's mother is very ____.",
      "options": ["A) happy", "B) sad", "C) angry"],
      "ans": "A) happy"
    },
    {
      "type": "mcq",
      "q": "5. Ali is a ____ boy.",
      "options": ["A) helpful", "B) lazy", "C) noisy"],
      "ans": "A) helpful"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Donating Toys) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_6.png"),
      "q": "6. Nina has many old ____.",
      "options": ["A) toys", "B) cars", "C) cats"],
      "ans": "A) toys"
    },
    {
      "type": "mcq",
      "q": "7. Nina does not throw them away. She ____ them.",
      "options": ["A) donates", "B) eats", "C) burns"],
      "ans": "A) donates"
    },
    {
      "type": "mcq",
      "q": "8. Nina gives toys to poor ____.",
      "options": ["A) children", "B) teachers", "C) birds"],
      "ans": "A) children"
    },
    {
      "type": "mcq",
      "q": "9. The children feel ____.",
      "options": ["A) joyful", "B) scared", "C) sick"],
      "ans": "A) joyful"
    },
    {
      "type": "mcq",
      "q": "10. Sharing is ____.",
      "options": ["A) caring", "B) bad", "C) hard"],
      "ans": "A) caring"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Put waste in the recycling ______.",
      "options": ["A) bin", "B) box", "C) bag"],
      "ans": "A) bin"
    },
    {
      "type": "mcq",
      "q": "12. Give away old things: ______.",
      "options": ["A) Donate", "B) Eat", "C) Sleep"],
      "ans": "A) Donate"
    },
    {
      "type": "mcq",
      "q": "13. Trash or garbage: ______.",
      "options": ["A) Rubbish", "B) Food", "C) Water"],
      "ans": "A) Rubbish"
    },
    {
      "type": "mcq",
      "q": "14. Material used to make bottles: ______.",
      "options": ["A) Plastic", "B) Wood", "C) Paper"],
      "ans": "A) Plastic"
    },
    {
      "type": "mcq",
      "q": "15. Material used to make books: ______.",
      "options": ["A) Paper", "B) Glass", "C) Metal"],
      "ans": "A) Paper"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Is there ______ in the box?",
      "options": ["A) anything", "B) someone", "C) no one"],
      "ans": "A) anything"
    },
    {
      "type": "mcq",
      "q": "17. ______ is helping to clean the room.",
      "options": ["A) Someone", "B) Nothing", "C) Anywhere"],
      "ans": "A) Someone"
    },
    {
      "type": "mcq",
      "q": "18. There is ______ in the bag. It is empty.",
      "options": ["A) nothing", "B) everything", "C) someone"],
      "ans": "A) nothing"
    },
    {
      "type": "mcq",
      "q": "19. We should ______ our trash.",
      "options": ["A) recycle", "B) recycling", "C) recycled"],
      "ans": "A) recycle"
    },
    {
      "type": "mcq",
      "q": "20. Can ______ help me?",
      "options": ["A) someone", "B) nothing", "C) everything"],
      "ans": "A) someone"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Rubbish", "B) Rabish", "C) Rubish"],
      "ans": "A) Rubbish"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Help / each other. ]",
      "options": ["A) Each other help.", "B) Help each other.", "C) Other help each."],
      "ans": "B) Help each other."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Recycle", "B) Resycle", "C) Recykel"],
      "ans": "A) Recycle"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Keep / the park clean. ]",
      "options": ["A) Keep the park clean.", "B) The park keep clean.", "C) Clean keep the park."],
      "ans": "A) Keep the park clean."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Can you help me clean?",
      "options": ["A) Yes, I can.", "B) Yes, I am.", "C) Yes, I do."],
      "ans": "A) Yes, I can."
    },
    {
      "type": "mcq",
      "q": "26. Where is the recycling bin?",
      "options": ["A) It is over there.", "B) It is red.", "C) I am ten."],
      "ans": "A) It is over there."
    },
    {
      "type": "mcq",
      "q": "27. Do you recycle paper?",
      "options": ["A) Yes, I do.", "B) Yes, I have.", "C) Yes, I am."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_28.png"),
      "q": "28. Look at the picture. What bin is this?",
      "options": ["A) Recycling bin", "B) Shoe box", "C) Water tank"],
      "ans": "A) Recycling bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_29.png"),
      "q": "29. Look at the picture. What is the boy doing?",
      "options": ["A) Picking up rubbish", "B) Sleeping", "C) Eating candy"],
      "ans": "A) Picking up rubbish"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_30.png"),
      "q": "30. Look at the picture. What items are inside the box?",
      "options": ["A) Old books", "B) Fresh fruits", "C) Hot food"],
      "ans": "A) Old books"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 7: Helping out"] = remedialModule7Data;
window.quizBank["REMEDIAL SET"]["Remedial 7 - Helping out"] = remedialModule7Data;
