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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 7)
// ==========================================
const getSmartModule7Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Beach Cleanup Campaign) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_1.png"),
      "q": "1. What activity were the pupils doing at the beach last Saturday?",
      "options": ["A) Cleaning up rubbish and collecting plastic bottles", "B) Swimming in the sea", "C) Building sandcastles"],
      "ans": "A) Cleaning up rubbish and collecting plastic bottles"
    },
    {
      "type": "mcq",
      "q": "2. Why is plastic trash dangerous for sea creatures?",
      "options": ["A) Animals might eat it or get trapped in it", "B) It makes the water too cold", "C) It helps animals swim faster"],
      "ans": "A) Animals might eat it or get trapped in it"
    },
    {
      "type": "mcq",
      "q": "3. What did the pupils do with the collected glass and cans?",
      "options": ["A) Put them into recycling bins", "B) Left them on the sand", "C) Threw them back into the ocean"],
      "ans": "A) Put them into recycling bins"
    },
    {
      "type": "mcq",
      "q": "4. How can we reduce plastic waste at school?",
      "options": ["A) Bring reusable water bottles and food containers", "B) Use single-use plastic bags every day", "C) Throw plastic bottles in the drain"],
      "ans": "A) Bring reusable water bottles and food containers"
    },
    {
      "type": "mcq",
      "q": "5. How did the pupils feel after finishing the beach cleanup?",
      "options": ["A) Proud and happy to help protect the environment", "B) Bored and sleepy", "C) Angry with the teacher"],
      "ans": "A) Proud and happy to happy to protect the environment"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Donating Old Clothes and Toys) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_6.png"),
      "q": "6. What were Mei and her brother collecting in their room?",
      "options": ["A) Old clothes, books, and pre-loved toys", "B) New video games", "C) Empty snack wrappers"],
      "ans": "A) Old clothes, books, and pre-loved toys"
    },
    {
      "type": "mcq",
      "q": "7. Where are they going to donate these items?",
      "options": ["A) To a local children's charity home", "B) To the rubbish dump", "C) To a supermarket"],
      "ans": "A) To a local children's charity home"
    },
    {
      "type": "mcq",
      "q": "8. Whose sleeping bag was found under the bed?",
      "options": ["A) It was her brother's", "B) It was her teacher's", "C) It was her neighbour's"],
      "ans": "A) It was her brother's"
    },
    {
      "type": "mcq",
      "q": "9. Why is donating better than throwing old items away?",
      "options": ["A) It helps people in need and reduces waste", "B) It earns a lot of money", "C) It takes up more space at home"],
      "ans": "A) It helps people in need and reduces waste"
    },
    {
      "type": "mcq",
      "q": "10. How can students help each other in class?",
      "options": ["A) Share stationery and help carry heavy books", "B) Hide their friend's pencil case", "C) Make noise during lessons"],
      "ans": "A) Share stationery and help carry heavy books"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Processing used materials to make new products is called ______.",
      "options": ["A) recycling", "B) wasting", "C) burning"],
      "ans": "A) recycling"
    },
    {
      "type": "mcq",
      "q": "12. A hard, clear material used to make bottles and windows is ______.",
      "options": ["A) glass", "B) paper", "C) wool"],
      "ans": "A) glass"
    },
    {
      "type": "mcq",
      "q": "13. A strong, lightweight material used to make bags and plastic bottles is ______.",
      "options": ["A) plastic", "B) wood", "C) cotton"],
      "ans": "A) plastic"
    },
    {
      "type": "mcq",
      "q": "14. Aluminum cans and tin foil are made of ______.",
      "options": ["A) metal", "B) paper", "C) rubber"],
      "ans": "A) metal"
    },
    {
      "type": "mcq",
      "q": "15. Discarded waste or trash left on the ground is called ______.",
      "options": ["A) rubbish / litter", "B) treasure", "C) compost"],
      "ans": "A) rubbish / litter"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Whose sleeping bag is this? It's ______. (belonging to me)",
      "options": ["A) mine", "B) my", "C) me"],
      "ans": "A) mine"
    },
    {
      "type": "mcq",
      "q": "17. Is this bag yours or ______? (belonging to her)",
      "options": ["A) hers", "B) her", "C) she"],
      "ans": "A) hers"
    },
    {
      "type": "mcq",
      "q": "18. Please help ______ carry these heavy recycling boxes.",
      "options": ["A) us", "B) our", "C) ours"],
      "ans": "A) us"
    },
    {
      "type": "mcq",
      "q": "19. The children cleaned the park. The teacher praised ______.",
      "options": ["A) them", "B) their", "C) theirs"],
      "ans": "A) them"
    },
    {
      "type": "mcq",
      "q": "20. Those shoes belong to Danial. They are ______.",
      "options": ["A) his", "B) him", "C) he"],
      "ans": "A) his"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) We must recycle plastic, glass, and paper.", "B) we must recycle plastic glass and paper.", "C) We must recycle plastic glass and paper"],
      "ans": "A) We must recycle plastic, glass, and paper."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ is / Whose / this / water bottle / ? ]",
      "options": ["A) Whose water bottle is this?", "B) Water bottle whose is this?", "C) Is this whose water bottle?"],
      "ans": "A) Whose water bottle is this?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ Help / to clean / the environment / us ]",
      "options": ["A) Help us to clean the environment.", "B) To clean us help the environment.", "C) Help the environment to clean us."],
      "ans": "A) Help us to clean the environment."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Recycle", "B) Resycle", "C) Recykel"],
      "ans": "A) Recycle"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Whose bag is this?' How do you answer?",
      "options": ["A) It is mine.", "B) It is blue.", "C) It is big."],
      "ans": "A) It is mine."
    },
    {
      "type": "mcq",
      "q": "26. How do you offer to help someone carry heavy rubbish bags?",
      "options": ["A) Can I help you carry those bags?", "B) Those bags are heavy.", "C) Put them on the floor."],
      "ans": "A) Can I help you carry those bags?"
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'How can we help save the Earth?' How do you reply?",
      "options": ["A) We can recycle empty bottles and cans.", "B) We can watch television.", "C) We can throw trash everywhere."],
      "ans": "A) We can recycle empty bottles and cans."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_28.png"),
      "q": "28. Read the recycling bin chart. Which items go into the BLUE bin?",
      "options": ["A) Paper and cardboard", "B) Glass bottles", "C) Food waste"],
      "ans": "A) Paper and cardboard"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_29.png"),
      "q": "29. Read the charity poster. What item is NOT accepted for donation?",
      "options": ["A) Broken electronics", "B) Clean clothes", "C) Storybooks"],
      "ans": "A) Broken electronics"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_30.png"),
      "q": "30. Read the sign. What should you do before leaving the science lab?",
      "options": ["A) Turn off the water taps and lights", "B) Leave the taps running", "C) Throw paper on the floor"],
      "ans": "A) Turn off the water taps and lights"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 7: Helping out"] = getSmartModule7Data;
window.quizBank["GET SMART SET"]["Module 7 - Helping out"] = getSmartModule7Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 7)
// ==========================================
const remedialModule7Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Cleaning the Park) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_1.png"),
      "q": "1. Ali and his friends pick up ____.",
      "options": ["A) rubbish", "B) flowers", "C) cats"],
      "ans": "A) rubbish"
    },
    {
      "type": "mcq",
      "q": "2. They put plastic bottles in the ____.",
      "options": ["A) bin", "B) river", "C) tree"],
      "ans": "A) bin"
    },
    {
      "type": "mcq",
      "q": "3. The park is now ____.",
      "options": ["A) clean", "B) dirty", "C) wet"],
      "ans": "A) clean"
    },
    {
      "type": "mcq",
      "q": "4. Who helped clean the park?",
      "options": ["A) Ali and his friends", "B) Only the teacher", "C) Nobody"],
      "ans": "A) Ali and his friends"
    },
    {
      "type": "mcq",
      "q": "5. Helping out makes the park ____.",
      "options": ["A) beautiful", "B) ugly", "C) noisy"],
      "ans": "A) beautiful"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Recycling Bins) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_6.png"),
      "q": "6. Paper goes into the ____ bin.",
      "options": ["A) blue", "B) red", "C) black"],
      "ans": "A) blue"
    },
    {
      "type": "mcq",
      "q": "7. Glass goes into the ____ bin.",
      "options": ["A) brown", "B) yellow", "C) green"],
      "ans": "A) brown"
    },
    {
      "type": "mcq",
      "q": "8. Recycling helps the ____.",
      "options": ["A) Earth", "B) moon", "C) sun"],
      "ans": "A) Earth"
    },
    {
      "type": "mcq",
      "q": "9. We should not throw trash on the ____.",
      "options": ["A) ground", "B) bin", "C) bag"],
      "ans": "A) ground"
    },
    {
      "type": "mcq",
      "q": "10. Plastic bottles can be ____.",
      "options": ["A) recycled", "B) eaten", "C) burned"],
      "ans": "A) recycled"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Throw rubbish in the ______.",
      "options": ["A) bin", "B) floor", "C) desk"],
      "ans": "A) bin"
    },
    {
      "type": "mcq",
      "q": "12. Material for books: ______.",
      "options": ["A) paper", "B) glass", "C) metal"],
      "ans": "A) paper"
    },
    {
      "type": "mcq",
      "q": "13. Clear material for bottles: ______.",
      "options": ["A) glass", "B) paper", "C) wood"],
      "ans": "A) glass"
    },
    {
      "type": "mcq",
      "q": "14. Material for drink cans: ______.",
      "options": ["A) metal", "B) paper", "C) cloth"],
      "ans": "A) metal"
    },
    {
      "type": "mcq",
      "q": "15. To use items again: ______.",
      "options": ["A) reuse", "B) burn", "C) break"],
      "ans": "A) reuse"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Whose pencil is this? It is ______.",
      "options": ["A) mine", "B) me", "C) I"],
      "ans": "A) mine"
    },
    {
      "type": "mcq",
      "q": "17. That bag belongs to her. It is ______.",
      "options": ["A) hers", "B) she", "C) him"],
      "ans": "A) hers"
    },
    {
      "type": "mcq",
      "q": "18. Please help ______.",
      "options": ["A) me", "B) mine", "C) my"],
      "ans": "A) me"
    },
    {
      "type": "mcq",
      "q": "19. Give the book to ______.",
      "options": ["A) him", "B) his", "C) he"],
      "ans": "A) him"
    },
    {
      "type": "mcq",
      "q": "20. This toy is ______.",
      "options": ["A) yours", "B) you", "C) your"],
      "ans": "A) yours"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Paper", "B) Papor", "C) Paaper"],
      "ans": "A) Paper"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Pick up / rubbish ]",
      "options": ["A) Pick up rubbish.", "B) Rubbish pick up.", "C) Up pick rubbish."],
      "ans": "A) Pick up rubbish."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Glass", "B) Glas", "C) Glasse"],
      "ans": "A) Glass"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ It is / mine ]",
      "options": ["A) It is mine.", "B) Mine it is.", "C) Is it mine."],
      "ans": "A) It is mine."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Whose hat is this?",
      "options": ["A) It is mine.", "B) It is green.", "C) It is old."],
      "ans": "A) It is mine."
    },
    {
      "type": "mcq",
      "q": "26. Can you help me?",
      "options": ["A) Yes, sure!", "B) Yes, I am.", "C) Yes, I have."],
      "ans": "A) Yes, sure!"
    },
    {
      "type": "mcq",
      "q": "27. Do you recycle paper?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) No, I didn't."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_28.png"),
      "q": "28. Look at the bin. What goes inside?",
      "options": ["A) Plastic bottles", "B) Food", "C) Shoes"],
      "ans": "A) Plastic bottles"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_29.png"),
      "q": "29. Look at the sign. What should you do with rubbish?",
      "options": ["A) Put in the bin", "B) Throw on grass", "C) Leave on table"],
      "ans": "A) Put in the bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_30.png"),
      "q": "30. Look at the poster. Is the park clean?",
      "options": ["A) Yes, it is clean.", "B) No, it is dirty.", "C) It is broken."],
      "ans": "A) Yes, it is clean."
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 7: Helping out"] = remedialModule7Data;
window.quizBank["REMEDIAL SET"]["Remedial 7 - Helping out"] = remedialModule7Data;
