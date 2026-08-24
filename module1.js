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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 1)
// ==========================================
const getSmartModule1Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Lin from China) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_1.png"),
      "q": "1. Where is Lin from?",
      "options": ["A) China", "B) Malaysia", "C) Mexico"],
      "ans": "A) China"
    },
    {
      "type": "mcq",
      "q": "2. What is Lin's nationality?",
      "options": ["A) Chinese", "B) Mexican", "C) American"],
      "ans": "A) Chinese"
    },
    {
      "type": "mcq",
      "q": "3. How old is Lin?",
      "options": ["A) Nine years old", "B) Ten years old", "C) Eight years old"],
      "ans": "A) Nine years old"
    },
    {
      "type": "mcq",
      "q": "4. Where does Lin live?",
      "options": ["A) In Beijing", "B) In London", "C) In Kuala Lumpur"],
      "ans": "A) In Beijing"
    },
    {
      "type": "mcq",
      "q": "5. What activities does Lin enjoy doing in her free time?",
      "options": ["A) Playing chess and doing gymnastics", "B) Ice-skating and swimming", "C) Playing ice hockey and football"],
      "ans": "A) Playing chess and doing gymnastics"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Carlos from Mexico) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_6.png"),
      "q": "6. How old is Carlos?",
      "options": ["A) Ten years old", "B) Nine years old", "C) Seven years old"],
      "ans": "A) Ten years old"
    },
    {
      "type": "mcq",
      "q": "7. What country is Carlos from?",
      "options": ["A) Mexico", "B) Brazil", "C) Korea"],
      "ans": "A) Mexico"
    },
    {
      "type": "mcq",
      "q": "8. What language does Carlos speak?",
      "options": ["A) Spanish", "B) English", "C) Chinese"],
      "ans": "A) Spanish"
    },
    {
      "type": "mcq",
      "q": "9. What sports do Carlos and his friends like playing after school?",
      "options": ["A) Ice hockey and skateboarding", "B) Football and tennis", "C) Swimming and badminton"],
      "ans": "A) Ice hockey and skateboarding"
    },
    {
      "type": "mcq",
      "q": "10. What is the nationality of someone from Mexico?",
      "options": ["A) Mexican", "B) American", "C) British"],
      "ans": "A) Mexican"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A person from Malaysia is called ______.",
      "options": ["A) Malaysian", "B) Malayan", "C) Malayish"],
      "ans": "A) Malaysian"
    },
    {
      "type": "mcq",
      "q": "12. Ice-skating and ice hockey are sports played on ______.",
      "options": ["A) ice", "B) grass", "C) water"],
      "ans": "A) ice"
    },
    {
      "type": "mcq",
      "q": "13. A board game played between two players with king and queen pieces is called ______.",
      "options": ["A) chess", "B) carrom", "C) ludo"],
      "ans": "A) chess"
    },
    {
      "type": "mcq",
      "q": "14. A piece of cloth with special colours and symbols representing a country is a ______.",
      "options": ["A) flag", "B) poster", "C) banner"],
      "ans": "A) flag"
    },
    {
      "type": "mcq",
      "q": "15. Someone who comes from the UK is ______.",
      "options": ["A) British", "B) English", "C) American"],
      "ans": "A) British"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Where ______ you from?",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "17. He ______ from Brazil. He is Brazilian.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "18. Look! They ______ ice-skating at the rink right now.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "19. She ______ not from the US; she is from the UK.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "20. What ______ Carlos and Lin doing at the moment?",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) Lee is from Korea.", "B) lee is from korea.", "C) Lee is from Korea"],
      "ans": "A) Lee is from Korea."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ from / I / Malaysia / am ]",
      "options": ["A) I am from Malaysia.", "B) From Malaysia I am.", "C) I Malaysia am from."],
      "ans": "A) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ playing / He / chess / likes ]",
      "options": ["A) He likes playing chess.", "B) Playing chess he likes.", "C) Likes he playing chess."],
      "ans": "A) He likes playing chess."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Mexican", "B) Maxican", "C) Mexicun"],
      "ans": "A) Mexican"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Where are you from?' How do you answer?",
      "options": ["A) I am from Malaysia.", "B) I am ten years old.", "C) I am fine, thank you."],
      "ans": "A) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "26. How do you ask about someone's nationality?",
      "options": ["A) What is his nationality?", "B) Where does he live?", "C) How is he today?"],
      "ans": "A) What is his nationality?"
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Are you from the UK?' How do you reply?",
      "options": ["A) Yes, I am.", "B) Yes, I do.", "C) Yes, I have."],
      "ans": "A) Yes, I am."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_28.png"),
      "q": "28. Read the profile card. What is Mei's country?",
      "options": ["A) China", "B) Korea", "C) Japan"],
      "ans": "A) China"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_29.png"),
      "q": "29. Read the notice. When does the Chess Club meet?",
      "options": ["A) Every Wednesday", "B) Every Friday", "C) Every Monday"],
      "ans": "A) Every Wednesday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_30.png"),
      "q": "30. Read the poster. What time is the Ice Skating Competition?",
      "options": ["A) 10.00 AM", "B) 2.00 PM", "C) 8.00 AM"],
      "ans": "A) 10.00 AM"
    }
  ]
};

