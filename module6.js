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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 6)
// ==========================================
const getSmartModule6Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Street Safety) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_1.png"),
      "q": "1. What should you always fasten when riding in a car?",
      "options": ["A) Your seatbelt", "B) Your shoes", "C) Your bag"],
      "ans": "A) Your seatbelt"
    },
    {
      "type": "mcq",
      "q": "2. Where should pedestrians walk safely along the road?",
      "options": ["A) On the pavement", "B) In the middle of the street", "C) On the grass field"],
      "ans": "A) On the pavement"
    },
    {
      "type": "mcq",
      "q": "3. What must you wear to protect your head when riding a bicycle?",
      "options": ["A) A helmet", "B) A cap", "C) A hoodie"],
      "ans": "A) A helmet"
    },
    {
      "type": "mcq",
      "q": "4. What should you do before crossing the street?",
      "options": ["A) Look right, left, and right again", "B) Run across as fast as possible", "C) Close your eyes and walk"],
      "ans": "A) Look right, left, and right again"
    },
    {
      "type": "mcq",
      "q": "5. Where is the safest place to cross a busy road?",
      "options": ["A) At a zebra crossing or traffic lights", "B) Behind a parked lorry", "C) At a sharp road bend"],
      "ans": "A) At a zebra crossing or traffic lights"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Special Modes of Transport) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_6.png"),
      "q": "6. What traditional mode of transport glides on water channels in Venice?",
      "options": ["A) Gondola", "B) Tuk-tuk", "C) Snowmobile"],
      "ans": "A) Gondola"
    },
    {
      "type": "mcq",
      "q": "7. How do people travel over deep snow in cold countries like Alaska?",
      "options": ["A) By snowmobile", "B) By bicycle", "C) By double-decker bus"],
      "ans": "A) By snowmobile"
    },
    {
      "type": "mcq",
      "q": "8. What popular three-wheeled vehicle is used by tourists in Thailand?",
      "options": ["A) Tuk-tuk", "B) Ferry", "C) Tram"],
      "ans": "A) Tuk-tuk"
    },
    {
      "type": "mcq",
      "q": "9. Why do people choose to travel by train for long distances?",
      "options": ["A) It is comfortable and faster than driving", "B) It travels on water", "C) It only holds one person"],
      "ans": "A) It is comfortable and faster than driving"
    },
    {
      "type": "mcq",
      "q": "10. What rule must passengers follow while inside a moving bus?",
      "options": ["A) Sit quietly and hold onto the handlebars", "B) Run around the aisle", "C) Stick their heads out of the window"],
      "ans": "A) Sit quietly and hold onto the handlebars"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Black and white stripes painted on the road for safe crossing are called a ______.",
      "options": ["A) zebra crossing", "B) footbridge", "C) pavement"],
      "ans": "A) zebra crossing"
    },
    {
      "type": "mcq",
      "q": "12. A hard protective hat worn when riding a bike or motorcycle is a ______.",
      "options": ["A) helmet", "B) cap", "C) mask"],
      "ans": "A) helmet"
    },
    {
      "type": "mcq",
      "q": "13. A safety strap in a car that holds a passenger securely is a ______.",
      "options": ["A) seatbelt", "B) rope", "C) chain"],
      "ans": "A) seatbelt"
    },
    {
      "type": "mcq",
      "q": "14. A walkway at the side of a road for people walking is called a ______.",
      "options": ["A) pavement", "B) highway", "C) lane"],
      "ans": "A) pavement"
    },
    {
      "type": "mcq",
      "q": "15. A motorized vehicle used for traveling over snow and ice is a ______.",
      "options": ["A) snowmobile", "B) gondola", "C) sailboat"],
      "ans": "A) snowmobile"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How long does it ______ to get to school by bus?",
      "options": ["A) take", "B) takes", "C) taking"],
      "ans": "A) take"
    },
    {
      "type": "mcq",
      "q": "17. You ______ stick your hand out of the bus window; it is dangerous.",
      "options": ["A) mustn't", "B) must", "C) should"],
      "ans": "A) mustn't"
    },
    {
      "type": "mcq",
      "q": "18. You ______ wear a helmet when riding a bicycle.",
      "options": ["A) must", "B) mustn't", "C) doesn't"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "q": "19. We usually travel to school ______ foot.",
      "options": ["A) on", "B) by", "C) in"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "20. My father goes to work ______ train every morning.",
      "options": ["A) by", "B) on", "C) with"],
      "ans": "A) by"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) Always wear a helmet when riding a bike.", "B) always wear a helmet when riding a bike.", "C) Always wear a helmet when riding a bike"],
      "ans": "A) Always wear a helmet when riding a bike."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ take / How long / does it / to get there ]",
      "options": ["A) How long does it take to get there?", "B) How long to get there does it take?", "C) To get there how long does it take?"],
      "ans": "A) How long does it take to get there?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ fasten / You / seatbelt / must / your ]",
      "options": ["A) You must fasten your seatbelt.", "B) You seatbelt must fasten your.", "C) Fasten your seatbelt must you."],
      "ans": "A) You must fasten your seatbelt."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Seatbelt", "B) Setbelt", "C) Seatbelt"],
      "ans": "A) Seatbelt"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'How do you get to school?' How do you answer?",
      "options": ["A) I go to school by bus.", "B) I am ten years old.", "C) It takes 20 minutes."],
      "ans": "A) I go to school by bus."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'How long does it take to get to the library?' How do you answer?",
      "options": ["A) It takes about 15 minutes.", "B) I go by car.", "C) The library is big."],
      "ans": "A) It takes about 15 minutes."
    },
    {
      "type": "mcq",
      "q": "27. How do you remind a friend about road safety rules?",
      "options": ["A) Remember to look both ways before crossing!", "B) Play football on the street!", "C) Don't look at traffic lights!"],
      "ans": "A) Remember to look both ways before crossing!"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_28.png"),
      "q": "28. Read the traffic sign. What does this sign mean?",
      "options": ["A) Pedestrian crossing ahead", "B) No entry for cars", "C) Bicycle parking"],
      "ans": "A) Pedestrian crossing ahead"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_29.png"),
      "q": "29. Read the bus schedule. How long does the trip from Town A to Town B take?",
      "options": ["A) 30 minutes", "B) 2 hours", "C) 5 minutes"],
      "ans": "A) 30 minutes"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_30.png"),
      "q": "30. Read the safety notice. What must passengers NOT do on the train?",
      "options": ["A) Eat or drink inside the train", "B) Hold onto handles", "C) Keep tickets ready"],
      "ans": "A) Eat or drink inside the train"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 6: Getting around"] = getSmartModule6Data;
window.quizBank["GET SMART SET"]["Module 6 - Getting around"] = getSmartModule6Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 6)
// ==========================================
const remedialModule6Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Going to School) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_1.png"),
      "q": "1. Ali goes to school by ____.",
      "options": ["A) bus", "B) plane", "C) boat"],
      "ans": "A) bus"
    },
    {
      "type": "mcq",
      "q": "2. Ali wears a seatbelt in the ____.",
      "options": ["A) car", "B) bicycle", "C) desk"],
      "ans": "A) car"
    },
    {
      "type": "mcq",
      "q": "3. Walk on the ____ to stay safe.",
      "options": ["A) pavement", "B) middle of road", "C) river"],
      "ans": "A) pavement"
    },
    {
      "type": "mcq",
      "q": "4. Wear a ____ when riding a bike.",
      "options": ["A) helmet", "B) hat", "C) bag"],
      "ans": "A) helmet"
    },
    {
      "type": "mcq",
      "q": "5. Cross the road at the zebra ____.",
      "options": ["A) crossing", "B) line", "C) street"],
      "ans": "A) crossing"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Special Transport) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_6.png"),
      "q": "6. A gondola is a boat in ____.",
      "options": ["A) Venice", "B) Malaysia", "C) China"],
      "ans": "A) Venice"
    },
    {
      "type": "mcq",
      "q": "7. A tuk-tuk has ____ wheels.",
      "options": ["A) three", "B) two", "C) four"],
      "ans": "A) three"
    },
    {
      "type": "mcq",
      "q": "8. Snowmobiles travel on ____.",
      "options": ["A) snow", "B) water", "C) air"],
      "ans": "A) snow"
    },
    {
      "type": "mcq",
      "q": "9. A bus carries many ____.",
      "options": ["A) people", "B) cats", "C) fish"],
      "ans": "A) people"
    },
    {
      "type": "mcq",
      "q": "10. Trains run on ____.",
      "options": ["A) tracks", "B) grass", "C) trees"],
      "ans": "A) tracks"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Protect your head with a ______.",
      "options": ["A) helmet", "B) belt", "C) ring"],
      "ans": "A) helmet"
    },
    {
      "type": "mcq",
      "q": "12. Fasten your ______ in the car.",
      "options": ["A) seatbelt", "B) shoe", "C) door"],
      "ans": "A) seatbelt"
    },
    {
      "type": "mcq",
      "q": "13. Cross the road safely on the zebra ______.",
      "options": ["A) crossing", "B) horse", "C) box"],
      "ans": "A) crossing"
    },
    {
      "type": "mcq",
      "q": "14. A boat in Venice: ______.",
      "options": ["A) gondola", "B) car", "C) bus"],
      "ans": "A) gondola"
    },
    {
      "type": "mcq",
      "q": "15. Walk on foot means walk with your ______.",
      "options": ["A) legs / feet", "B) hands", "C) arms"],
      "ans": "A) legs / feet"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. I go to school ______ bus.",
      "options": ["A) by", "B) on", "C) in"],
      "ans": "A) by"
    },
    {
      "type": "mcq",
      "q": "17. She goes home ______ foot.",
      "options": ["A) on", "B) by", "C) at"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "18. You ______ wear a helmet.",
      "options": ["A) must", "B) mustn't", "C) don't"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "q": "19. You ______ play on the road.",
      "options": ["A) mustn't", "B) must", "C) should"],
      "ans": "A) mustn't"
    },
    {
      "type": "mcq",
      "q": "20. How long ______ it take?",
      "options": ["A) does", "B) do", "C) is"],
      "ans": "A) does"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Bus", "B) Buss", "C) Bas"],
      "ans": "A) Bus"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Wear / helmet / a ]",
      "options": ["A) Wear a helmet.", "B) Helmet a wear.", "C) A helmet wear."],
      "ans": "A) Wear a helmet."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Helmet", "B) Helmet", "C) Hilmet"],
      "ans": "A) Helmet"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ I go / by car ]",
      "options": ["A) I go by car.", "B) By car I go.", "C) Go I by car."],
      "ans": "A) I go by car."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you go to school?",
      "options": ["A) By car.", "B) At 7 o'clock.", "C) In the room."],
      "ans": "A) By car."
    },
    {
      "type": "mcq",
      "q": "26. Do you wear a seatbelt?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I have."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. Is playing on the road safe?",
      "options": ["A) No, it isn't.", "B) Yes, it is.", "C) Yes, please."],
      "ans": "A) No, it isn't."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_28.png"),
      "q": "28. Look at the sign. What color is the traffic light to STOP?",
      "options": ["A) Red", "B) Green", "C) Yellow"],
      "ans": "A) Red"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_29.png"),
      "q": "29. Look at the picture. What transport is this?",
      "options": ["A) Train", "B) Car", "C) Bike"],
      "ans": "A) Train"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_30.png"),
      "q": "30. Look at the picture. Where are the children crossing?",
      "options": ["A) Zebra crossing", "B) On a hill", "C) In a lake"],
      "ans": "A) Zebra crossing"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 6: Getting around"] = remedialModule6Data;
window.quizBank["REMEDIAL SET"]["Remedial 6 - Getting around"] = remedialModule6Data;
