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
    // --- PETIKAN 1 (Soalan 1 - 5: National Day in Malaysia) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_1.png"),
      "q": "1. When is Malaysia's National Day celebrated?",
      "options": ["A) On the 31st of August", "B) On the 16th of September", "C) On the 1st of January"],
      "ans": "A) On the 31st of August"
    },
    {
      "type": "mcq",
      "q": "2. What do people wave during the National Day parade?",
      "options": ["A) National flags (Jalur Gemilang)", "B) Paper lanterns", "C) Colorful balloons"],
      "ans": "A) National flags (Jalur Gemilang)"
    },
    {
      "type": "mcq",
      "q": "3. What special event happens in the morning on National Day?",
      "options": ["A) A grand parade", "B) A fireworks display", "C) A costume contest"],
      "ans": "A) A grand parade"
    },
    {
      "type": "mcq",
      "q": "4. How do people decorate their houses and cars?",
      "options": ["A) With Malaysian flags", "B) With flowers and lights", "C) With painted pictures"],
      "ans": "A) With Malaysian flags"
    },
    {
      "type": "mcq",
      "q": "5. Why do Malaysians celebrate National Day?",
      "options": ["A) To commemorate the nation's independence", "B) To welcome the New Year", "C) To celebrate the harvest season"],
      "ans": "A) To commemorate the nation's independence"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Lunar New Year & Costumes) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_6.png"),
      "q": "6. What color symbolises good luck during Chinese New Year?",
      "options": ["A) Red", "B) Blue", "C) Green"],
      "ans": "A) Red"
    },
    {
      "type": "mcq",
      "q": "7. What do elders give to children during this celebration?",
      "options": ["A) Red packets (angpow)", "B) Wrapped gift boxes", "C) Birthday cakes"],
      "ans": "A) Red packets (angpow)"
    },
    {
      "type": "mcq",
      "q": "8. What special dance performance can be seen on the streets?",
      "options": ["A) Lion and dragon dances", "B) Ballet dance", "C) Tap dance"],
      "ans": "A) Lion and dragon dances"
    },
    {
      "type": "mcq",
      "q": "9. What are people going to dress up as for the festival party?",
      "options": ["A) Traditional costumes", "B) Superhero suits", "C) Sports jerseys"],
      "ans": "A) Traditional costumes"
    },
    {
      "type": "mcq",
      "q": "10. When do family members gather for a reunion dinner?",
      "options": ["A) On New Year's Eve", "B) On New Year's Day night", "C) Two days after New Year"],
      "ans": "A) On New Year's Eve"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The ordinal number after 'second' is ______.",
      "options": ["A) third", "B) first", "C) fourth"],
      "ans": "A) third"
    },
    {
      "type": "mcq",
      "q": "12. Special clothes worn to look like a character or for a festival are called ______.",
      "options": ["A) costumes", "B) uniforms", "C) pyjamas"],
      "ans": "A) costumes"
    },
    {
      "type": "mcq",
      "q": "13. Bright explosions of lights and noise in the night sky are ______.",
      "options": ["A) fireworks", "B) lanterns", "C) candles"],
      "ans": "A) fireworks"
    },
    {
      "type": "mcq",
      "q": "14. The tenth month of the year is ______.",
      "options": ["A) October", "B) November", "C) September"],
      "ans": "A) October"
    },
    {
      "type": "mcq",
      "q": "15. Decorative paper containers with a light inside are called ______.",
      "options": ["A) lanterns", "B) balloons", "C) ribbons"],
      "ans": "A) lanterns"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. When is your birthday? It is ______ the 12th of May.",
      "options": ["A) on", "B) in", "C) at"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "17. What are you going to ______ for the party?",
      "options": ["A) wear", "B) wearing", "C) wore"],
      "ans": "A) wear"
    },
    {
      "type": "mcq",
      "q": "18. He is going to dress ______ as a soldier.",
      "options": ["A) up", "B) down", "C) on"],
      "ans": "A) up"
    },
    {
      "type": "mcq",
      "q": "19. Whose costume is this? It's ______.",
      "options": ["A) hers", "B) her", "C) she"],
      "ans": "A) hers"
    },
    {
      "type": "mcq",
      "q": "20. They are going to ______ fireworks tonight.",
      "options": ["A) watch", "B) watched", "C) watching"],
      "ans": "A) watch"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) National Day is on the 31st of August.", "B) national day is on the 31st of august.", "C) National Day is on the 31st of August"],
      "ans": "A) National Day is on the 31st of August."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ going to / dress up / I am / as a pirate ]",
      "options": ["A) I am going to dress up as a pirate.", "B) As a pirate I am dress up going to.", "C) Dress up I am going to as a pirate."],
      "ans": "A) I am going to dress up as a pirate."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ going to / We are / watch fireworks / tonight ]",
      "options": ["A) We are going to watch fireworks tonight.", "B) Watch fireworks tonight we are going to.", "C) We are watch fireworks going to tonight."],
      "ans": "A) We are going to watch fireworks tonight."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) August", "B) Ogust", "C) August"],
      "ans": "A) August"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'When is National Day?' How do you answer?",
      "options": ["A) It is on the 31st of August.", "B) It is at 5 o'clock.", "C) It is in the classroom."],
      "ans": "A) It is on the 31st of August."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'What are you going to do tonight?' How do you answer?",
      "options": ["A) I am going to watch the fireworks.", "B) I went to the shop.", "C) I like apples."],
      "ans": "A) I am going to watch the fireworks."
    },
    {
      "type": "mcq",
      "q": "27. How do you ask someone about their birthday date?",
      "options": ["A) When is your birthday?", "B) What is your name?", "C) How old are you going?"],
      "ans": "A) When is your birthday?"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_28.png"),
      "q": "28. Read the invitation card. What date is the costume party?",
      "options": ["A) 15th of November", "B) 1st of December", "C) 20th of October"],
      "ans": "A) 15th of November"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_29.png"),
      "q": "29. Read the event poster. Where will the fireworks display take place?",
      "options": ["A) At the city park", "B) At the school hall", "C) At the beach"],
      "ans": "A) At the city park"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_30.png"),
      "q": "30. Read the schedule. What time is the parade starting?",
      "options": ["A) 8.00 AM", "B) 10.30 AM", "C) 2.00 PM"],
      "ans": "A) 8.00 AM"
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
    // --- PETIKAN 1 (Soalan 1 - 5: Birthday Party) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_1.png"),
      "q": "1. Today is Adam's ____.",
      "options": ["A) birthday", "B) holiday", "C) school day"],
      "ans": "A) birthday"
    },
    {
      "type": "mcq",
      "q": "2. Adam's birthday is on the ____ of June.",
      "options": ["A) 5th", "B) 1st", "C) 10th"],
      "ans": "A) 5th"
    },
    {
      "type": "mcq",
      "q": "3. What is Adam going to wear?",
      "options": ["A) A costume", "B) A school uniform", "C) A raincoat"],
      "ans": "A) A costume"
    },
    {
      "type": "mcq",
      "q": "4. What is on the table?",
      "options": ["A) A big cake", "B) Books", "C) Toys"],
      "ans": "A) A big cake"
    },
    {
      "type": "mcq",
      "q": "5. Is Adam happy?",
      "options": ["A) Yes, he is.", "B) No, he isn't.", "C) He is angry."],
      "ans": "A) Yes, he is."
    },

    // --- PETIKAN 2 (Soalan 6 - 10: National Day) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_6.png"),
      "q": "6. National Day is on 31st ____.",
      "options": ["A) August", "B) July", "C) May"],
      "ans": "A) August"
    },
    {
      "type": "mcq",
      "q": "7. People wave the ____.",
      "options": ["A) flag", "B) hat", "C) book"],
      "ans": "A) flag"
    },
    {
      "type": "mcq",
      "q": "8. There is a grand ____ in the street.",
      "options": ["A) parade", "B) game", "C) class"],
      "ans": "A) parade"
    },
    {
      "type": "mcq",
      "q": "9. People watch ____ at night.",
      "options": ["A) fireworks", "B) TV", "C) birds"],
      "ans": "A) fireworks"
    },
    {
      "type": "mcq",
      "q": "10. Which country celebrates National Day on 31st August?",
      "options": ["A) Malaysia", "B) China", "C) UK"],
      "ans": "A) Malaysia"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Number 1st is called ______.",
      "options": ["A) first", "B) second", "C) third"],
      "ans": "A) first"
    },
    {
      "type": "mcq",
      "q": "12. Number 2nd is called ______.",
      "options": ["A) second", "B) first", "C) fourth"],
      "ans": "A) second"
    },
    {
      "type": "mcq",
      "q": "13. Bright lights in the sky: ______.",
      "options": ["A) fireworks", "B) paper", "C) flag"],
      "ans": "A) fireworks"
    },
    {
      "type": "mcq",
      "q": "14. Special party clothes: ______.",
      "options": ["A) costume", "B) bag", "C) shoes"],
      "ans": "A) costume"
    },
    {
      "type": "mcq",
      "q": "15. Jalur Gemilang is a ______.",
      "options": ["A) flag", "B) balloon", "C) cake"],
      "ans": "A) flag"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. My birthday is ______ August.",
      "options": ["A) in", "B) on", "C) at"],
      "ans": "A) in"
    },
    {
      "type": "mcq",
      "q": "17. My birthday is ______ 31st August.",
      "options": ["A) on", "B) in", "C) at"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "18. I am going ______ dress up.",
      "options": ["A) to", "B) for", "C) at"],
      "ans": "A) to"
    },
    {
      "type": "mcq",
      "q": "19. She is going to ______ a cake.",
      "options": ["A) make", "B) making", "C) made"],
      "ans": "A) make"
    },
    {
      "type": "mcq",
      "q": "20. They are going to ______ the parade.",
      "options": ["A) watch", "B) watching", "C) watched"],
      "ans": "A) watch"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Party", "B) Parti", "C) Partey"],
      "ans": "A) Party"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ going to / I am / play ]",
      "options": ["A) I am going to play.", "B) Play going to I am.", "C) I am play going to."],
      "ans": "A) I am going to play."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Flag", "B) Flagg", "C) Phlag"],
      "ans": "A) Flag"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ is / My birthday / in May ]",
      "options": ["A) My birthday is in May.", "B) In May my birthday is.", "C) Is my birthday in May."],
      "ans": "A) My birthday is in May."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. When is your birthday?",
      "options": ["A) It is in July.", "B) It is red.", "C) I am 10."],
      "ans": "A) It is in July."
    },
    {
      "type": "mcq",
      "q": "26. Are you going to wear a costume?",
      "options": ["A) Yes, I am.", "B) Yes, I do.", "C) Yes, I have."],
      "ans": "A) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. Happy Birthday to you!",
      "options": ["A) Thank you!", "B) Goodbye!", "C) You're welcome!"],
      "ans": "A) Thank you!"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_28.png"),
      "q": "28. Look at the card. When is the party?",
      "options": ["A) Sunday", "B) Monday", "C) Friday"],
      "ans": "A) Sunday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_29.png"),
      "q": "29. Look at the picture. What are they watching?",
      "options": ["A) Fireworks", "B) TV", "C) Birds"],
      "ans": "A) Fireworks"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_30.png"),
      "q": "30. Read the poster. What flag is shown?",
      "options": ["A) Malaysia", "B) UK", "C) USA"],
      "ans": "A) Malaysia"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 4: Celebrations"] = remedialModule4Data;
window.quizBank["REMEDIAL SET"]["Remedial 4 - Celebrations"] = remedialModule4Data;
