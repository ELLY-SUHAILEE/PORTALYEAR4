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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 3)
// ==========================================
const getSmartModule3Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Ancient Egyptians & Mummies) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_1.png"),
      "q": "1. What did ancient Egyptians do to preserve dead bodies?",
      "options": ["A) They made mummies", "B) They buried them in gardens", "C) They burned them"],
      "ans": "A) They made mummies"
    },
    {
      "type": "mcq",
      "q": "2. What did Egyptians wrap mummies in?",
      "options": ["A) Strips of linen", "B) Cotton sheets", "C) Plastic wraps"],
      "ans": "A) Strips of linen"
    },
    {
      "type": "mcq",
      "q": "3. Where did Egyptians put the mummies of kings?",
      "options": ["A) Inside pyramids and tombs", "B) In wooden huts", "C) Near the river"],
      "ans": "A) Inside pyramids and tombs"
    },
    {
      "type": "mcq",
      "q": "4. How long did it take to make a mummy in ancient Egypt?",
      "options": ["A) About 70 days", "B) 10 days", "C) One year"],
      "ans": "A) About 70 days"
    },
    {
      "type": "mcq",
      "q": "5. What valuable items were buried inside the tombs?",
      "options": ["A) Gold, jewels, and statues", "B) Modern clothes", "C) Paper money"],
      "ans": "A) Gold, jewels, and statues"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Life in the Past) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_6.png"),
      "q": "6. How did people travel hundreds of years ago?",
      "options": ["A) On horses and carriages", "B) By airplanes", "C) By electric trains"],
      "ans": "A) On horses and carriages"
    },
    {
      "type": "mcq",
      "q": "7. Did people have electricity in their homes long ago?",
      "options": ["A) No, they used oil lamps and candles", "B) Yes, they had bright electric bulbs", "C) Yes, they used solar panels"],
      "ans": "A) No, they used oil lamps and candles"
    },
    {
      "type": "mcq",
      "q": "8. How did people send messages before phones existed?",
      "options": ["A) By writing letters sent via post or messengers", "B) By sending text messages", "C) By making video calls"],
      "ans": "A) By writing letters sent via post or messengers"
    },
    {
      "type": "mcq",
      "q": "9. What did children in the past play with?",
      "options": ["A) Wooden toys and board games", "B) Video games", "C) Tablets and smartphones"],
      "ans": "A) Wooden toys and board games"
    },
    {
      "type": "mcq",
      "q": "10. Where did people store water without modern taps?",
      "options": ["A) In clay pots and wooden buckets", "B) In plastic bottles", "C) In metal tanks"],
      "ans": "A) In clay pots and wooden buckets"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A dead body wrapped in linen bandages in ancient Egypt is called a ______.",
      "options": ["A) mummy", "B) statue", "C) pyramid"],
      "ans": "A) mummy"
    },
    {
      "type": "mcq",
      "q": "12. A giant stone structure with triangular sides built in ancient Egypt is a ______.",
      "options": ["A) pyramid", "B) castle", "C) tower"],
      "ans": "A) pyramid"
    },
    {
      "type": "mcq",
      "q": "13. A room or building used to bury dead people is a ______.",
      "options": ["A) tomb", "B) palace", "C) stadium"],
      "ans": "A) tomb"
    },
    {
      "type": "mcq",
      "q": "14. Thin cloth made from flax fibers, used to wrap mummies, is called ______.",
      "options": ["A) linen", "B) silk", "C) wool"],
      "ans": "A) linen"
    },
    {
      "type": "mcq",
      "q": "15. A yellow precious metal used to make ancient Egyptian treasure is ______.",
      "options": ["A) gold", "B) silver", "C) copper"],
      "ans": "A) gold"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Ancient Egyptians ______ pyramids thousands of years ago.",
      "options": ["A) built", "B) build", "C) building"],
      "ans": "A) built"
    },
    {
      "type": "mcq",
      "q": "17. Yesterday, I ______ a museum with my family.",
      "options": ["A) visited", "B) visit", "C) visiting"],
      "ans": "A) visited"
    },
    {
      "type": "mcq",
      "q": "18. They ______ not have smartphones in the past.",
      "options": ["A) did", "B) do", "C) does"],
      "ans": "A) did"
    },
    {
      "type": "mcq",
      "q": "19. ______ Egyptians write in hieroglyphics?",
      "options": ["A) Did", "B) Were", "C) Are"],
      "ans": "A) Did"
    },
    {
      "type": "mcq",
      "q": "20. The king ______ inside a large wooden coffin.",
      "options": ["A) slept / lay", "B) lies", "C) sleep"],
      "ans": "A) slept / lay"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) Ancient Egyptians built pyramids.", "B) ancient egyptians built pyramids.", "C) Ancient egyptians built Pyramids"],
      "ans": "A) Ancient Egyptians built pyramids."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ wrapped / They / linen / in / mummies ]",
      "options": ["A) They wrapped mummies in linen.", "B) Linen in wrapped mummies they.", "C) They in linen mummies wrapped."],
      "ans": "A) They wrapped mummies in linen."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ yesterday / museum / visited / We / the ]",
      "options": ["A) We visited the museum yesterday.", "B) Museum visited we yesterday the.", "C) Yesterday the museum visited we."],
      "ans": "A) We visited the museum yesterday."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Pyramid", "B) Pyramyd", "C) Piramid"],
      "ans": "A) Pyramid"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Did you visit the history museum last weekend?' How do you answer?",
      "options": ["A) Yes, I did.", "B) Yes, I do.", "C) Yes, I am."],
      "ans": "A) Yes, I did."
    },
    {
      "type": "mcq",
      "q": "26. How do you ask about what someone did yesterday?",
      "options": ["A) What did you do yesterday?", "B) What are you doing yesterday?", "C) What do you do yesterday?"],
      "ans": "A) What did you do yesterday?"
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'What was inside the tomb?' How do you answer?",
      "options": ["A) There was a mummy and gold treasures.", "B) There is a laptop.", "C) There will be a car."],
      "ans": "A) There was a mummy and gold treasures."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_28.png"),
      "q": "28. Read the museum ticket. What time does the Egypt Exhibition open?",
      "options": ["A) 9.00 AM", "B) 12.00 PM", "C) 5.00 PM"],
      "ans": "A) 9.00 AM"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_29.png"),
      "q": "29. Read the poster. What artifact is on display this month?",
      "options": ["A) A golden mask", "B) A wooden car", "C) A modern watch"],
      "ans": "A) A golden mask"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_30.png"),
      "q": "30. Read the sign inside the museum. What is NOT allowed?",
      "options": ["A) Taking flash photos", "B) Walking quietly", "C) Looking at items"],
      "ans": "A) Taking flash photos"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 3: In the past"] = getSmartModule3Data;
window.quizBank["GET SMART SET"]["Module 3 - In the past"] = getSmartModule3Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 3)
// ==========================================
const remedialModule3Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Mummies) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_1.png"),
      "q": "1. Mummies are from ancient ____.",
      "options": ["A) Egypt", "B) China", "C) Malaysia"],
      "ans": "A) Egypt"
    },
    {
      "type": "mcq",
      "q": "2. Egyptians wrapped mummies in ____.",
      "options": ["A) linen", "B) paper", "C) leaves"],
      "ans": "A) linen"
    },
    {
      "type": "mcq",
      "q": "3. Mummies were placed inside ____.",
      "options": ["A) tombs", "B) cars", "C) schools"],
      "ans": "A) tombs"
    },
    {
      "type": "mcq",
      "q": "4. Kings were buried with ____.",
      "options": ["A) gold", "B) plastic toys", "C) books"],
      "ans": "A) gold"
    },
    {
      "type": "mcq",
      "q": "5. What shape is a pyramid?",
      "options": ["A) Triangle", "B) Circle", "C) Square"],
      "ans": "A) Triangle"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Yesterday) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_6.png"),
      "q": "6. Yesterday, Tom went to the ____.",
      "options": ["A) museum", "B) beach", "C) park"],
      "ans": "A) museum"
    },
    {
      "type": "mcq",
      "q": "7. Tom saw an old ____.",
      "options": ["A) mummy", "B) computer", "C) airplane"],
      "ans": "A) mummy"
    },
    {
      "type": "mcq",
      "q": "8. Tom took photos with his ____.",
      "options": ["A) camera", "B) pen", "C) bag"],
      "ans": "A) camera"
    },
    {
      "type": "mcq",
      "q": "9. Did Tom like the museum?",
      "options": ["A) Yes, he did.", "B) No, he didn't.", "C) He was sad."],
      "ans": "A) Yes, he did."
    },
    {
      "type": "mcq",
      "q": "10. Who went to the museum?",
      "options": ["A) Tom", "B) Ben", "C) Ali"],
      "ans": "A) Tom"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A dead body wrapped in cloth: ______.",
      "options": ["A) mummy", "B) doll", "C) toy"],
      "ans": "A) mummy"
    },
    {
      "type": "mcq",
      "q": "12. A big stone building in Egypt: ______.",
      "options": ["A) pyramid", "B) house", "C) shop"],
      "ans": "A) pyramid"
    },
    {
      "type": "mcq",
      "q": "13. A room for dead kings: ______.",
      "options": ["A) tomb", "B) kitchen", "C) class"],
      "ans": "A) tomb"
    },
    {
      "type": "mcq",
      "q": "14. A shiny gold item is made of ______.",
      "options": ["A) gold", "B) wood", "C) paper"],
      "ans": "A) gold"
    },
    {
      "type": "mcq",
      "q": "15. Time before now is called the ______.",
      "options": ["A) past", "B) future", "C) today"],
      "ans": "A) past"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Yesterday, I ______ a mummy.",
      "options": ["A) saw", "B) see", "C) seeing"],
      "ans": "A) saw"
    },
    {
      "type": "mcq",
      "q": "17. They ______ live in modern houses in the past.",
      "options": ["A) didn't", "B) don't", "C) aren't"],
      "ans": "A) didn't"
    },
    {
      "type": "mcq",
      "q": "18. He ______ to the museum yesterday.",
      "options": ["A) went", "B) go", "C) going"],
      "ans": "A) went"
    },
    {
      "type": "mcq",
      "q": "19. ______ you see the pyramid?",
      "options": ["A) Did", "B) Do", "C) Are"],
      "ans": "A) Did"
    },
    {
      "type": "mcq",
      "q": "20. The kings ______ rich.",
      "options": ["A) were", "B) is", "C) am"],
      "ans": "A) were"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Mummy", "B) Mumi", "C) Mumy"],
      "ans": "A) Mummy"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ went / He / home ]",
      "options": ["A) He went home.", "B) Went he home.", "C) Home went he."],
      "ans": "A) He went home."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Gold", "B) Goold", "C) Golde"],
      "ans": "A) Gold"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ saw / I / a pyramid ]",
      "options": ["A) I saw a pyramid.", "B) A pyramid saw I.", "C) Saw I pyramid a."],
      "ans": "A) I saw a pyramid."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Did you go to school yesterday?",
      "options": ["A) Yes, I did.", "B) Yes, I do.", "C) Yes, I am."],
      "ans": "A) Yes, I did."
    },
    {
      "type": "mcq",
      "q": "26. What did you see?",
      "options": ["A) I saw a gold mask.", "B) I see a cat.", "C) I will play."],
      "ans": "A) I saw a gold mask."
    },
    {
      "type": "mcq",
      "q": "27. Was the mummy old?",
      "options": ["A) Yes, it was.", "B) Yes, it is.", "C) Yes, it does."],
      "ans": "A) Yes, it was."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_28.png"),
      "q": "28. Read the sign. Where is the mummy room?",
      "options": ["A) Room 3", "B) Room 1", "C) Room 5"],
      "ans": "A) Room 3"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_29.png"),
      "q": "29. Look at the photo. What object is this?",
      "options": ["A) Pyramid", "B) Car", "C) Phone"],
      "ans": "A) Pyramid"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_30.png"),
      "q": "30. Read the ticket. How much is the entrance fee?",
      "options": ["A) RM 5", "B) RM 10", "C) RM 20"],
      "ans": "A) RM 5"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 3: In the past"] = remedialModule3Data;
window.quizBank["REMEDIAL SET"]["Remedial 3 - In the past"] = remedialModule3Data;