// Pasangkan data ke dalam QuizBank (Menyokong format titik bertindih dan sempang)
window.quizBank["GET SMART SET"]["Module 1: Where are you from?"] = getSmartModule1Data;
window.quizBank["GET SMART SET"]["Module 1 - Where are you from?"] = getSmartModule1Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 1)
// ==========================================
const remedialModule1Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Mei and Ali) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_1.png"),
      "q": "1. Mei is from ____.",
      "options": ["A) China", "B) Mexico", "C) Brazil"],
      "ans": "A) China"
    },
    {
      "type": "mcq",
      "q": "2. Ali is from ____.",
      "options": ["A) Malaysia", "B) the UK", "C) Korea"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "q": "3. Mei and Ali are ____.",
      "options": ["A) friends", "B) brothers", "C) teachers"],
      "ans": "A) friends"
    },
    {
      "type": "mcq",
      "q": "4. Where does Ali live?",
      "options": ["A) Malaysia", "B) China", "C) the US"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "q": "5. What is Mei's nationality?",
      "options": ["A) Chinese", "B) Malaysian", "C) American"],
      "ans": "A) Chinese"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: John) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_6.png"),
      "q": "6. John is from ____.",
      "options": ["A) the UK", "B) China", "C) Malaysia"],
      "ans": "A) the UK"
    },
    {
      "type": "mcq",
      "q": "7. John likes playing ____.",
      "options": ["A) ice hockey", "B) football", "C) tennis"],
      "ans": "A) ice hockey"
    },
    {
      "type": "mcq",
      "q": "8. What is John's nationality?",
      "options": ["A) British", "B) Mexican", "C) Korean"],
      "ans": "A) British"
    },
    {
      "type": "mcq",
      "q": "9. Is John from the US?",
      "options": ["A) No, he isn't.", "B) Yes, he is.", "C) Yes, he does."],
      "ans": "A) No, he isn't."
    },
    {
      "type": "mcq",
      "q": "10. What sport is mentioned in the text?",
      "options": ["A) Ice hockey", "B) Swimming", "C) Running"],
      "ans": "A) Ice hockey"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Someone from Korea is ____.",
      "options": ["A) Korean", "B) Koreanese", "C) Korea"],
      "ans": "A) Korean"
    },
    {
      "type": "mcq",
      "q": "12. Moving on ice with skates is called ______.",
      "options": ["A) ice-skating", "B) swimming", "C) running"],
      "ans": "A) ice-skating"
    },
    {
      "type": "mcq",
      "q": "13. A country with a red, white, blue and yellow striped flag with stars and crescent is ______.",
      "options": ["A) Malaysia", "B) China", "C) Mexico"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "q": "14. Physical exercises like somersaults and cartwheels are called ______.",
      "options": ["A) gymnastics", "B) chess", "C) football"],
      "ans": "A) gymnastics"
    },
    {
      "type": "mcq",
      "q": "15. Someone from Mexico is ____.",
      "options": ["A) Mexican", "B) Mexico", "C) Mexicish"],
      "ans": "A) Mexican"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Where ______ you from?",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "17. He ______ from Malaysia.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "18. I ______ from the UK.",
      "options": ["A) am", "B) is", "C) are"],
      "ans": "A) am"
    },
    {
      "type": "mcq",
      "q": "19. She ______ playing chess right now.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "20. They ______ from Brazil.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Malaysia", "B) Malasia", "C) Malaysea"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ from / She / is / China ]",
      "options": ["A) She is from China.", "B) China is she from.", "C) From China she is."],
      "ans": "A) She is from China."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Chinese", "B) Chnese", "C) Chines"],
      "ans": "A) Chinese"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ am / I / Malaysian ]",
      "options": ["A) I am Malaysian.", "B) Malaysian I am.", "C) Am I Malaysian."],
      "ans": "A) I am Malaysian."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Where are you from?",
      "options": ["A) I am from Malaysia.", "B) I am fine.", "C) I am 10 years old."],
      "ans": "A) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "26. Are you Mexican?",
      "options": ["A) Yes, I am.", "B) Yes, I can.", "C) Yes, I do."],
      "ans": "A) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. Is he from Korea?",
      "options": ["A) Yes, he is.", "B) Yes, he can.", "C) Yes, he have."],
      "ans": "A) Yes, he is."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_28.png"),
      "q": "28. Read the notice. Which country is shown?",
      "options": ["A) Malaysia", "B) China", "C) Mexico"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_29.png"),
      "q": "29. Read the poster. What day is the gymnastics class held?",
      "options": ["A) Saturday", "B) Sunday", "C) Friday"],
      "ans": "A) Saturday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_30.png"),
      "q": "30. Read the card. What is Carlos's nationality?",
      "options": ["A) Mexican", "B) American", "C) British"],
      "ans": "A) Mexican"
    }
  ]
};

// Pasangkan data ke dalam QuizBank (Menyokong format titik bertindih dan sempang)
window.quizBank["REMEDIAL SET"]["Remedial 1: Where are you from?"] = remedialModule1Data;
window.quizBank["REMEDIAL SET"]["Remedial 1 - Where are you from?"] = remedialModule1Data;
