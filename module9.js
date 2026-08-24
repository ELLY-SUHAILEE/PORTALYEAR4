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
    // --- PETIKAN 1 (Soalan 1 - 5: Sports & Active Lifestyle) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_1.png"),
      "q": "1. What is the most popular team sport played on the school field?",
      "options": ["A) Ice hockey", "B) Football", "C) Table tennis"],
      "ans": "B) Football"
    },
    {
      "type": "mcq",
      "q": "2. Why is windsurfing considered an exciting surface water sport?",
      "options": ["A) It is played inside a gym", "B) It combines sailing and surfing skills on open water", "C) It requires sitting on a chair"],
      "ans": "B) It combines sailing and surfing skills on open water"
    },
    {
      "type": "mcq",
      "q": "3. Which sport requires players to use light racquets and a shuttlecock?",
      "options": ["A) Badminton", "B) Basketball", "C) Baseball"],
      "ans": "A) Badminton"
    },
    {
      "type": "mcq",
      "q": "4. What physical abilities do gymnasts demonstrate during their routines?",
      "options": ["A) Swimming across deep lakes", "B) Great flexibility, balance, and body strength", "C) Horse riding skills"],
      "ans": "B) Great flexibility, balance, and body strength"
    },
    {
      "type": "mcq",
      "q": "5. Why do players wear protective helmets while cycling or playing baseball?",
      "options": ["A) To prevent head injuries from falls or fast balls", "B) To make themselves look taller", "C) To keep their hair dry"],
      "ans": "A) To prevent head injuries from falls or fast balls"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Famous Athletes & Sports Skills) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_6.png"),
      "q": "6. Who is Datuk Lee Chong Wei widely celebrated for in Malaysia?",
      "options": ["A) His world-class achievements in badminton", "B) Winning gold medals in swimming", "C) Playing professional basketball"],
      "ans": "A) His world-class achievements in badminton"
    },
    {
      "type": "mcq",
      "q": "7. What equipment is essential for a game of basketball?",
      "options": ["A) A large round ball and elevated hoop nets", "B) A wooden bat and gloves", "C) Ice skates and sticks"],
      "ans": "A) A large round ball and elevated hoop nets"
    },
    {
      "type": "mcq",
      "q": "8. Why is swimming recommended as a great full-body workout?",
      "options": ["A) It exercises all main muscles without joint strain", "B) It does not require physical effort", "C) It is done while standing still"],
      "ans": "A) It exercises all main muscles without joint strain"
    },
    {
      "type": "mcq",
      "q": "9. What do players use to hit the lightweight ball in table tennis?",
      "options": ["A) Small wooden paddles covered with rubber", "B) Heavy metal bats", "C) Leather gloves"],
      "ans": "A) Small wooden paddles covered with rubber"
    },
    {
      "type": "mcq",
      "q": "10. Which sport is played on an ice rink using padded gear, sticks, and a puck?",
      "options": ["A) Ice hockey", "B) Volleyball", "C) Golf"],
      "ans": "A) Ice hockey"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A water sport where you stand on a board attached to a sail is ______.",
      "options": ["A) windsurfing", "B) diving", "C) rowing"],
      "ans": "A) windsurfing"
    },
    {
      "type": "mcq",
      "q": "12. A game played by throwing a ball through an elevated hoop is ______.",
      "options": ["A) basketball", "B) tennis", "C) football"],
      "ans": "A) basketball"
    },
    {
      "type": "mcq",
      "q": "13. Exercises demonstrating physical strength, balance, and agility are called ______.",
      "options": ["A) gymnastics", "B) archery", "C) bowling"],
      "ans": "A) gymnastics"
    },
    {
      "type": "mcq",
      "q": "14. A team game played with a bat, ball, and gloves on a diamond field is ______.",
      "options": ["A) baseball", "B) squash", "C) rugby"],
      "ans": "A) baseball"
    },
    {
      "type": "mcq",
      "q": "15. The activity of riding a bicycle for exercise or competition is ______.",
      "options": ["A) cycling", "B) running", "C) skating"],
      "ans": "A) cycling"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. My brother is very good ______ playing table tennis.",
      "options": ["A) at", "B) on", "C) with"],
      "ans": "A) at"
    },
    {
      "type": "mcq",
      "q": "17. Football is ______ popular than squash in our school.",
      "options": ["A) more", "B) most", "C) as"],
      "ans": "A) more"
    },
    {
      "type": "mcq",
      "q": "18. Swimming is the ______ exciting sport during summer!",
      "options": ["A) most", "B) more", "C) very"],
      "ans": "A) most"
    },
    {
      "type": "mcq",
      "q": "19. He was bad at windsurfing, but he is getting ______ now.",
      "options": ["A) better", "B) gooder", "C) best"],
      "ans": "A) better"
    },
    {
      "type": "mcq",
      "q": "20. Who is the ______ athlete in your class?",
      "options": ["A) best", "B) better", "C) goodest"],
      "ans": "A) best"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) I am good at playing table tennis.", "B) i am good at playing table tennis", "C) I am Good at Playing Table Tennis."],
      "ans": "A) I am good at playing table tennis."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ is / Basketball / sport / an / exciting / . ]",
      "options": ["A) Basketball is an exciting sport.", "B) An exciting sport basketball is.", "C) Basketball sport is an exciting."],
      "ans": "A) Basketball is an exciting sport."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ at / good / She / is / gymnastics / . ]",
      "options": ["A) She is good at gymnastics.", "B) Good at gymnastics she is.", "C) Gymnastics is good at she."],
      "ans": "A) She is good at gymnastics."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Badminton", "B) Bedminton", "C) Badminten"],
      "ans": "A) Badminton"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'What sport are you good at?' How do you answer?",
      "options": ["A) I am good at playing badminton.", "B) I am ten years old.", "C) Badminton has shuttlecocks."],
      "ans": "A) I am good at playing badminton."
    },
    {
      "type": "mcq",
      "q": "26. A classmate asks: 'Is windsurfing difficult?' How do you reply?",
      "options": ["A) Yes, it requires a lot of balance and practice.", "B) It is blue in color.", "C) Windsurfing is a fruit."],
      "ans": "A) Yes, it requires a lot of balance and practice."
    },
    {
      "type": "mcq",
      "q": "27. Your friend asks: 'Which sport do you like best?' How do you reply?",
      "options": ["A) I like swimming best because it is fun.", "B) I went to sleep at 9 PM.", "C) Swimming pool is big."],
      "ans": "A) I like swimming best because it is fun."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_28.png"),
      "q": "28. Look at the equipment photo. Which sport uses a high hoop and net?",
      "options": ["A) Basketball", "B) Football", "C) Running"],
      "ans": "A) Basketball"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_29.png"),
      "q": "29. Read the sports chart. Which activity is listed as the most popular outdoor sport?",
      "options": ["A) Football", "B) Chess", "C) Bowling"],
      "ans": "A) Football"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_30.png"),
      "q": "30. Look at the gear picture. What items are needed to play badminton?",
      "options": ["A) Racquet and shuttlecock", "B) Bat and heavy ball", "C) Skates and puck"],
      "ans": "A) Racquet and shuttlecock"
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
    // --- PETIKAN 1 (Soalan 1 - 5: Playing Basketball) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_1.png"),
      "q": "1. What sport does Dan play at school?",
      "options": ["A) Basketball", "B) Swimming", "C) Windsurfing"],
      "ans": "A) Basketball"
    },
    {
      "type": "mcq",
      "q": "2. Dan is good at ____ the ball into the hoop.",
      "options": ["A) throwing", "B) kicking", "C) eating"],
      "ans": "A) throwing"
    },
    {
      "type": "mcq",
      "q": "3. Where does Dan play basketball?",
      "options": ["A) At the basketball court", "B) In the kitchen", "C) On a bus"],
      "ans": "A) At the basketball court"
    },
    {
      "type": "mcq",
      "q": "4. Who plays with Dan?",
      "options": ["A) His classmates", "B) His cat", "C) Nobody"],
      "ans": "A) His classmates"
    },
    {
      "type": "mcq",
      "q": "5. Playing basketball keeps Dan ____.",
      "options": ["A) active and strong", "B) sleepy", "C) sick"],
      "ans": "A) active and strong"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Swimming Class) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_6.png"),
      "q": "6. Maya goes to the pool for ____ lessons.",
      "options": ["A) swimming", "B) cooking", "C) dancing"],
      "ans": "A) swimming"
    },
    {
      "type": "mcq",
      "q": "7. What does Maya wear to protect her eyes?",
      "options": ["A) Goggles", "B) Sunglasses", "C) A hat"],
      "ans": "A) Goggles"
    },
    {
      "type": "mcq",
      "q": "8. Does Maya enjoy swimming?",
      "options": ["A) Yes, she loves it.", "B) No, she hates it.", "C) She cannot swim."],
      "ans": "A) Yes, she loves it."
    },
    {
      "type": "mcq",
      "q": "9. Swimming is a fun ____ sport.",
      "options": ["A) water", "B) sky", "C) snow"],
      "ans": "A) water"
    },
    {
      "type": "mcq",
      "q": "10. Who helps Maya learn new swimming strokes?",
      "options": ["A) Her coach", "B) Her doctor", "C) Her driver"],
      "ans": "A) Her coach"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Game with a hoop and big ball: ______.",
      "options": ["A) Basketball", "B) Chess", "C) Golf"],
      "ans": "A) Basketball"
    },
    {
      "type": "mcq",
      "q": "12. Moving through water: ______.",
      "options": ["A) Swimming", "B) Running", "C) Jumping"],
      "ans": "A) Swimming"
    },
    {
      "type": "mcq",
      "q": "13. Riding a bicycle: ______.",
      "options": ["A) Cycling", "B) Flying", "C) Walking"],
      "ans": "A) Cycling"
    },
    {
      "type": "mcq",
      "q": "14. Sport with shuttlecock and racquet: ______.",
      "options": ["A) Badminton", "B) Football", "C) Hockey"],
      "ans": "A) Badminton"
    },
    {
      "type": "mcq",
      "q": "15. Not easy to do: ______.",
      "options": ["A) Difficult", "B) Easy", "C) Fast"],
      "ans": "A) Difficult"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. I am good ______ swimming.",
      "options": ["A) at", "B) in", "C) on"],
      "ans": "A) at"
    },
    {
      "type": "mcq",
      "q": "17. He is ______ at football than me.",
      "options": ["A) better", "B) good", "C) best"],
      "ans": "A) better"
    },
    {
      "type": "mcq",
      "q": "18. Running is ______ than walking.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "19. She is the ______ swimmer in class.",
      "options": ["A) best", "B) better", "C) good"],
      "ans": "A) best"
    },
    {
      "type": "mcq",
      "q": "20. Sports are ______ fun.",
      "options": ["A) very", "B) more", "C) most"],
      "ans": "A) very"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Sports", "B) Spports", "C) Spotes"],
      "ans": "A) Sports"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ I like / playing sports. ]",
      "options": ["A) Sports playing I like.", "B) I like playing sports.", "C) Playing I like sports."],
      "ans": "B) I like playing sports."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Swimming", "B) Swiming", "C) Sweeming"],
      "ans": "A) Swimming"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ She is / good at running. ]",
      "options": ["A) She is good at running.", "B) Running good at she is.", "C) Good at she running is."],
      "ans": "A) She is good at running."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Are you good at swimming?",
      "options": ["A) Yes, I am.", "B) Yes, I do.", "C) No, I didn't."],
      "ans": "A) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "26. Do you play football?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can't."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. Is cycling fun?",
      "options": ["A) Yes, it is very fun.", "B) No, it has wheels.", "C) Yes, I am cycle."],
      "ans": "A) Yes, it is very fun."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_28.png"),
      "q": "28. Look at the picture. What sport is shown with a bicycle?",
      "options": ["A) Cycling", "B) Skating", "C) Swimming"],
      "ans": "A) Cycling"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_29.png"),
      "q": "29. Look at the picture. Where is the child swimming?",
      "options": ["A) In a swimming pool", "B) On a road", "C) In a field"],
      "ans": "A) In a swimming pool"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_30.png"),
      "q": "30. Look at the picture. What activity is this runner doing?",
      "options": ["A) Running", "B) Sleeping", "C) Cooking"],
      "ans": "A) Running"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 9: Get active!"] = remedialModule9Data;
window.quizBank["REMEDIAL SET"]["Remedial 9 - Get active!"] = remedialModule9Data;
