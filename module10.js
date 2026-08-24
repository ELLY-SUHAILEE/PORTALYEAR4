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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 10)
// ==========================================
const getSmartModule10Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Health Problems) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_1.png"),
      "q": "1. What is wrong with Imran today?",
      "options": ["A) He has a broken arm", "B) He has got a severe stomach-ache", "C) He has an earache"],
      "ans": "B) He has got a severe stomach-ache"
    },
    {
      "type": "mcq",
      "q": "2. Why did Imran get a stomach-ache after the party?",
      "options": ["A) He drank cold water", "B) He ran too fast", "C) He ate too many sweets, chocolates, and junk food"],
      "ans": "C) He ate too many sweets, chocolates, and junk food"
    },
    {
      "type": "mcq",
      "q": "3. What advice did the doctor give to Imran?",
      "options": ["A) Rest in bed and take some medicine", "B) Go outside and play football", "C) Eat more chocolates"],
      "ans": "A) Rest in bed and take some medicine"
    },
    {
      "type": "mcq",
      "q": "4. What shouldn't you do if you have a fever?",
      "options": ["A) Take a rest in bed", "B) Play outside in the hot sun", "C) Drink warm water"],
      "ans": "B) Play outside in the hot sun"
    },
    {
      "type": "mcq",
      "q": "5. Why should we wash our hands before eating?",
      "options": ["A) To remove germs and prevent getting sick", "B) To make our hands cold", "C) To dry our skin"],
      "ans": "A) To remove germs and prevent getting sick"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Staying Safe and Healthy) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_6.png"),
      "q": "6. What happened to Sarah while she was playing netball?",
      "options": ["A) She cut her finger with paper", "B) She got a toothache", "C) She fell down and broke her arm"],
      "ans": "C) She fell down and broke her arm"
    },
    {
      "type": "mcq",
      "q": "7. What did the doctor put on Sarah's broken arm?",
      "options": ["A) A hard cast", "B) A small plaster", "C) A warm towel"],
      "ans": "A) A hard cast"
    },
    {
      "type": "mcq",
      "q": "8. What should you do if you have a bad toothache?",
      "options": ["A) Eat ice cream", "B) Visit the dentist immediately", "C) Chew hard sweets"],
      "ans": "B) Visit the dentist immediately"
    },
    {
      "type": "mcq",
      "q": "9. How long should Sarah keep her cast on her arm?",
      "options": ["A) For about four weeks", "B) For two days", "C) For one year"],
      "ans": "A) For about four weeks"
    },
    {
      "type": "mcq",
      "q": "10. What safety measure prevents accidents at home?",
      "options": ["A) Run fast on wet kitchen floors", "B) Touch hot irons", "C) Never play with matches or sharp knives"],
      "ans": "C) Never play with matches or sharp knives"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Continuous pain in the head is called a ______.",
      "options": ["A) toothache", "B) headache", "C) stomach-ache"],
      "ans": "B) headache"
    },
    {
      "type": "mcq",
      "q": "12. Pain caused by a bad tooth or cavity is a ______.",
      "options": ["A) sore throat", "B) cough", "C) toothache"],
      "ans": "C) toothache"
    },
    {
      "type": "mcq",
      "q": "13. A hard bandage worn to support and protect broken bones is a ______.",
      "options": ["A) cast", "B) plaster", "C) thermometer"],
      "ans": "A) cast"
    },
    {
      "type": "mcq",
      "q": "14. A small sticky strip used to cover a minor cut on the finger is a ______.",
      "options": ["A) blanket", "B) plaster", "C) tissue"],
      "ans": "B) plaster"
    },
    {
      "type": "mcq",
      "q": "15. Pain inside the throat that hurts when swallowing is a ______.",
      "options": ["A) sore throat", "B) headache", "C) fever"],
      "ans": "A) sore throat"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. You have a fever. You ______ go to bed and rest.",
      "options": ["A) shouldn't", "B) should", "C) mustn't"],
      "ans": "B) should"
    },
    {
      "type": "mcq",
      "q": "17. He has a toothache. He ______ eat sweets.",
      "options": ["A) should", "B) can", "C) shouldn't"],
      "ans": "C) shouldn't"
    },
    {
      "type": "mcq",
      "q": "18. What's the matter? I ______ got a bad cough.",
      "options": ["A) have", "B) has", "C) am"],
      "ans": "A) have"
    },
    {
      "type": "mcq",
      "q": "19. She ______ got a sore throat today.",
      "options": ["A) have", "B) has", "C) is"],
      "ans": "B) has"
    },
    {
      "type": "mcq",
      "q": "20. You ______ touch the hot stove; you will burn your hand.",
      "options": ["A) should", "B) must", "C) shouldn't"],
      "ans": "C) shouldn't"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) You should drink warm tea when you have a sore throat.", "B) you should drink warm tea when you have a sore throat.", "C) You should drink warm tea when you have a sore throat"],
      "ans": "A) You should drink warm tea when you have a sore throat."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ should / You / visit / dentist / the / . ]",
      "options": ["A) You visit should the dentist.", "B) You should visit the dentist.", "C) Dentist should visit you."],
      "ans": "B) You should visit the dentist."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ What's / matter / the / with / him / ? ]",
      "options": ["A) What's with him the matter?", "B) The matter what's with him?", "C) What's the matter with him?"],
      "ans": "C) What's the matter with him?"
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Headache", "B) Hedache", "C) Headake"],
      "ans": "A) Headache"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'What's the matter?' How do you answer?",
      "options": ["A) I am going home.", "B) I've got a stomach-ache.", "C) It is three o'clock."],
      "ans": "B) I've got a stomach-ache."
    },
    {
      "type": "mcq",
      "q": "26. Your friend says: 'I have a head-ache.' What advice do you give?",
      "options": ["A) You should lie down and rest.", "B) You should run in the sun.", "C) You should listen to loud music."],
      "ans": "A) You should lie down and rest."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Should I drink cold water with a cough?' How do you reply?",
      "options": ["A) Yes, drink lots of ice water.", "B) Ice cream is good for a cough.", "C) No, you shouldn't. Drink warm water."],
      "ans": "C) No, you shouldn't. Drink warm water."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_28.png"),
      "q": "28. Read the medicine label. How many spoons of syrup should a child take daily?",
      "options": ["A) Five spoons before bed", "B) The whole bottle at once", "C) One spoon, twice a day after meals"],
      "ans": "C) One spoon, twice a day after meals"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_29.png"),
      "q": "29. Read the clinic notice. What are the clinic operating hours?",
      "options": ["A) 8:00 AM to 9:00 PM", "B) 12:00 AM to 1:00 AM", "C) Closed all day"],
      "ans": "A) 8:00 AM to 9:00 PM"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_30.png"),
      "q": "30. Read the first-aid guide. What is the first thing to do for a minor burn?",
      "options": ["A) Put hot water on it", "B) Run cool tap water over it", "C) Cover it with sugar"],
      "ans": "B) Run cool tap water over it"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 10: What's the matter?"] = getSmartModule10Data;
window.quizBank["GET SMART SET"]["Module 10 - What's the matter?"] = getSmartModule10Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 10)
// ==========================================
const remedialModule10Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Sick Day) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_1.png"),
      "q": "1. Tom has a ____.",
      "options": ["A) kite", "B) headache", "C) ball"],
      "ans": "B) headache"
    },
    {
      "type": "mcq",
      "q": "2. Tom should ____ in bed.",
      "options": ["A) rest", "B) run", "C) jump"],
      "ans": "A) rest"
    },
    {
      "type": "mcq",
      "q": "3. He takes ____ to feel better.",
      "options": ["A) sweets", "B) ice cream", "C) medicine"],
      "ans": "C) medicine"
    },
    {
      "type": "mcq",
      "q": "4. Who is sick?",
      "options": ["A) Tom", "B) Ali", "C) Sara"],
      "ans": "A) Tom"
    },
    {
      "type": "mcq",
      "q": "5. Tom feels ____ after resting.",
      "options": ["A) worse", "B) better", "C) angry"],
      "ans": "B) better"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: At the Dentist) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_6.png"),
      "q": "6. May has a ____.",
      "options": ["A) fever", "B) cut", "C) toothache"],
      "ans": "C) toothache"
    },
    {
      "type": "mcq",
      "q": "7. She goes to see the ____.",
      "options": ["A) dentist", "B) teacher", "C) driver"],
      "ans": "A) dentist"
    },
    {
      "type": "mcq",
      "q": "8. May shouldn't eat many ____.",
      "options": ["A) apples", "B) sweets", "C) carrots"],
      "ans": "B) sweets"
    },
    {
      "type": "mcq",
      "q": "9. Brush teeth ____ times a day.",
      "options": ["A) two", "B) ten", "C) zero"],
      "ans": "A) two"
    },
    {
      "type": "mcq",
      "q": "10. Teeth should be ____.",
      "options": ["A) dirty", "B) black", "C) clean"],
      "ans": "C) clean"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Head hurts: ______.",
      "options": ["A) arm", "B) headache", "C) shoe"],
      "ans": "B) headache"
    },
    {
      "type": "mcq",
      "q": "12. Tooth hurts: ______.",
      "options": ["A) toothache", "B) leg", "C) hat"],
      "ans": "A) toothache"
    },
    {
      "type": "mcq",
      "q": "13. Sticky tape for a cut: ______.",
      "options": ["A) book", "B) pen", "C) plaster"],
      "ans": "C) plaster"
    },
    {
      "type": "mcq",
      "q": "14. Hot body temperature: ______.",
      "options": ["A) fever", "B) cold", "C) water"],
      "ans": "A) fever"
    },
    {
      "type": "mcq",
      "q": "15. Doctor for teeth: ______.",
      "options": ["A) cook", "B) dentist", "C) pilot"],
      "ans": "B) dentist"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. You have a cold. You ______ rest.",
      "options": ["A) should", "B) shouldn't", "C) don't"],
      "ans": "A) should"
    },
    {
      "type": "mcq",
      "q": "17. You ______ eat sweets when your tooth hurts.",
      "options": ["A) should", "B) can", "C) shouldn't"],
      "ans": "C) shouldn't"
    },
    {
      "type": "mcq",
      "q": "18. I ______ got a fever.",
      "options": ["A) has", "B) have", "C) am"],
      "ans": "B) have"
    },
    {
      "type": "mcq",
      "q": "19. He ______ got a cough.",
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "20. What's the ______?",
      "options": ["A) thing", "B) problem", "C) matter"],
      "ans": "C) matter"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Feever", "B) Fever", "C) Fiver"],
      "ans": "B) Fever"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Go to / bed ]",
      "options": ["A) Go to bed.", "B) Bed go to.", "C) To bed go."],
      "ans": "A) Go to bed."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Cauf", "B) Cougth", "C) Cough"],
      "ans": "C) Cough"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Rest / in bed ]",
      "options": ["A) In bed rest.", "B) Rest in bed.", "C) Bed in rest."],
      "ans": "B) Rest in bed."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. What's the matter?",
      "options": ["A) I have a headache.", "B) I like cats.", "C) It's hot."],
      "ans": "A) I have a headache."
    },
    {
      "type": "mcq",
      "q": "26. Are you feeling sick?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "B) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. Should I sleep?",
      "options": ["A) No, you are.", "B) Yes, you do.", "C) Yes, you should."],
      "ans": "C) Yes, you should."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_28.png"),
      "q": "28. Look at the picture. What is wrong with the boy?",
      "options": ["A) He is happy.", "B) He has a stomach-ache.", "C) He is running."],
      "ans": "B) He has a stomach-ache."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_29.png"),
      "q": "29. Look at the picture. What is on her finger?",
      "options": ["A) Plaster", "B) Ring", "C) Glove"],
      "ans": "A) Plaster"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_30.png"),
      "q": "30. Look at the picture. Where is the girl?",
      "options": ["A) At school", "B) At the park", "C) At the dentist"],
      "ans": "C) At the dentist"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 10: What's the matter?"] = remedialModule10Data;
window.quizBank["REMEDIAL SET"]["Remedial 10 - What's the matter?"] = remedialModule10Data;
