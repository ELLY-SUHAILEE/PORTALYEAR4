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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 9)
// ==========================================
const getSmartModule9Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: School Sports Day) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_1.png"),
      "q": "1. What sport is Mei Mei playing at the school sports day?",
      "options": ["A) Badminton", "B) Table tennis", "C) Basketball"],
      "ans": "A) Badminton"
    },
    {
      "type": "mcq",
      "q": "2. What equipment do you need to play badminton?",
      "options": ["A) Rackets and a shuttlecock", "B) A heavy ball and pins", "C) A bat and a helmet"],
      "ans": "A) Rackets and a shuttlecock"
    },
    {
      "type": "mcq",
      "q": "3. How does Raj run in the 100-meter sprint?",
      "options": ["A) He runs very fast and carefully", "B) He walks slowly", "C) He jumps backward"],
      "ans": "A) He runs very fast and carefully"
    },
    {
      "type": "mcq",
      "q": "4. Why is gymnastics considered a challenging sport?",
      "options": ["A) It requires great balance, flexibility, and practice", "B) It is played in water", "C) You only need a ball"],
      "ans": "A) It requires great balance, flexibility, and practice"
    },
    {
      "type": "mcq",
      "q": "5. What should athletes do before starting any heavy physical activity?",
      "options": ["A) Warm up properly to prevent injury", "B) Eat a big heavy meal", "C) Go to sleep"],
      "ans": "A) Warm up properly to prevent injury"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Extreme and Winter Sports) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_6.png"),
      "q": "6. What water sport involves standing on a board with a sail attached?",
      "options": ["A) Windsurfing", "B) Ice skating", "C) Cricket"],
      "ans": "A) Windsurfing"
    },
    {
      "type": "mcq",
      "q": "7. Where do people usually go ice skating?",
      "options": ["A) On an ice rink", "B) On a grass field", "C) In a swimming pool"],
      "ans": "A) On an ice rink"
    },
    {
      "type": "mcq",
      "q": "8. What safety gear is essential when skateboarding?",
      "options": ["A) Helmet, knee pads, and elbow pads", "B) Swimsuits and goggles", "C) Heavy boots"],
      "ans": "A) Helmet, knee pads, and elbow pads"
    },
    {
      "type": "mcq",
      "q": "9. How often does the football team practice to perform well?",
      "options": ["A) Three times a week after school", "B) Once a year", "C) Only during holidays"],
      "ans": "A) Three times a week after school"
    },
    {
      "type": "mcq",
      "q": "10. What is the main benefit of staying active and doing sports regularly?",
      "options": ["A) It keeps our heart, muscles, and mind healthy", "B) It makes us gain weight quickly", "C) It causes constant tiredness"],
      "ans": "A) It keeps our heart, muscles, and mind healthy"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A sport where athletes perform acrobatic leaps and balance exercises is ______.",
      "options": ["A) gymnastics", "B) baseball", "C) bowling"],
      "ans": "A) gymnastics"
    },
    {
      "type": "mcq",
      "q": "12. The light cone-shaped object hit over the net in badminton is a ______.",
      "options": ["A) shuttlecock", "B) hockey puck", "C) tennis ball"],
      "ans": "A) shuttlecock"
    },
    {
      "type": "mcq",
      "q": "13. Gliding on ice using special boots with blades is called ______.",
      "options": ["A) ice skating", "B) skateboarding", "C) cycling"],
      "ans": "A) ice skating"
    },
    {
      "type": "mcq",
      "q": "14. A game played with a bat and ball between two teams of eleven players, popular in England and India, is ______.",
      "options": ["A) cricket", "B) basketball", "C) volleyball"],
      "ans": "A) cricket"
    },
    {
      "type": "mcq",
      "q": "15. Pads worn on joints to protect against injury during sports are ______.",
      "options": ["A) knee pads and elbow pads", "B) gloves", "C) socks"],
      "ans": "A) knee pads and elbow pads"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Lee Zii Jia plays badminton very ______.",
      "options": ["A) well", "B) good", "C) best"],
      "ans": "A) well"
    },
    {
      "type": "mcq",
      "q": "17. She swims ______ than her brother.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "18. He kicked the ball ______ into the net.",
      "options": ["A) hard", "B) hardly", "C) harder"],
      "ans": "A) hard"
    },
    {
      "type": "mcq",
      "q": "19. The team played ______ and lost the match.",
      "options": ["A) badly", "B) bad", "C) worse"],
      "ans": "A) badly"
    },
    {
      "type": "mcq",
      "q": "20. Are you good ______ playing table tennis?",
      "options": ["A) at", "B) in", "C) on"],
      "ans": "A) at"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) She plays basketball very well.", "B) she plays basketball very well.", "C) She plays basketball very well"],
      "ans": "A) She plays basketball very well."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ good at / Are you / gymnastics / ? ]",
      "options": ["A) Are you good at gymnastics?", "B) Good at gymnastics are you?", "C) You are good at gymnastics?"],
      "ans": "A) Are you good at gymnastics?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ swims / faster than / He / me ]",
      "options": ["A) He swims faster than me.", "B) Faster than me he swims.", "C) He faster than me swims."],
      "ans": "A) He swims faster than me."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Gymnastics", "B) Gimnastics", "C) Gymnasteks"],
      "ans": "A) Gymnastics"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'What is your favourite sport?' How do you answer?",
      "options": ["A) My favourite sport is badminton.", "B) I eat apples every day.", "C) I am ten years old."],
      "ans": "A) My favourite sport is badminton."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'Are you good at ice skating?' How do you answer?",
      "options": ["A) Yes, I am very good at it.", "B) Ice is cold.", "C) No, I don't eat ice."],
      "ans": "A) Yes, I am very good at it."
    },
    {
      "type": "mcq",
      "q": "27. How do you encourage a teammate during a match?",
      "options": ["A) Keep trying! You can do it!", "B) Stop playing now!", "C) Go home early!"],
      "ans": "A) Keep trying! You can do it!"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_28.png"),
      "q": "28. Read the sports club timetable. What time is the gymnastics class on Wednesday?",
      "options": ["A) 4:00 PM", "B) 8:00 AM", "C) 6:30 PM"],
      "ans": "A) 4:00 PM"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_29.png"),
      "q": "29. Look at the gear checklist. What must you bring for swimming lessons?",
      "options": ["A) Goggles and a swimsuit", "B) A racket and ball", "C) Ice skates"],
      "ans": "A) Goggles and a swimsuit"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_30.png"),
      "q": "30. Read the poster. Where will the inter-school football match take place?",
      "options": ["A) School Sports Field", "B) Public Library", "C) Science Lab"],
      "ans": "A) School Sports Field"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 9: Get active!"] = getSmartModule9Data;
window.quizBank["GET SMART SET"]["Module 9 - Get active!"] = getSmartModule9Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 9)
// ==========================================
const remedialModule9Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Playing Games) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_1.png"),
      "q": "1. Ali likes to play ____.",
      "options": ["A) football", "B) piano", "C) chess"],
      "ans": "A) football"
    },
    {
      "type": "mcq",
      "q": "2. He plays football with a ____.",
      "options": ["A) ball", "B) stick", "C) rope"],
      "ans": "A) ball"
    },
    {
      "type": "mcq",
      "q": "3. Ali runs very ____.",
      "options": ["A) fast", "B) slow", "C) quiet"],
      "ans": "A) fast"
    },
    {
      "type": "mcq",
      "q": "4. He plays football on the ____.",
      "options": ["A) field", "B) roof", "C) desk"],
      "ans": "A) field"
    },
    {
      "type": "mcq",
      "q": "5. Playing sports makes Ali ____.",
      "options": ["A) healthy", "B) sick", "C) sad"],
      "ans": "A) healthy"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Swimming Class) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_6.png"),
      "q": "6. Sara goes to the swimming ____.",
      "options": ["A) pool", "B) park", "C) shop"],
      "ans": "A) pool"
    },
    {
      "type": "mcq",
      "q": "7. She wears swimming ____.",
      "options": ["A) goggles", "B) shoes", "C) hat"],
      "ans": "A) goggles"
    },
    {
      "type": "mcq",
      "q": "8. Sara swims very ____.",
      "options": ["A) well", "B) bad", "C) noisy"],
      "ans": "A) well"
    },
    {
      "type": "mcq",
      "q": "9. Swimming is a good ____.",
      "options": ["A) exercise", "B) food", "C) toy"],
      "ans": "A) exercise"
    },
    {
      "type": "mcq",
      "q": "10. Who likes swimming?",
      "options": ["A) Sara", "B) Ali", "C) Tom"],
      "ans": "A) Sara"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Kick the ______ into the goal.",
      "options": ["A) ball", "B) box", "C) bag"],
      "ans": "A) ball"
    },
    {
      "type": "mcq",
      "q": "12. Use a racket to play ______.",
      "options": ["A) badminton", "B) running", "C) swimming"],
      "ans": "A) badminton"
    },
    {
      "type": "mcq",
      "q": "13. Skate on ice with ice ______.",
      "options": ["A) skates", "B) boots", "C) socks"],
      "ans": "A) skates"
    },
    {
      "type": "mcq",
      "q": "14. Protect your head with a ______.",
      "options": ["A) helmet", "B) cap", "C) shirt"],
      "ans": "A) helmet"
    },
    {
      "type": "mcq",
      "q": "15. Move fast on feet: ______.",
      "options": ["A) run", "B) sit", "C) sleep"],
      "ans": "A) run"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. He runs very ______.",
      "options": ["A) fast", "B) fastly", "C) faster"],
      "ans": "A) fast"
    },
    {
      "type": "mcq",
      "q": "17. She plays badminton ______. (good)",
      "options": ["A) well", "B) good", "C) best"],
      "ans": "A) well"
    },
    {
      "type": "mcq",
      "q": "18. I am good ______ running.",
      "options": ["A) at", "B) on", "C) in"],
      "ans": "A) at"
    },
    {
      "type": "mcq",
      "q": "19. Can you ______ high?",
      "options": ["A) jump", "B) jumping", "C) jumped"],
      "ans": "A) jump"
    },
    {
      "type": "mcq",
      "q": "20. He plays ______ than me.",
      "options": ["A) better", "B) good", "C) well"],
      "ans": "A) better"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Sport", "B) Sprot", "C) Spoort"],
      "ans": "A) Sport"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Run / fast ]",
      "options": ["A) Run fast.", "B) Fast run.", "C) Fast run!"],
      "ans": "A) Run fast."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Swim", "B) Swem", "C) Swimm"],
      "ans": "A) Swim"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ I play / football ]",
      "options": ["A) I play football.", "B) Football I play.", "C) Play I football."],
      "ans": "A) I play football."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Can you run fast?",
      "options": ["A) Yes, I can.", "B) Yes, I am.", "C) Yes, I do."],
      "ans": "A) Yes, I can."
    },
    {
      "type": "mcq",
      "q": "26. Are you good at sports?",
      "options": ["A) Yes, I am.", "B) Yes, I can.", "C) Yes, I do."],
      "ans": "A) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. Do you like football?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_28.png"),
      "q": "28. Look at the picture. What sport is this?",
      "options": ["A) Football", "B) Swimming", "C) Running"],
      "ans": "A) Football"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_29.png"),
      "q": "29. Look at the picture. What is he wearing?",
      "options": ["A) A helmet", "B) A coat", "C) A tie"],
      "ans": "A) A helmet"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_30.png"),
      "q": "30. Look at the picture. Is she swimming well?",
      "options": ["A) Yes, she is.", "B) No, she isn't.", "C) She is running."],
      "ans": "A) Yes, she is."
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 9: Get active!"] = remedialModule9Data;
window.quizBank["REMEDIAL SET"]["Remedial 9 - Get active!"] = remedialModule9Data;
