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
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_1.png"),
      "q": "1. Where is Carlos from?",
      "options": ["A) Malaysia", "B) Mexico", "C) Korea"],
      "ans": "B) Mexico"
    },
    {
      "type": "mcq",
      "q": "2. What does Sandy love eating during special celebrations?",
      "options": ["A) Tacos", "B) Nasi Lemak", "C) Kimchi"],
      "ans": "C) Kimchi"
    },
    {
      "type": "mcq",
      "q": "3. What traditional item does Carlos wear on special days?",
      "options": ["A) A sombrero", "B) A kimono", "C) A hanbok"],
      "ans": "A) A sombrero"
    },
    {
      "type": "mcq",
      "q": "4. Which country is Lee from?",
      "options": ["A) China", "B) Malaysia", "C) The UK"],
      "ans": "B) Malaysia"
    },
    {
      "type": "mcq",
      "q": "5. What do all three children have in common?",
      "options": ["A) They live in the same house", "B) They speak the exact same language", "C) They love sharing their cultures with each other"],
      "ans": "C) They love sharing their cultures with each other"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_6.png"),
      "q": "6. Where does Lin come from?",
      "options": ["A) China", "B) Brazil", "C) The US"],
      "ans": "A) China"
    },
    {
      "type": "mcq",
      "q": "7. What sport is Maria from Brazil very good at?",
      "options": ["A) Ice-skating", "B) Football", "C) Swimming"],
      "ans": "B) Football"
    },
    {
      "type": "mcq",
      "q": "8. John is from the UK. What activity does he do on weekends?",
      "options": ["A) Playing chess", "B) Cooking tacos", "C) Ice-skating at the rink"],
      "ans": "C) Ice-skating at the rink"
    },
    {
      "type": "mcq",
      "q": "9. How do John, Lin, and Maria communicate?",
      "options": ["A) By sending emails and letters", "B) By calling on landline phones", "C) By meeting every day"],
      "ans": "A) By sending emails and letters"
    },
    {
      "type": "mcq",
      "q": "10. Which sentence about Maria is true?",
      "options": ["A) She is British", "B) She comes from Brazil", "C) She plays ice-hockey"],
      "ans": "B) She comes from Brazil"
    }
  ],
  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A person who is from Mexico is ______.",
      "options": ["A) Malaysian", "B) Mexican", "C) Korean"],
      "ans": "B) Mexican"
    },
    {
      "type": "mcq",
      "q": "12. The country with a red flag containing five yellow stars is ______.",
      "options": ["A) The UK", "B) Brazil", "C) China"],
      "ans": "C) China"
    },
    {
      "type": "mcq",
      "q": "13. Gliding on ice wearing special shoes with blades is called ______.",
      "options": ["A) ice-skating", "B) skateboarding", "C) cycling"],
      "ans": "A) ice-skating"
    },
    {
      "type": "mcq",
      "q": "14. A board game played between two players using pieces like kings and queens is ______.",
      "options": ["A) Monopoly", "B) chess", "C) Scrabble"],
      "ans": "B) chess"
    },
    {
      "type": "mcq",
      "q": "15. A person who comes from Korea is ______.",
      "options": ["A) Korean", "B) Chinese", "C) American"],
      "ans": "A) Korean"
    }
  ],
  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Where ______ you from?",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "17. He ______ from Malaysia. He lives in Kuala Lumpur.",
      "options": ["A) are", "B) am", "C) is"],
      "ans": "C) is"
    },
    {
      "type": "mcq",
      "q": "18. Look at them! They ______ playing chess right now.",
      "options": ["A) are", "B) is", "C) was"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "19. She ______ ice-skating at the sports center every Saturday.",
      "options": ["A) go", "B) goes", "C) going"],
      "ans": "B) goes"
    },
    {
      "type": "mcq",
      "q": "20. What is ______ nationality? He is Mexican.",
      "options": ["A) her", "B) my", "C) his"],
      "ans": "C) his"
    }
  ],
  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Carlos is from Mexico.", "B) carlos is from mexico.", "C) Carlos is from mexico"],
      "ans": "A) Carlos is from Mexico."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ from / Where / she / is / ? ]",
      "options": ["A) Where from is she?", "B) Where is she from?", "C) She is where from?"],
      "ans": "B) Where is she from?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ comes / He / Brazil / from / . ]",
      "options": ["A) From Brazil he comes.", "B) He comes Brazil from.", "C) He comes from Brazil."],
      "ans": "C) He comes from Brazil."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Malaysian", "B) Malaysien", "C) Malaisian"],
      "ans": "A) Malaysian"
    }
  ],
  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Where are you from?' How do you answer?",
      "options": ["A) I am ten years old.", "B) I am from Malaysia.", "C) I am reading a book."],
      "ans": "B) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "26. You introduce a new student: 'This is Lin. ______'",
      "options": ["A) She is from China.", "B) She likes sleeping.", "C) It is a table."],
      "ans": "A) She is from China."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Is he from the UK?' How do you reply if it's true?",
      "options": ["A) No, he isn't.", "B) Yes, he does.", "C) Yes, he is."],
      "ans": "C) Yes, he is."
    }
  ],
  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_28.png"),
      "q": "28. Look at the flag image. Which country has a red, white, blue, and yellow crescent flag?",
      "options": ["A) Malaysia", "B) Mexico", "C) The UK"],
      "ans": "A) Malaysia"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_29.png"),
      "q": "29. Read the passport details. What is the nationality of the passport holder?",
      "options": ["A) Korean", "B) British", "C) American"],
      "ans": "B) British"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_30.png"),
      "q": "30. Look at the flight ticket. What is the destination country?",
      "options": ["A) Brazil", "B) China", "C) Mexico"],
      "ans": "C) Mexico"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 1)
