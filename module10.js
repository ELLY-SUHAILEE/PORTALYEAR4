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
      "options": ["A) He has got a severe stomach-ache", "B) He has a broken arm", "C) He has an earache"],
      "ans": "A) He has got a severe stomach-ache"
    },
    {
      "type": "mcq",
      "q": "2. Why did Imran get a stomach-ache after the party?",
      "options": ["A) He ate too many sweets, chocolates, and junk food", "B) He drank cold water", "C) He ran too fast"],
      "ans": "A) He ate too many sweets, chocolates, and junk food"
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
      "options": ["A) Play outside in the hot sun", "B) Drink warm water", "C) Take a rest in bed"],
      "ans": "A) Play outside in the hot sun"
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
      "options": ["A) She fell down and broke her arm", "B) She cut her finger with paper", "C) She got a toothache"],
      "ans": "A) She fell down and broke her arm"
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
      "options": ["A) Visit the dentist immediately", "B) Eat ice cream", "C) Chew hard sweets"],
      "ans": "A) Visit the dentist immediately"
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
      "options": ["A) Never play with matches or sharp knives", "B) Run fast on wet kitchen floors", "C) Touch hot irons"],
      "ans": "A) Never play with matches or sharp knives"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Continuous pain in the head is called a ______.",
      "options": ["A) headache", "B) toothache", "C) stomach-ache"],
      "ans": "A) headache"
    },
    {
      "type": "mcq",
      "q": "12. Pain caused by a bad tooth or cavity is a ______.",
      "options": ["A) toothache", "B) sore throat", "C) cough"],
      "ans": "A) toothache"
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
      "options": ["A) plaster", "B) blanket", "C) tissue"],
      "ans": "A) plaster"
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
      "options": ["A) should", "B) shouldn't", "C) mustn't"],
      "ans": "A) should"
    },
    {
      "type": "mcq",
      "q": "17. He has a toothache. He ______ eat sweets.",
      "options": ["A) shouldn't", "B) should", "C) can"],
      "ans": "A) shouldn't"
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
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "20. You ______ touch the hot stove; you will burn your hand.",
      "options": ["A) shouldn't", "B) should", "C) must"],
      "ans": "A) shouldn't"
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
      "options": ["A) You should visit the dentist.", "B) You visit should the dentist.", "C) Dentist should visit you."],
      "ans": "A) You should visit the dentist."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ What's / matter / the / with / him / ? ]",
      "options": ["A) What's the matter with him?", "B) What's with him the matter?", "C) The matter what's with him?"],
      "ans": "A) What's the matter with him?"
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
      "options": ["A) I've got a stomach-ache.", "B) I am going home.", "C) It is three o'clock."],
      "ans": "A) I've got a stomach-ache."
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
      "options": ["A) No, you shouldn't. Drink warm water.", "B) Yes, drink lots of ice water.", "C) Ice cream is good for a cough."],
      "ans": "A) No, you shouldn't. Drink warm water."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_28.png"),
      "q": "28. Read the medicine label. How many spoons of syrup should a child take daily?",
      "options": ["A) One spoon, twice a day after meals", "B) Five spoons before bed", "C) The whole bottle at once"],
      "ans": "A) One spoon, twice a day after meals"
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
      "options": ["A) Run cool tap water over it", "B) Put hot water on it", "C) Cover it with sugar"],
      "ans": "A) Run cool tap water over it"
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
      "options": ["A) headache", "B) kite", "C) ball"],
      "ans": "A) headache"
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
      "options": ["A) medicine", "B) sweets", "C) ice cream"],
      "ans": "A) medicine"
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
      "options": ["A) better", "B) worse", "C) angry"],
      "ans": "A) better"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: At the Dentist) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_6.png"),
      "q": "6. May has a ____.",
      "options": ["A) toothache", "B) fever", "C) cut"],
      "ans": "A) toothache"
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
      "options": ["A) sweets", "B) apples", "C) carrots"],
      "ans": "A) sweets"
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
      "options": ["A) clean", "B) dirty", "C) black"],
      "ans": "A) clean"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Head hurts: ______.",
      "options": ["A) headache", "B) arm", "C) shoe"],
      "ans": "A) headache"
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
      "options": ["A) plaster", "B) book", "C) pen"],
      "ans": "A) plaster"
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
      "options": ["A) dentist", "B) cook", "C) pilot"],
      "ans": "A) dentist"
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
      "options": ["A) shouldn't", "B) should", "C) can"],
      "ans": "A) shouldn't"
    },
    {
      "type": "mcq",
      "q": "18. I ______ got a fever.",
      "options": ["A) have", "B) has", "C) am"],
      "ans": "A) have"
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
      "options": ["A) matter", "B) thing", "C) problem"],
      "ans": "A) matter"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Fever", "B) Feever", "C) Fiver"],
      "ans": "A) Fever"
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
      "options": ["A) Cough", "B) Cauf", "C) Cougth"],
      "ans": "A) Cough"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Rest / in bed ]",
      "options": ["A) Rest in bed.", "B) In bed rest.", "C) Bed in rest."],
      "ans": "A) Rest in bed."
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
      "options": ["A) Yes, I am.", "B) Yes, I do.", "C) Yes, I can."],
      "ans": "A) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. Should I sleep?",
      "options": ["A) Yes, you should.", "B) No, you are.", "C) Yes, you do."],
      "ans": "A) Yes, you should."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_28.png"),
      "q": "28. Look at the picture. What is wrong with the boy?",
      "options": ["A) He has a stomach-ache.", "B) He is happy.", "C) He is running."],
      "ans": "A) He has a stomach-ache."
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
      "options": ["A) At the dentist", "B) At school", "C) At the park"],
      "ans": "A) At the dentist"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 10: What's the matter?"] = remedialModule10Data;
window.quizBank["REMEDIAL SET"]["Remedial 10 - What's the matter?"] = remedialModule10Data;
