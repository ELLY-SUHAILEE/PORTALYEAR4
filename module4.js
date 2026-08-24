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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 4)
// ==========================================
const getSmartModule4Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: National Day Celebrations) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_1.png"),
      "q": "1. When is National Day celebrated in Malaysia?",
      "options": ["A) 31st August", "B) 25th December", "C) 1st January"],
      "ans": "A) 31st August"
    },
    {
      "type": "mcq",
      "q": "2. What do people usually watch during National Day?",
      "options": ["A) A football match", "B) A grand parade", "C) A movie at the cinema"],
      "ans": "B) A grand parade"
    },
    {
      "type": "mcq",
      "q": "3. What do children proudly wave while watching the parade?",
      "options": ["A) National flags", "B) Colourful balloons", "C) Paper flowers"],
      "ans": "A) National flags"
    },
    {
      "type": "mcq",
      "q": "4. What do many people wear to celebrate this special holiday?",
      "options": ["A) School uniforms", "B) Traditional costumes", "C) Raincoats"],
      "ans": "B) Traditional costumes"
    },
    {
      "type": "mcq",
      "q": "5. What is the main purpose of celebrating National Day?",
      "options": ["A) To commemorate independence and show love for the country", "B) To buy new furniture", "C) To stay indoors and sleep all day"],
      "ans": "A) To commemorate independence and show love for the country"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Mei Ling's Birthday Party) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_6.png"),
      "q": "6. When is Mei Ling's birthday?",
      "options": ["A) 1st October", "B) 3rd November", "C) 12th December"],
      "ans": "B) 3rd November"
    },
    {
      "type": "mcq",
      "q": "7. What special theme did Mei Ling choose for her party?",
      "options": ["A) A costume party", "B) A pyjama party", "C) A sports day theme"],
      "ans": "A) A costume party"
    },
    {
      "type": "mcq",
      "q": "8. How old is Mei Ling turning on her birthday?",
      "options": ["A) Nine years old", "B) Ten years old", "C) Eleven years old"],
      "ans": "B) Ten years old"
    },
    {
      "type": "mcq",
      "q": "9. What do guests bring to celebrate with Mei Ling?",
      "options": ["A) School textbooks", "B) Presents and bright balloons", "C) Laptops and chargers"],
      "ans": "B) Presents and bright balloons"
    },
    {
      "type": "mcq",
      "q": "10. Which sentence about Mei Ling's party is true?",
      "options": ["A) It is celebrated in December", "B) Everyone must wear school uniforms", "C) Guests dress up in fun costumes"],
      "ans": "C) Guests dress up in fun costumes"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The month that comes right after October is ______.",
      "options": ["A) September", "B) November", "C) December"],
      "ans": "B) November"
    },
    {
      "type": "mcq",
      "q": "12. A public procession including marching bands and floats on special holidays is a ______.",
      "options": ["A) parade", "B) concert", "C) competition"],
      "ans": "A) parade"
    },
    {
      "type": "mcq",
      "q": "13. The ordinal number after 'fourth' is ______.",
      "options": ["A) third", "B) fifth", "C) sixth"],
      "ans": "B) fifth"
    },
    {
      "type": "mcq",
      "q": "14. Special clothes worn to look like a specific character or animal during a festival are ______.",
      "options": ["A) costumes", "B) aprons", "C) pyjamas"],
      "ans": "A) costumes"
    },
    {
      "type": "mcq",
      "q": "15. A joyful event organized to mark a special day or holiday is a ______.",
      "options": ["A) celebration", "B) chore", "C) timetable"],
      "ans": "A) celebration"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. National Day is ______ August 31st.",
      "options": ["A) in", "B) at", "C) on"],
      "ans": "C) on"
    },
    {
      "type": "mcq",
      "q": "17. My sister was born on the ______ of May.",
      "options": ["A) three", "B) third", "C) thirdly"],
      "ans": "B) third"
    },
    {
      "type": "mcq",
      "q": "18. When is ______ birthday? She was born in July.",
      "options": ["A) her", "B) his", "C) your"],
      "ans": "A) her"
    },
    {
      "type": "mcq",
      "q": "19. Monday is the ______ day of the school week.",
      "options": ["A) first", "B) second", "C) third"],
      "ans": "A) first"
    },
    {
      "type": "mcq",
      "q": "20. We are going to ______ up in traditional clothes for the parade tomorrow.",
      "options": ["A) dress", "B) dressed", "C) dressing"],
      "ans": "A) dress"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) My birthday is on 5th may.", "B) My birthday is on 5th May.", "C) my birthday is on 5th May"],
      "ans": "B) My birthday is on 5th May."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ is / When / birthday / your / ? ]",
      "options": ["A) When your birthday is?", "B) When is your birthday?", "C) Birthday your is when?"],
      "ans": "B) When is your birthday?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ celebrate / National Day / We / in August / . ]",
      "options": ["A) We celebrate National Day in August.", "B) National Day we celebrate in August.", "C) In August National Day celebrate we."],
      "ans": "A) We celebrate National Day in August."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) November", "B) November", "C) Novermber"],
      "ans": "A) November"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'When is your birthday?' How do you answer?",
      "options": ["A) I am ten years old.", "B) It is on the 12th of October.", "C) I like chocolate cake."],
      "ans": "B) It is on the 12th of October."
    },
    {
      "type": "mcq",
      "q": "26. Your friend asks: 'What are you doing for National Day?' How do you reply?",
      "options": ["A) We are watching the grand parade.", "B) Yes, I do every day.", "C) I am ten years old."],
      "ans": "A) We are watching the grand parade."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Is New Year's Day on 1st January?' How do you reply if it's true?",
      "options": ["A) No, it isn't.", "B) Yes, it is.", "C) Yes, it does."],
      "ans": "B) Yes, it is."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_28.png"),
      "q": "28. Look at the calendar image. Which date is highlighted for Independence Day?",
      "options": ["A) 31st August", "B) 25th December", "C) 1st January"],
      "ans": "A) 31st August"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_29.png"),
      "q": "29. Read the party invitation. What time does the birthday celebration start?",
      "options": ["A) 4:00 PM", "B) 8:00 AM", "C) 10:00 PM"],
      "ans": "A) 4:00 PM"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_30.png"),
      "q": "30. Look at the costume image. What character is the boy dressed up as?",
      "options": ["A) A pirate", "B) A doctor", "C) A firefighter"],
      "ans": "A) A pirate"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 4: Celebrations"] = getSmartModule4Data;
window.quizBank["GET SMART SET"]["Module 4 - Celebrations"] = getSmartModule4Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 4)
// ==========================================
const remedialModule4Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Dan's Birthday) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_1.png"),
      "q": "1. Dan's birthday is in ____.",
      "options": ["A) June", "B) May", "C) July"],
      "ans": "A) June"
    },
    {
      "type": "mcq",
      "q": "2. How old is Dan today?",
      "options": ["A) 10", "B) 8", "C) 5"],
      "ans": "A) 10"
    },
    {
      "type": "mcq",
      "q": "3. Dan blows out candles on his ____.",
      "options": ["A) cake", "B) book", "C) table"],
      "ans": "A) cake"
    },
    {
      "type": "mcq",
      "q": "4. Dan's friends sing a happy ____ song.",
      "options": ["A) birthday", "B) school", "C) morning"],
      "ans": "A) birthday"
    },
    {
      "type": "mcq",
      "q": "5. Dan feels very ____.",
      "options": ["A) happy", "B) sad", "C) angry"],
      "ans": "A) happy"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: National Day Flags) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_6.png"),
      "q": "6. National Day is in ____.",
      "options": ["A) August", "B) December", "C) March"],
      "ans": "A) August"
    },
    {
      "type": "mcq",
      "q": "7. People wave Malaysian ____.",
      "options": ["A) flags", "B) toys", "C) shoes"],
      "ans": "A) flags"
    },
    {
      "type": "mcq",
      "q": "8. The flag has red, white, blue, and ____ colors.",
      "options": ["A) yellow", "B) green", "C) pink"],
      "ans": "A) yellow"
    },
    {
      "type": "mcq",
      "q": "9. Children watch a big ____.",
      "options": ["A) parade", "B) game", "C) test"],
      "ans": "A) parade"
    },
    {
      "type": "mcq",
      "q": "10. Everyone loves their ____.",
      "options": ["A) country", "B) desk", "C) eraser"],
      "ans": "A) country"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. 1st means ______.",
      "options": ["A) first", "B) second", "C) third"],
      "ans": "A) first"
    },
    {
      "type": "mcq",
      "q": "12. 2nd means ______.",
      "options": ["A) second", "B) first", "C) fifth"],
      "ans": "A) second"
    },
    {
      "type": "mcq",
      "q": "13. 3rd means ______.",
      "options": ["A) third", "B) fourth", "C) tenth"],
      "ans": "A) third"
    },
    {
      "type": "mcq",
      "q": "14. Month of National Day in Malaysia: ______.",
      "options": ["A) August", "B) April", "C) May"],
      "ans": "A) August"
    },
    {
      "type": "mcq",
      "q": "15. Wearing fun clothes for a party is dressing ______.",
      "options": ["A) up", "B) down", "C) in"],
      "ans": "A) up"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. My birthday is ______ July.",
      "options": ["A) in", "B) on", "C) at"],
      "ans": "A) in"
    },
    {
      "type": "mcq",
      "q": "17. The party is ______ 5th October.",
      "options": ["A) on", "B) in", "C) under"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "18. Today is the ______ (1st) day of May.",
      "options": ["A) first", "B) one", "C) single"],
      "ans": "A) first"
    },
    {
      "type": "mcq",
      "q": "19. When ______ your birthday?",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "20. We ______ happy today.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) August", "B) Ogust", "C) Awgust"],
      "ans": "A) August"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Happy / Birthday! ]",
      "options": ["A) Birthday Happy!", "B) Happy Birthday!", "C) Birthday Happy"],
      "ans": "B) Happy Birthday!"
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Party", "B) Parti", "C) Partee"],
      "ans": "A) Party"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ It is / on 1st May. ]",
      "options": ["A) On 1st May it is.", "B) It is on 1st May.", "C) May 1st on it is."],
      "ans": "B) It is on 1st May."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Happy Birthday to you!",
      "options": ["A) Thank you!", "B) Good morning.", "C) I am fine."],
      "ans": "A) Thank you!"
    },
    {
      "type": "mcq",
      "q": "26. When is your birthday?",
      "options": ["A) It is on 4th July.", "B) I am ten.", "C) Yes, it is."],
      "ans": "A) It is on 4th July."
    },
    {
      "type": "mcq",
      "q": "27. Do you like birthday parties?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_28.png"),
      "q": "28. Look at the flag picture. Which country does this flag belong to?",
      "options": ["A) Malaysia", "B) UK", "C) Mexico"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_29.png"),
      "q": "29. Look at the cake picture. What is on top of the cake?",
      "options": ["A) Candles", "B) Books", "C) Flowers"],
      "ans": "A) Candles"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_30.png"),
      "q": "30. Look at the gift box picture. What is this?",
      "options": ["A) Present", "B) Table", "C) Chair"],
      "ans": "A) Present"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 4: Celebrations"] = remedialModule4Data;
window.quizBank["REMEDIAL SET"]["Remedial 4 - Celebrations"] = remedialModule4Data;