// ==========================================
const remedialModule1Data = {
  "Reading": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_1.png"),
      "q": "1. Ali is from ____.",
      "options": ["A) Korea", "B) Malaysia", "C) Mexico"],
      "ans": "B) Malaysia"
    },
    {
      "type": "mcq",
      "q": "2. Ali likes to play ____.",
      "options": ["A) chess", "B) football", "C) cards"],
      "ans": "A) chess"
    },
    {
      "type": "mcq",
      "q": "3. Who is Ali's friend?",
      "options": ["A) Tom", "B) Kim", "C) Carlos"],
      "ans": "C) Carlos"
    },
    {
      "type": "mcq",
      "q": "4. Carlos comes from ____.",
      "options": ["A) Mexico", "B) China", "C) The UK"],
      "ans": "A) Mexico"
    },
    {
      "type": "mcq",
      "q": "5. Ali and Carlos are ____.",
      "options": ["A) brothers", "B) friends", "C) teachers"],
      "ans": "B) friends"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_6.png"),
      "q": "6. Anna is from ____.",
      "options": ["A) China", "B) Brazil", "C) Korea"],
      "ans": "C) Korea"
    },
    {
      "type": "mcq",
      "q": "7. Anna loves ____.",
      "options": ["A) ice-skating", "B) running", "C) cooking"],
      "ans": "A) ice-skating"
    },
    {
      "type": "mcq",
      "q": "8. She wears warm ____ on the ice.",
      "options": ["A) hat", "B) clothes", "C) shoes"],
      "ans": "B) clothes"
    },
    {
      "type": "mcq",
      "q": "9. Anna is ____ years old.",
      "options": ["A) ten", "B) two", "C) five"],
      "ans": "A) ten"
    },
    {
      "type": "mcq",
      "q": "10. Anna is a happy ____.",
      "options": ["A) boy", "B) girl", "C) cat"],
      "ans": "B) girl"
    }
  ],
  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Country name: ______.",
      "options": ["A) Red", "B) Malaysia", "C) Happy"],
      "ans": "B) Malaysia"
    },
    {
      "type": "mcq",
      "q": "12. From Korea: ______.",
      "options": ["A) Korean", "B) Apple", "C) Table"],
      "ans": "A) Korean"
    },
    {
      "type": "mcq",
      "q": "13. Playing on ice: ice-______.",
      "options": ["A) running", "B) walking", "C) skating"],
      "ans": "C) skating"
    },
    {
      "type": "mcq",
      "q": "14. A game with pieces: ______.",
      "options": ["A) chess", "B) ball", "C) pen"],
      "ans": "A) chess"
    },
    {
      "type": "mcq",
      "q": "15. From Mexico: ______.",
      "options": ["A) Chinese", "B) Mexican", "C) British"],
      "ans": "B) Mexican"
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
      "q": "17. He ______ from China.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "B) is"
    },
    {
      "type": "mcq",
      "q": "18. I ______ from Malaysia.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "C) am"
    },
    {
      "type": "mcq",
      "q": "19. They ______ playing.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "20. She ______ from the UK.",
      "options": ["A) am", "B) is", "C) are"],
      "ans": "B) is"
    }
  ],
  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Mexico", "B) Mexiko", "C) Mxico"],
      "ans": "A) Mexico"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ I am / from Malaysia. ]",
      "options": ["A) From Malaysia I am.", "B) I am from Malaysia.", "C) Malaysia from I am."],
      "ans": "B) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Chyna", "B) Chena", "C) China"],
      "ans": "C) China"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ He is / from Korea. ]",
      "options": ["A) He is from Korea.", "B) Korea from he is.", "C) Is he Korea from."],
      "ans": "A) He is from Korea."
    }
  ],
  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Where are you from?",
      "options": ["A) I am fine.", "B) I am from Malaysia.", "C) I like rice."],
      "ans": "B) I am from Malaysia."
    },
    {
      "type": "mcq",
      "q": "26. Is he from Mexico?",
      "options": ["A) Yes, he is.", "B) Yes, he do.", "C) Yes, he can."],
      "ans": "A) Yes, he is."
    },
    {
      "type": "mcq",
      "q": "27. Who is from Korea?",
      "options": ["A) A book", "B) The dog", "C) Sandy"],
      "ans": "C) Sandy"
    }
  ],
  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_28.png"),
      "q": "28. Look at the flag. Which country is this?",
      "options": ["A) Mexico", "B) Malaysia", "C) China"],
      "ans": "B) Malaysia"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_29.png"),
      "q": "29. Look at the picture. What game is he playing?",
      "options": ["A) Chess", "B) Football", "C) Cards"],
      "ans": "A) Chess"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_30.png"),
      "q": "30. Look at the picture. What is she doing?",
      "options": ["A) Cooking", "B) Swimming", "C) Ice-skating"],
      "ans": "C) Ice-skating"
    }
  ]
};

