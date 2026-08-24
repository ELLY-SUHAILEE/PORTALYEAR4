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
    // --- PETIKAN 1 (Soalan 1 - 5: Road Safety Rules) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_1.png"),
      "q": "1. What must passengers always do after sitting in a car?",
      "options": ["A) Open the car windows", "B) Fasten their seatbelts immediately", "C) Stand up on the seat"],
      "ans": "B) Fasten their seatbelts immediately"
    },
    {
      "type": "mcq",
      "q": "2. Where should pedestrians cross a busy street safely?",
      "options": ["A) At a designated zebra crossing", "B) Between parked lorries", "C) Anywhere on the road"],
      "ans": "A) At a designated zebra crossing"
    },
    {
      "type": "mcq",
      "q": "3. What rule must cyclists follow when riding on the road at night?",
      "options": ["A) Turn off all bicycle lights", "B) Wear reflective jackets and use safety lights", "C) Ride as fast as possible"],
      "ans": "B) Wear reflective jackets and use safety lights"
    },
    {
      "type": "mcq",
      "q": "4. Why is it dangerous to talk loudly to the bus driver while he is driving?",
      "options": ["A) It distracts the driver from focusing on the road", "B) The driver cannot hear the radio", "C) It makes the bus go slower"],
      "ans": "A) It distracts the driver from focusing on the road"
    },
    {
      "type": "mcq",
      "q": "5. What should you do before stepping onto a pedestrian crossing?",
      "options": ["A) Run across without stopping", "B) Close your eyes and walk", "C) Look right, look left, and look right again"],
      "ans": "C) Look right, look left, and look right again"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Modes of Transport Around the World) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_6.png"),
      "q": "6. What traditional boat is used to travel along canals in Venice, Italy?",
      "options": ["A) A gondola", "B) A tuk-tuk", "C) A double-decker bus"],
      "ans": "A) A gondola"
    },
    {
      "type": "mcq",
      "q": "7. How do many people travel around busy streets in Thailand?",
      "options": ["A) By snowmobile", "B) By three-wheeled tuk-tuks", "C) By underground subway"],
      "ans": "B) By three-wheeled tuk-tuks"
    },
    {
      "type": "mcq",
      "q": "8. Why are solar-powered trains environmentally friendly?",
      "options": ["A) They produce dangerous smoke", "B) They run on clean energy from the sun", "C) They require heavy petrol fuel"],
      "ans": "B) They run on clean energy from the sun"
    },
    {
      "type": "mcq",
      "q": "9. How long does it take to travel from Kuala Lumpur to Penang by high-speed train?",
      "options": ["A) About four hours", "B) About ten days", "C) Only two minutes"],
      "ans": "A) About four hours"
    },
    {
      "type": "mcq",
      "q": "10. Which mode of transport glides smoothly across water without an engine?",
      "options": ["A) A bicycle", "B) A sailboat", "C) A motorcar"],
      "ans": "B) A sailboat"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Black and white stripes painted on the road for safe walking are called a ______.",
      "options": ["A) footbridge", "B) zebra crossing", "C) speed bump"],
      "ans": "B) zebra crossing"
    },
    {
      "type": "mcq",
      "q": "12. A safety belt worn in a vehicle to secure a passenger is a ______.",
      "options": ["A) seatbelt", "B) helmet", "C) strap"],
      "ans": "A) seatbelt"
    },
    {
      "type": "mcq",
      "q": "13. A small three-wheeled motorized vehicle common in Southeast Asia is a ______.",
      "options": ["A) tuk-tuk", "B) tram", "C) gondola"],
      "ans": "A) tuk-tuk"
    },
    {
      "type": "mcq",
      "q": "14. A person who travels on foot rather than in a vehicle is a ______.",
      "options": ["A) driver", "B) passenger", "C) pedestrian"],
      "ans": "C) pedestrian"
    },
    {
      "type": "mcq",
      "q": "15. A long narrow boat with raised ends, used on canals in Venice is a ______.",
      "options": ["A) gondola", "B) submarine", "C) ferry"],
      "ans": "A) gondola"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. ______ out of the car window while it is moving!",
      "options": ["A) Don't lean", "B) Leaning not", "C) Doesn't lean"],
      "ans": "A) Don't lean"
    },
    {
      "type": "mcq",
      "q": "17. How long ______ it take to get to the train station by taxi?",
      "options": ["A) do", "B) does", "C) is"],
      "ans": "B) does"
    },
    {
      "type": "mcq",
      "q": "18. My father goes to his office ______ train every morning.",
      "options": ["A) by", "B) on", "C) with"],
      "ans": "A) by"
    },
    {
      "type": "mcq",
      "q": "19. The school is near, so we usually go there ______ foot.",
      "options": ["A) by", "B) on", "C) in"],
      "ans": "B) on"
    },
    {
      "type": "mcq",
      "q": "20. ______ both ways before crossing the road safely.",
      "options": ["A) Looked", "B) Looking", "C) Look"],
      "ans": "C) Look"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Always wear a helmet when riding a bicycle.", "B) always wear a helmet when riding a bicycle", "C) Always wear a Helmet when riding a Bicycle."],
      "ans": "A) Always wear a helmet when riding a bicycle."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ seatbelt / Fasten / your / when / in / car / the / . ]",
      "options": ["A) Fasten your seatbelt when in the car.", "B) Your seatbelt fasten when in car the.", "C) In the car fasten when your seatbelt."],
      "ans": "A) Fasten your seatbelt when in the car."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ long / take / How / does / it / to / arrive / ? ]",
      "options": ["A) How long take does it to arrive?", "B) How long does it take to arrive?", "C) Does it take how long to arrive?"],
      "ans": "B) How long does it take to arrive?"
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Pedestrian", "B) Podestrian", "C) Pedestrien"],
      "ans": "A) Pedestrian"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'How do you get to school every day?' How do you answer?",
      "options": ["A) I go to school by bus.", "B) School starts at 7:30 AM.", "C) I like my teacher."],
      "ans": "A) I go to school by bus."
    },
    {
      "type": "mcq",
      "q": "26. A tourist asks: 'How long does it take to walk to the museum?' How do you reply?",
      "options": ["A) It takes about fifteen minutes on foot.", "B) The museum is very big.", "C) Yes, I like walking."],
      "ans": "A) It takes about fifteen minutes on foot."
    },
    {
      "type": "mcq",
      "q": "27. Your friend asks: 'Is it safe to ride a bike without a helmet?' How do you reply?",
      "options": ["A) Yes, it is very easy.", "B) No, you should always wear a helmet for safety.", "C) Helmets are bright colors."],
      "ans": "B) No, you should always wear a helmet for safety."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_28.png"),
      "q": "28. Look at the road sign image. What does the red octagonal sign mean?",
      "options": ["A) Turn left", "B) Stop completely", "C) Speed up"],
      "ans": "B) Stop completely"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_29.png"),
      "q": "29. Read the bus schedule poster. How often does the town express bus arrive?",
      "options": ["A) Every 20 minutes", "B) Once a week", "C) Every 5 hours"],
      "ans": "A) Every 20 minutes"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_30.png"),
      "q": "30. Look at the transport photo. Which unique vehicle is shown floating on canals?",
      "options": ["A) Gondola", "B) Tuk-tuk", "C) Helicopter"],
      "ans": "A) Gondola"
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
    // --- PETIKAN 1 (Soalan 1 - 5: Riding a Bike) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_1.png"),
      "q": "1. What does Lee ride to the park?",
      "options": ["A) A bicycle", "B) A bus", "C) A boat"],
      "ans": "A) A bicycle"
    },
    {
      "type": "mcq",
      "q": "2. What must Lee wear on his head for safety?",
      "options": ["A) A cap", "B) A helmet", "C) A crown"],
      "ans": "B) A helmet"
    },
    {
      "type": "mcq",
      "q": "3. Lee rides his bike ____.",
      "options": ["A) fast and dangerously", "B) slowly and carefully", "C) with closed eyes"],
      "ans": "B) slowly and carefully"
    },
    {
      "type": "mcq",
      "q": "4. Where does Lee keep both hands while riding?",
      "options": ["A) On the handlebars", "B) In his pockets", "C) In the air"],
      "ans": "A) On the handlebars"
    },
    {
      "type": "mcq",
      "q": "5. Riding a bicycle is good ____.",
      "options": ["A) exercise", "B) food", "C) homework"],
      "ans": "A) exercise"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Bus Trip to School) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_6.png"),
      "q": "6. Siti goes to school by ____.",
      "options": ["A) car", "B) bus", "C) train"],
      "ans": "B) bus"
    },
    {
      "type": "mcq",
      "q": "7. Where does Siti wait for the bus?",
      "options": ["A) At the bus stop", "B) Under a tree", "C) Inside the kitchen"],
      "ans": "A) At the bus stop"
    },
    {
      "type": "mcq",
      "q": "8. What does Siti buy to ride the bus?",
      "options": ["A) A ticket", "B) A toy", "C) A book"],
      "ans": "A) A ticket"
    },
    {
      "type": "mcq",
      "q": "9. Siti sits quietly on her ____.",
      "options": ["A) floor", "B) seat", "C) table"],
      "ans": "B) seat"
    },
    {
      "type": "mcq",
      "q": "10. Does Siti talk loudly to the driver?",
      "options": ["A) No, she doesn't.", "B) Yes, she does.", "C) Yes, she is."],
      "ans": "A) No, she doesn't."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Big road vehicle carrying passengers: ______.",
      "options": ["A) Bus", "B) Bike", "C) Boat"],
      "ans": "A) Bus"
    },
    {
      "type": "mcq",
      "q": "12. Vehicle on rails: ______.",
      "options": ["A) Car", "B) Train", "C) Bicycle"],
      "ans": "B) Train"
    },
    {
      "type": "mcq",
      "q": "13. Protects head: ______.",
      "options": ["A) Helmet", "B) Shoe", "C) Shirt"],
      "ans": "A) Helmet"
    },
    {
      "type": "mcq",
      "q": "14. Crossing for walking safely: ______ crossing.",
      "options": ["A) Zebra", "B) Lion", "C) Tiger"],
      "ans": "A) Zebra"
    },
    {
      "type": "mcq",
      "q": "15. Safety belt in a car: ______.",
      "options": ["A) Seatbelt", "B) Rope", "C) Chain"],
      "ans": "A) Seatbelt"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. I go to school ______ bus.",
      "options": ["A) by", "B) on", "C) at"],
      "ans": "A) by"
    },
    {
      "type": "mcq",
      "q": "17. We walk ______ foot to the shop.",
      "options": ["A) on", "B) by", "C) in"],
      "ans": "A) on"
    },
    {
      "type": "mcq",
      "q": "18. ______ your seatbelt!",
      "options": ["A) Fasten", "B) Fastening", "C) Fastened"],
      "ans": "A) Fasten"
    },
    {
      "type": "mcq",
      "q": "19. ______ run across the street!",
      "options": ["A) Don't", "B) Not", "C) Doesn't"],
      "ans": "A) Don't"
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
      "options": ["A) Helmet", "B) Helmet", "C) Hilmet"],
      "ans": "A) Helmet"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Wear a / helmet. ]",
      "options": ["A) Helmet wear a.", "B) Wear a helmet.", "C) A wear helmet."],
      "ans": "B) Wear a helmet."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Ticket", "B) Tiket", "C) Tecket"],
      "ans": "A) Ticket"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Look left / and right. ]",
      "options": ["A) Look left and right.", "B) And right look left.", "C) Left look right and."],
      "ans": "A) Look left and right."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you go to school?",
      "options": ["A) By car.", "B) I am fine.", "C) At 7 o'clock."],
      "ans": "A) By car."
    },
    {
      "type": "mcq",
      "q": "26. Do you wear a seatbelt?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. Is it a bus?",
      "options": ["A) Yes, it is.", "B) Yes, it does.", "C) Yes, it has."],
      "ans": "A) Yes, it is."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_28.png"),
      "q": "28. Look at the picture. What transport is this?",
      "options": ["A) Bicycle", "B) Car", "C) Airplane"],
      "ans": "A) Bicycle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_29.png"),
      "q": "29. Look at the picture. What is on the road?",
      "options": ["A) Zebra crossing", "B) Bridge", "C) Tree"],
      "ans": "A) Zebra crossing"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_30.png"),
      "q": "30. Look at the sign. What does STOP mean?",
      "options": ["A) Do not move", "B) Run fast", "C) Swim"],
      "ans": "A) Do not move"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 6: Getting around"] = remedialModule6Data;
window.quizBank["REMEDIAL SET"]["Remedial 6 - Getting around"] = remedialModule6Data;
