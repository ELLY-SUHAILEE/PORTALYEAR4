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
    // --- PETIKAN 1 (Soalan 1 - 5: Adam at the Park Right Now) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_1.png"),
      "q": "1. What is Adam doing at the park right now?",
      "options": ["A) Swimming in the pool", "B) Playing chess on a wooden bench", "C) Sleeping under a tree"],
      "ans": "B) Playing chess on a wooden bench"
    },
    {
      "type": "mcq",
      "q": "2. Who is skateboarding safely near the trees?",
      "options": ["A) Adam's sister", "B) Adam's mother", "C) Adam's teacher"],
      "ans": "A) Adam's sister"
    },
    {
      "type": "mcq",
      "q": "3. What instrument is Adam's friend playing near the fountain?",
      "options": ["A) The piano", "B) The drums", "C) The guitar"],
      "ans": "C) The guitar"
    },
    {
      "type": "mcq",
      "q": "4. Why is Adam wearing a hat right now?",
      "options": ["A) Because the weather is sunny and hot", "B) Because it is raining heavily", "C) Because it is snowing outside"],
      "ans": "A) Because the weather is sunny and hot"
    },
    {
      "type": "mcq",
      "q": "5. What safety gear is Adam's sister wearing while skateboarding?",
      "options": ["A) A heavy coat and boots", "B) A helmet and knee pads", "C) Swimming goggles"],
      "ans": "B) A helmet and knee pads"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: People at Work Right Now) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_6.png"),
      "q": "6. What is Mr. Lee doing at the public swimming pool right now?",
      "options": ["A) He is eating lunch at the cafe", "B) He is cleaning the floor", "C) He is working as a lifeguard to protect swimmers"],
      "ans": "C) He is working as a lifeguard to protect swimmers"
    },
    {
      "type": "mcq",
      "q": "7. Why are the firefighters wearing heavy protective coats at the scene?",
      "options": ["A) To protect themselves from high heat and flames", "B) Because they feel very cold", "C) To stay dry in the rain"],
      "ans": "A) To protect themselves from high heat and flames"
    },
    {
      "type": "mcq",
      "q": "8. What is the doctor doing in the clinic right now?",
      "options": ["A) Sleeping at his desk", "B) Examining a sick patient with a high fever", "C) Fixing a broken bicycle"],
      "ans": "B) Examining a sick patient with a high fever"
    },
    {
      "type": "mcq",
      "q": "9. Which professional is currently helping a patient fix a painful toothache?",
      "options": ["A) The dentist", "B) The pilot", "C) The chef"],
      "ans": "A) The dentist"
    },
    {
      "type": "mcq",
      "q": "10. Which statement best describes what the lifeguard is doing?",
      "options": ["A) He is diving off the high springboard", "B) He is sleeping under an umbrella", "C) He is watching the swimmers carefully from his high chair"],
      "ans": "C) He is watching the swimmers carefully from his high chair"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A person whose job is to put out fires and rescue people is a ______.",
      "options": ["A) police officer", "B) dentist", "C) firefighter"],
      "ans": "C) firefighter"
    },
    {
      "type": "mcq",
      "q": "12. An expert swimmer employed to watch over swimmers at a pool or beach is a ______.",
      "options": ["A) pilot", "B) lifeguard", "C) waiter"],
      "ans": "B) lifeguard"
    },
    {
      "type": "mcq",
      "q": "13. Hard protective headwear worn when riding a bike or skateboarding is a ______.",
      "options": ["A) helmet", "B) cap", "C) crown"],
      "ans": "A) helmet"
    },
    {
      "type": "mcq",
      "q": "14. An instrument used by doctors to measure body temperature is a ______.",
      "options": ["A) ruler", "B) thermometer", "C) stethoscope"],
      "ans": "B) thermometer"
    },
    {
      "type": "mcq",
      "q": "15. A doctor who specializes in taking care of teeth is a ______.",
      "options": ["A) dentist", "B) nurse", "C) firefighter"],
      "ans": "A) dentist"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Look! My brother ______ chess with his friend at the moment.",
      "options": ["A) play", "B) is playing", "C) plays"],
      "ans": "B) is playing"
    },
    {
      "type": "mcq",
      "q": "17. What ______ the kids doing in the park right now?",
      "options": ["A) are", "B) is", "C) do"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "18. Listen! She ______ safely down the concrete ramp.",
      "options": ["A) skateboard", "B) skateboards", "C) is skateboarding"],
      "ans": "C) is skateboarding"
    },
    {
      "type": "mcq",
      "q": "19. We ______ watching television right now; we are studying for a test.",
      "options": ["A) are not", "B) is not", "C) do not"],
      "ans": "A) are not"
    },
    {
      "type": "mcq",
      "q": "20. Is the firefighter putting out the fire right now? Yes, he ______.",
      "options": ["A) do", "B) is", "C) does"],
      "ans": "B) is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Look! They are playing football in the garden.", "B) look they are playing football in the garden", "C) Look they are playing football in the garden."],
      "ans": "A) Look! They are playing football in the garden."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ doing / What / you / right now / are / ? ]",
      "options": ["A) What you are doing right now?", "B) What are you doing right now?", "C) Are you doing what right now?"],
      "ans": "B) What are you doing right now?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ wearing / She / helmet / is / a / . ]",
      "options": ["A) Wearing a helmet she is.", "B) She helmet is wearing a.", "C) She is wearing a helmet."],
      "ans": "C) She is wearing a helmet."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Firefighter", "B) Firefiter", "C) Firefayter"],
      "ans": "A) Firefighter"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'What are you doing right now?' How do you answer?",
      "options": ["A) I like eating apples.", "B) I am writing an English exercise.", "C) I went to the shop yesterday."],
      "ans": "B) I am writing an English exercise."
    },
    {
      "type": "mcq",
      "q": "26. Your friend asks: 'Is your brother doing his homework?' How do you reply?",
      "options": ["A) Yes, he is.", "B) Yes, he does.", "C) Yes, he can."],
      "ans": "A) Yes, he is."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'What is the lifeguard doing at the beach?' How do you reply?",
      "options": ["A) He swims every morning.", "B) He is buying ice cream.", "C) He is watching the swimmers carefully."],
      "ans": "C) He is watching the swimmers carefully."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_28.png"),
      "q": "28. Look at the worker uniform picture. What job requires wearing a helmet and putting out fires?",
      "options": ["A) Police officer", "B) Doctor", "C) Firefighter"],
      "ans": "C) Firefighter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_29.png"),
      "q": "29. Look at the park scene image. What is the girl doing near the trees?",
      "options": ["A) Skateboarding", "B) Reading a book", "C) Flying a kite"],
      "ans": "A) Skateboarding"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_30.png"),
      "q": "30. Look at the beach warning sign image. What activity is prohibited right now?",
      "options": ["A) Sunbathing", "B) Swimming in high waves", "C) Walking on sand"],
      "ans": "B) Swimming in high waves"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 3: Right now"] = getSmartModule3Data;
