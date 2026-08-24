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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 2)
// ==========================================
const getSmartModule2Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Maya's Tuesday Routine) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_1.png"),
      "q": "1. What subjects does Maya study on Tuesdays?",
      "options": ["A) Art and Music", "B) P.E. and English", "C) Maths and Science"],
      "ans": "C) Maths and Science"
    },
    {
      "type": "mcq",
      "q": "2. What household task does Maya do after school?",
      "options": ["A) Waters the plants", "B) Washes the car", "C) Cooks dinner"],
      "ans": "A) Waters the plants"
    },
    {
      "type": "mcq",
      "q": "3. How often does Maya do her homework after school?",
      "options": ["A) Never", "B) Always", "C) Sometimes"],
      "ans": "B) Always"
    },
    {
      "type": "mcq",
      "q": "4. When is Maya allowed to play with her friends?",
      "options": ["A) Before doing her homework", "B) During school hours", "C) After finishing her chores and homework"],
      "ans": "C) After finishing her chores and homework"
    },
    {
      "type": "mcq",
      "q": "5. What can we infer about Maya's character?",
      "options": ["A) She is responsible and manages her time well", "B) She dislikes going to school", "C) She prefers playing games all day"],
      "ans": "A) She is responsible and manages her time well"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Alex's Weekdays & Chores) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_6.png"),
      "q": "6. What chore does Alex usually do after dinner?",
      "options": ["A) Sweep the floor", "B) Clear the table", "C) Wash the clothes"],
      "ans": "B) Clear the table"
    },
    {
      "type": "mcq",
      "q": "7. On which day does Alex have P.E. lessons at school?",
      "options": ["A) On Wednesdays", "B) On Sundays", "C) On Saturdays"],
      "ans": "A) On Wednesdays"
    },
    {
      "type": "mcq",
      "q": "8. Why does Alex never stay up late on weekdays?",
      "options": ["A) He has to wake up early for school", "B) He does not like sleeping", "C) He watches TV all night"],
      "ans": "A) He has to wake up early for school"
    },
    {
      "type": "mcq",
      "q": "9. What activity does Alex do on Friday afternoons?",
      "options": ["A) Takes out the rubbish", "B) Goes swimming with his brother", "C) Studies for exams"],
      "ans": "B) Goes swimming with his brother"
    },
    {
      "type": "mcq",
      "q": "10. Which statement about Alex is true?",
      "options": ["A) He never helps his parents at home", "B) He goes to school on weekends", "C) He clears the table after dinner"],
      "ans": "C) He clears the table after dinner"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The subject where you draw, paint, and create crafts is called ______.",
      "options": ["A) Music", "B) Art", "C) Science"],
      "ans": "B) Art"
    },
    {
      "type": "mcq",
      "q": "12. The household chore of cleaning dust and dirt off the floor with a broom is ______.",
      "options": ["A) sweeping the floor", "B) washing the dishes", "C) making the bed"],
      "ans": "A) sweeping the floor"
    },
    {
      "type": "mcq",
      "q": "13. The school subject where students learn about numbers and solve sums is ______.",
      "options": ["A) History", "B) Geography", "C) Maths"],
      "ans": "C) Maths"
    },
    {
      "type": "mcq",
      "q": "14. Removing plates, cups, and cutlery after finishing a meal is called ______.",
      "options": ["A) clearing the table", "B) watering plants", "C) washing the car"],
      "ans": "A) clearing the table"
    },
    {
      "type": "mcq",
      "q": "15. In which subject do students play sports, run, and stay active?",
      "options": ["A) English", "B) P.E.", "C) History"],
      "ans": "B) P.E."
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How often do you make your bed? I ______ make it every morning without fail.",
      "options": ["A) always", "B) never", "C) rarely"],
      "ans": "A) always"
    },
    {
      "type": "mcq",
      "q": "17. She ______ her homework at 5:00 PM every evening.",
      "options": ["A) do", "B) does", "C) doing"],
      "ans": "B) does"
    },
    {
      "type": "mcq",
      "q": "18. They ______ have to go to school on Saturday and Sunday.",
      "options": ["A) doesn't", "B) hasn't", "C) don't"],
      "ans": "C) don't"
    },
    {
      "type": "mcq",
      "q": "19. He ______ sweeps the floor because his older brother does it every day.",
      "options": ["A) never", "B) always", "C) usually"],
      "ans": "A) never"
    },
    {
      "type": "mcq",
      "q": "20. Do you have to set the table before dinner? Yes, I ______.",
      "options": ["A) do", "B) have", "C) am"],
      "ans": "A) do"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) I always study maths on wednesdays.", "B) I always study Maths on Wednesdays.", "C) i always study Maths on Wednesdays."],
      "ans": "B) I always study Maths on Wednesdays."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ table / clears / She / usually / the / . ]",
      "options": ["A) She clears usually the table.", "B) Table she clears usually the.", "C) She usually clears the table."],
      "ans": "C) She usually clears the table."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ do / What / have / chores / you / to / do / ? ]",
      "options": ["A) What chores do you have to do?", "B) What do chores you have to do?", "C) Do you have to do what chores?"],
      "ans": "A) What chores do you have to do?"
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Science", "B) Scence", "C) Sciense"],
      "ans": "A) Science"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'How often do you clean your room?' How do you answer?",
      "options": ["A) I have a big room.", "B) I usually clean it on Saturdays.", "C) My room is blue."],
      "ans": "B) I usually clean it on Saturdays."
    },
    {
      "type": "mcq",
      "q": "26. Your friend asks: 'Do you have to take out the rubbish?' How do you reply?",
      "options": ["A) Yes, I do every evening.", "B) Yes, I am going to school.", "C) No, it is a bin."],
      "ans": "A) Yes, I do every evening."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'What is your favourite weekday subject?' How do you reply?",
      "options": ["A) I like playing games at home.", "B) It is half past eight.", "C) I like Science because we do experiments."],
      "ans": "C) I like Science because we do experiments."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_28.png"),
      "q": "28. Look at the school timetable image. When is the Art class scheduled?",
      "options": ["A) Monday at 8:00 AM", "B) Thursday at 10:00 AM", "C) Friday at 2:00 PM"],
      "ans": "B) Thursday at 10:00 AM"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_29.png"),
      "q": "29. Read the chore chart image. Who is responsible for watering the plants on Wednesday?",
      "options": ["A) Sarah", "B) Tim", "C) Maya"],
      "ans": "C) Maya"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_30.png"),
      "q": "30. Look at the schedule poster. Which days do students need to bring their P.E. kit?",
      "options": ["A) Tuesday and Friday", "B) Monday only", "C) Sunday"],
      "ans": "A) Tuesday and Friday"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 2: My weekdays"] = getSmartModule2Data;
window.quizBank["GET SMART SET"]["Module 2 - My weekdays"] = getSmartModule2Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 2)
// ==========================================
const remedialModule2Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Ben's School Days) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_1.png"),
      "q": "1. Ben has P.E. on ____.",
      "options": ["A) Sunday", "B) Monday", "C) Saturday"],
      "ans": "B) Monday"
    },
    {
      "type": "mcq",
      "q": "2. What does Ben do after school?",
      "options": ["A) He does homework.", "B) He sleeps all day.", "C) He goes to the zoo."],
      "ans": "A) He does homework."
    },
    {
      "type": "mcq",
      "q": "3. Who helps Ben with Maths?",
      "options": ["A) His cat", "B) His teacher", "C) His sister"],
      "ans": "C) His sister"
    },
    {
      "type": "mcq",
      "q": "4. Ben ____ makes his bed.",
      "options": ["A) never", "B) always", "C) rarely"],
      "ans": "B) always"
    },
    {
      "type": "mcq",
      "q": "5. Ben goes to bed at ____.",
      "options": ["A) 9:00 PM", "B) 1:00 AM", "C) 12:00 PM"],
      "ans": "A) 9:00 PM"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Lina's Home Chores) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_6.png"),
      "q": "6. Lina helps her mother at ____.",
      "options": ["A) school", "B) the park", "C) home"],
      "ans": "C) home"
    },
    {
      "type": "mcq",
      "q": "7. She clears the ____ after eating.",
      "options": ["A) table", "B) floor", "C) bed"],
      "ans": "A) table"
    },
    {
      "type": "mcq",
      "q": "8. Lina sweeps the floor with a ____.",
      "options": ["A) pen", "B) broom", "C) spoon"],
      "ans": "B) broom"
    },
    {
      "type": "mcq",
      "q": "9. Lina is a ____ girl.",
      "options": ["A) helpful", "B) lazy", "C) sad"],
      "ans": "A) helpful"
    },
    {
      "type": "mcq",
      "q": "10. Lina's mother is ____.",
      "options": ["A) angry", "B) happy", "C) tired"],
      "ans": "B) happy"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. School subject with sports: ______.",
      "options": ["A) Art", "B) P.E.", "C) Music"],
      "ans": "B) P.E."
    },
    {
      "type": "mcq",
      "q": "12. Subject with numbers: ______.",
      "options": ["A) Maths", "B) English", "C) History"],
      "ans": "A) Maths"
    },
    {
      "type": "mcq",
      "q": "13. Sweep the ______.",
      "options": ["A) wall", "B) window", "C) floor"],
      "ans": "C) floor"
    },
    {
      "type": "mcq",
      "q": "14. Clear the ______.",
      "options": ["A) table", "B) door", "C) shoe"],
      "ans": "A) table"
    },
    {
      "type": "mcq",
      "q": "15. Draw pictures in ______ class.",
      "options": ["A) Science", "B) Art", "C) P.E."],
      "ans": "B) Art"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. I ______ go to school on Monday.",
      "options": ["A) always", "B) never", "C) no"],
      "ans": "A) always"
    },
    {
      "type": "mcq",
      "q": "17. She ______ her homework every day.",
      "options": ["A) do", "B) does", "C) doing"],
      "ans": "B) does"
    },
    {
      "type": "mcq",
      "q": "18. We ______ have school on Sunday.",
      "options": ["A) don't", "B) doesn't", "C) not"],
      "ans": "A) don't"
    },
    {
      "type": "mcq",
      "q": "19. He ______ plays football after school.",
      "options": ["A) is", "B) sometimes", "C) have"],
      "ans": "B) sometimes"
    },
    {
      "type": "mcq",
      "q": "20. Do you sweep the floor? Yes, I ______.",
      "options": ["A) am", "B) have", "C) do"],
      "ans": "C) do"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Maths", "B) Mates", "C) Mathz"],
      "ans": "A) Maths"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ I clean / my room. ]",
      "options": ["A) Room my I clean.", "B) I clean my room.", "C) My clean I room."],
      "ans": "B) I clean my room."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Twesday", "B) Tuesday", "C) Tuseday"],
      "ans": "B) Tuesday"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ She has / P.E. today. ]",
      "options": ["A) P.E. today she has.", "B) Today P.E. has she.", "C) She has P.E. today."],
      "ans": "C) She has P.E. today."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. What day is today?",
      "options": ["A) It is Monday.", "B) It is red.", "C) It is big."],
      "ans": "A) It is Monday."
    },
    {
      "type": "mcq",
      "q": "26. Do you like Art?",
      "options": ["A) Yes, I am.", "B) Yes, I do.", "C) Yes, I can."],
      "ans": "B) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. Do you make your bed?",
      "options": ["A) No, I am not.", "B) No, I don't.", "C) No, I hasn't."],
      "ans": "B) No, I don't."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_28.png"),
      "q": "28. Look at the picture. What subject is this?",
      "options": ["A) Art", "B) Maths", "C) Music"],
      "ans": "B) Maths"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_29.png"),
      "q": "29. Look at the picture. What chore is she doing?",
      "options": ["A) Sweeping the floor", "B) Washing the car", "C) Cooking"],
      "ans": "A) Sweeping the floor"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_30.png"),
      "q": "30. Look at the timetable. What lesson is on Wednesday morning?",
      "options": ["A) Science", "B) Art", "C) English"],
      "ans": "C) English"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 2: My weekdays"] = remedialModule2Data;
window.quizBank["REMEDIAL SET"]["Remedial 2 - My weekdays"] = remedialModule2Data;