// ==========================================
// FUNGSI PENUKAR DATA KEPADA ARRAY SENARAI SOALAN
// ==========================================
function formatDataModule(dataObj) {
  const flatArray = [];
  for (const category in dataObj) {
    if (Array.isArray(dataObj[category])) {
      dataObj[category].forEach(item => {
        let ansIndex = item.options ? item.options.indexOf(item.ans) : 0;
        if (ansIndex === -1) ansIndex = 0;

        flatArray.push({
          question: (item.image ? item.image : "") + (item.q || item.question || ""),
          options: item.options || [],
          answer: ansIndex,
          ansText: item.ans
        });
      });
    }
  }
  return flatArray;
}

// FORMATKAN DATA KE ARRAY 30 SOALAN
const getSmartModule1Array = formatDataModule(getSmartModule1Data);
const remedialModule1Array = formatDataModule(remedialModule1Data);

// PASANGKAN DATA KE DALAM QUIZBANK
window.quizBank["GET SMART SET"]["Module 1: Where are you from?"] = getSmartModule1Array;
window.quizBank["GET SMART SET"]["Module 1 - Where are you from?"] = getSmartModule1Array;

window.quizBank["REMEDIAL SET"]["Remedial 1: Where are you from?"] = remedialModule1Array;
window.quizBank["REMEDIAL SET"]["Remedial 1 - Where are you from?"] = remedialModule1Array;

// ESKPORT JUGA KE GLOBAL WINDOW
window.quizQuestions = getSmartModule1Array;