window.quizBank["GET SMART SET"]["Module 3 - Right now"] = getSmartModule3Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 3)
// ==========================================
const remedialModule3Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Ben at the Park) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_1.png"),
      "q": "1. Ben is at the ____ right now.",
      "options": ["A) school", "B) park", "C) shop"],
      "ans": "B) park"
    },
    {
      "type": "mcq",
      "q": "2. What is Ben doing?",
      "options": ["A) Playing chess", "B) Sleeping", "C) Washing hands"],
      "ans": "A) Playing chess"
    },
    {
      "type": "mcq",
      "q": "3. Ben is playing chess with his ____.",
      "options": ["A) teacher", "B) mother", "C) friend"],
      "ans": "C) friend"
    },
    {
      "type": "mcq",
      "q": "4. What is his sister doing?",
      "options": ["A) Cooking", "B) Skateboarding", "C) Swimming"],
      "ans": "B) Skateboarding"
    },
    {
      "type": "mcq",
      "q": "5. Ben and his sister are having ____.",
      "options": ["A) fun", "B) work", "C) lunch"],
      "ans": "A) fun"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Mr. Dan the Firefighter) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_6.png"),
      "q": "6. Mr. Dan is a ____.",
      "options": ["A) cook", "B) driver", "C) firefighter"],
      "ans": "C) firefighter"
    },
    {
      "type": "mcq",
      "q": "7. He puts out ____.",
      "options": ["A) fires", "B) water", "C) lights"],
      "ans": "A) fires"
    },
    {
      "type": "mcq",
      "q": "8. He wears a red ____ on his head.",
      "options": ["A) hat", "B) helmet", "C) cap"],
      "ans": "B) helmet"
    },
    {
      "type": "mcq",
      "q": "9. Is Mr. Dan helping people right now?",
      "options": ["A) Yes, he is.", "B) No, he isn't.", "C) Yes, he does."],
      "ans": "A) Yes, he is."
    },
    {
      "type": "mcq",
      "q": "10. He drives a big red fire ____.",
      "options": ["A) bike", "B) boat", "C) engine"],
      "ans": "C) engine"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Person putting out fires: ______.",
      "options": ["A) doctor", "B) firefighter", "C) teacher"],
      "ans": "B) firefighter"
    },
    {
      "type": "mcq",
      "q": "12. Board with wheels: ______.",
      "options": ["A) skateboard", "B) table", "C) car"],
      "ans": "A) skateboard"
    },
    {
      "type": "mcq",
      "q": "13. Protects head: ______.",
      "options": ["A) shoe", "B) sock", "C) helmet"],
      "ans": "C) helmet"
    },
    {
      "type": "mcq",
      "q": "14. Helps sick people: ______.",
      "options": ["A) doctor", "B) baker", "C) pilot"],
      "ans": "A) doctor"
    },
    {
      "type": "mcq",
      "q": "15. Swim helper at beach: ______.",
      "options": ["A) farmer", "B) lifeguard", "C) driver"],
      "ans": "B) lifeguard"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. He ______ running in the park right now.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "B) is"
    },
    {
      "type": "mcq",
      "q": "17. They ______ playing chess right now.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "18. I ______ reading a book now.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "C) am"
    },
    {
      "type": "mcq",
      "q": "19. What are you ______?",
      "options": ["A) doing", "B) do", "C) does"],
      "ans": "A) doing"
    },
    {
      "type": "mcq",
      "q": "20. She is ______ right now.",
      "options": ["A) sleep", "B) sleeping", "C) slept"],
      "ans": "B) sleeping"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Park", "B) Pak", "C) Parck"],
      "ans": "A) Park"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ He is / running. ]",
      "options": ["A) Running he is.", "B) He is running.", "C) Is running he."],
      "ans": "B) He is running."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Helmet", "B) Helmat", "C) Helmet"],
      "ans": "C) Helmet"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ She is / swimming. ]",
      "options": ["A) She is swimming.", "B) Swimming is she.", "C) Is she swimming."],
      "ans": "A) She is swimming."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. What are you doing?",
      "options": ["A) I am playing.", "B) I am seven.", "C) It is red."],
      "ans": "A) I am playing."
    },
    {
      "type": "mcq",
      "q": "26. Is he reading?",
      "options": ["A) No, he do.", "B) Yes, he is.", "C) Yes, he can."],
      "ans": "B) Yes, he is."
    },
    {
      "type": "mcq",
      "q": "27. Are they running?",
      "options": ["A) No, they am not.", "B) No, they isn't.", "C) No, they aren't."],
      "ans": "C) No, they aren't."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_28.png"),
      "q": "28. Look at the picture. Who is this worker?",
      "options": ["A) Dentist", "B) Firefighter", "C) Teacher"],
      "ans": "B) Firefighter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_29.png"),
      "q": "29. Look at the picture. What is the boy doing?",
      "options": ["A) Skateboarding", "B) Swimming", "C) Sleeping"],
      "ans": "A) Skateboarding"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_30.png"),
      "q": "30. Look at the picture. Who is helping the sick child?",
      "options": ["A) Pilot", "B) Chef", "C) Doctor"],
      "ans": "C) Doctor"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 3: Right now"] = remedialModule3Data;
window.quizBank["REMEDIAL SET"]["Remedial 3 - Right now"] = remedialModule3Data;
