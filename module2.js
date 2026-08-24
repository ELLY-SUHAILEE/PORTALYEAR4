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
    // --- PETIKAN 1 (Soalan 1 - 5: Adam's School Timetable) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_1.png"),
      "q": "1. What is Adam's favourite subject?",
      "options": ["A) Science", "B) Maths", "C) Art"],
      "ans": "A) Science"
    },
    {
      "type": "mcq",
      "q": "2. How often does Adam have PE lessons?",
      "options": ["A) Twice a week", "B) Once a week", "C) Three times a week"],
      "ans": "A) Twice a week"
    },
    {
      "type": "mcq",
      "q": "3. On which day does Adam have Social Studies?",
      "options": ["A) On Tuesday", "B) On Monday", "C) On Friday"],
      "ans": "A) On Tuesday"
    },
    {
      "type": "mcq",
      "q": "4. Why does Adam like Art?",
      "options": ["A) Because he likes drawing and painting", "B) Because he likes playing sports", "C) Because he likes numbers"],
      "ans": "A) Because he likes drawing and painting"
    },
    {
      "type": "mcq",
      "q": "5. What subject does Adam have on Thursday morning?",
      "options": ["A) English", "B) Music", "C) PE"],
      "ans": "A) English"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Nurul's Home Chores) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_6.png"),
      "q": "6. What chore does Nurul have to do after dinner?",
      "options": ["A) Clear the table and wash the dishes", "B) Make her bed", "C) Wash the car"],
      "ans": "A) Clear the table and wash the dishes"
    },
    {
      "type": "mcq",
      "q": "7. How often does Nurul clean her bedroom?",
      "options": ["A) She always cleans her room on Saturday", "B) She never cleans her room", "C) She cleans her room once a month"],
      "ans": "A) She always cleans her room on Saturday"
    },
    {
      "type": "mcq",
      "q": "8. What does Nurul do to help her mother in the garden?",
      "options": ["A) Water the plants", "B) Take out the rubbish", "C) Vacuum the floor"],
      "ans": "A) Water the plants"
    },
    {
      "type": "mcq",
      "q": "9. Does Nurul have to take out the rubbish every evening?",
      "options": ["A) Yes, she does.", "B) No, her brother does it.", "C) No, she never does."],
      "ans": "A) Yes, she does."
    },
    {
      "type": "mcq",
      "q": "10. How does Nurul feel about helping at home?",
      "options": ["A) She enjoys helping her family.", "B) She hates doing chores.", "C) She feels tired."],
      "ans": "A) She enjoys helping her family."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The subject where you exercise and play sports is called ______.",
      "options": ["A) Physical Education (PE)", "B) Social Studies", "C) Science"],
      "ans": "A) Physical Education (PE)"
    },
    {
      "type": "mcq",
      "q": "12. The household chore of cleaning dirty plates and cups is called ______.",
      "options": ["A) washing the dishes", "B) making the bed", "C) watering the plants"],
      "ans": "A) washing the dishes"
    },
    {
      "type": "mcq",
      "q": "13. The subject where you learn about history and geography is ______.",
      "options": ["A) Social Studies", "B) Music", "C) Art"],
      "ans": "A) Social Studies"
    },
    {
      "type": "mcq",
      "q": "14. Putting away trash into the bin outside is called ______.",
      "options": ["A) taking out the rubbish", "B) clearing the table", "C) sweeping the floor"],
      "ans": "A) taking out the rubbish"
    },
    {
      "type": "mcq",
      "q": "15. Tidy up your blanket and pillows in the morning is called ______.",
      "options": ["A) making your bed", "B) washing your clothes", "C) setting the table"],
      "ans": "A) making your bed"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. How often ______ you have Science lessons?",
      "options": ["A) do", "B) does", "C) are"],
      "ans": "A) do"
    },
    {
      "type": "mcq",
      "q": "17. She ______ to make her bed every morning.",
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "18. I ______ take out the rubbish. I do it 100% of the time.",
      "options": ["A) always", "B) never", "C) sometimes"],
      "ans": "A) always"
    },
    {
      "type": "mcq",
      "q": "19. They ______ have to wash the dishes because their dad does it.",
      "options": ["A) don't", "B) doesn't", "C) hasn't"],
      "ans": "A) don't"
    },
    {
      "type": "mcq",
      "q": "20. He ______ waters the plants—0% of the time.",
      "options": ["A) never", "B) always", "C) usually"],
      "ans": "A) never"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) I have Art on Wednesdays.", "B) i have art on wednesdays.", "C) I have Art on Wednesdays"],
      "ans": "A) I have Art on Wednesdays."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ have / I / clear / to / the table ]",
      "options": ["A) I have to clear the table.", "B) Clear the table I have to.", "C) I clear to have the table."],
      "ans": "A) I have to clear the table."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ always / She / her / makes / bed ]",
      "options": ["A) She always makes her bed.", "B) Makes her bed she always.", "C) She makes bed always her."],
      "ans": "A) She always makes her bed."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Science", "B) Sience", "C) Sciense"],
      "ans": "A) Science"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'What is your favourite subject?' How do you answer?",
      "options": ["A) My favourite subject is Music.", "B) I am ten years old.", "C) I go to school by bus."],
      "ans": "A) My favourite subject is Music."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'Do you have to clean your room?' How do you reply?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. How do you ask your friend about their home routine?",
      "options": ["A) How often do you water the plants?", "B) What color is your plant?", "C) Where is your garden?"],
      "ans": "A) How often do you water the plants?"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_28.png"),
      "q": "28. Read the school timetable. What lesson is on Friday at 9.00 AM?",
      "options": ["A) Maths", "B) PE", "C) Art"],
      "ans": "A) Maths"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_29.png"),
      "q": "29. Read the chore chart. Who has to take out the rubbish on Tuesday?",
      "options": ["A) Imran", "B) Sarah", "C) Danial"],
      "ans": "A) Imran"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE2_30.png"),
      "q": "30. Read the note. What must students bring for Art class?",
      "options": ["A) Watercolours and brushes", "B) Sports shoes", "C) Calculator"],
      "ans": "A) Watercolours and brushes"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 2: My week"] = getSmartModule2Data;
window.quizBank["GET SMART SET"]["Module 2 - My week"] = getSmartModule2Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 2)
// ==========================================
const remedialModule2Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Siti's Favourite Subject) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_1.png"),
      "q": "1. Siti likes ____.",
      "options": ["A) Art", "B) PE", "C) Maths"],
      "ans": "A) Art"
    },
    {
      "type": "mcq",
      "q": "2. Siti has Art on ____.",
      "options": ["A) Monday", "B) Friday", "C) Sunday"],
      "ans": "A) Monday"
    },
    {
      "type": "mcq",
      "q": "3. What does Siti draw in class?",
      "options": ["A) Flowers", "B) Cars", "C) Animals"],
      "ans": "A) Flowers"
    },
    {
      "type": "mcq",
      "q": "4. Is Art hard for Siti?",
      "options": ["A) No, it is fun.", "B) Yes, it is.", "C) No, it is boring."],
      "ans": "A) No, it is fun."
    },
    {
      "type": "mcq",
      "q": "5. Who is the text about?",
      "options": ["A) Siti", "B) Sarah", "C) Amin"],
      "ans": "A) Siti"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Ben's Chores) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_6.png"),
      "q": "6. Ben has to make his ____.",
      "options": ["A) bed", "B) chair", "C) table"],
      "ans": "A) bed"
    },
    {
      "type": "mcq",
      "q": "7. Ben washes the ____ after eating.",
      "options": ["A) dishes", "B) shoes", "C) clothes"],
      "ans": "A) dishes"
    },
    {
      "type": "mcq",
      "q": "8. When does Ben clean his room?",
      "options": ["A) Every morning", "B) At night", "C) On Sunday"],
      "ans": "A) Every morning"
    },
    {
      "type": "mcq",
      "q": "9. Does Ben help at home?",
      "options": ["A) Yes, he does.", "B) No, he doesn't.", "C) He is sleeping."],
      "ans": "A) Yes, he does."
    },
    {
      "type": "mcq",
      "q": "10. What is Ben's chore in the garden?",
      "options": ["A) Water the plants", "B) Wash the car", "C) Cut the trees"],
      "ans": "A) Water the plants"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. We sing and play instruments in ______ class.",
      "options": ["A) Music", "B) Maths", "C) PE"],
      "ans": "A) Music"
    },
    {
      "type": "mcq",
      "q": "12. We count numbers in ______ class.",
      "options": ["A) Maths", "B) Art", "C) English"],
      "ans": "A) Maths"
    },
    {
      "type": "mcq",
      "q": "13. Cleaning dirty cups is: washing the ______.",
      "options": ["A) dishes", "B) beds", "C) plants"],
      "ans": "A) dishes"
    },
    {
      "type": "mcq",
      "q": "14. Putting water on flowers is: watering the ______.",
      "options": ["A) plants", "B) dishes", "C) tables"],
      "ans": "A) plants"
    },
    {
      "type": "mcq",
      "q": "15. Tidying your blanket is: making your ______.",
      "options": ["A) bed", "B) room", "C) table"],
      "ans": "A) bed"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. I ______ to wash the dishes.",
      "options": ["A) have", "B) has", "C) am"],
      "ans": "A) have"
    },
    {
      "type": "mcq",
      "q": "17. He ______ to clear the table.",
      "options": ["A) has", "B) have", "C) are"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "18. I ______ wash my hands before eating.",
      "options": ["A) always", "B) never", "C) zero"],
      "ans": "A) always"
    },
    {
      "type": "mcq",
      "q": "19. She ______ has PE on Monday.",
      "options": ["A) usually", "B) have", "C) do"],
      "ans": "A) usually"
    },
    {
      "type": "mcq",
      "q": "20. They ______ have Music today.",
      "options": ["A) don't", "B) doesn't", "C) hasn't"],
      "ans": "A) don't"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Music", "B) Musick", "C) Muzik"],
      "ans": "A) Music"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ I / to / have / study ]",
      "options": ["A) I have to study.", "B) Study have to I.", "C) Have I to study."],
      "ans": "A) I have to study."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) English", "B) Inglish", "C) English"],
      "ans": "A) English"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ She / her bed / makes ]",
      "options": ["A) She makes her bed.", "B) Makes her bed she.", "C) Her bed she makes."],
      "ans": "A) She makes her bed."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Do you like Maths?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I have."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "26. What subject is it?",
      "options": ["A) It is Science.", "B) It is Monday.", "C) It is red."],
      "ans": "A) It is Science."
    },
    {
      "type": "mcq",
      "q": "27. Do you make your bed?",
      "options": ["A) Yes, I do.", "B) No, I am.", "C) No, I can't."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_28.png"),
      "q": "28. Read the sign. What subject is in Room 1?",
      "options": ["A) Art", "B) Music", "C) PE"],
      "ans": "A) Art"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_29.png"),
      "q": "29. Look at the chart. Does Ali water the plants?",
      "options": ["A) Yes, he does.", "B) No, he doesn't.", "C) He doesn't know."],
      "ans": "A) Yes, he does."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE2_30.png"),
      "q": "30. Read the timetable. What day is PE class?",
      "options": ["A) Tuesday", "B) Sunday", "C) Saturday"],
      "ans": "A) Tuesday"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 2: My week"] = remedialModule2Data;
window.quizBank["REMEDIAL SET"]["Remedial 2 - My week"] = remedialModule2Data;
