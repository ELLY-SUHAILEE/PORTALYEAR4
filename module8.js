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
// 1. GET SMART SET (30 SOALAN - YEAR 4 MODULE 8)
// ==========================================
const getSmartModule8Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Record-Breaking Animals) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_1.png"),
      "q": "1. What is the biggest animal in the world?",
      "options": ["A) The blue whale", "B) The African elephant", "C) The blue shark"],
      "ans": "A) The blue whale"
    },
    {
      "type": "mcq",
      "q": "2. Which land animal is known to be the fastest runner?",
      "options": ["A) The cheetah", "B) The horse", "C) The lion"],
      "ans": "A) The cheetah"
    },
    {
      "type": "mcq",
      "q": "3. Why is the ostrich unique among birds?",
      "options": ["A) It is the biggest bird and runs very fast, but cannot fly", "B) It is the smallest bird", "C) It swims under water"],
      "ans": "A) It is the biggest bird and runs very fast, but cannot fly"
    },
    {
      "type": "mcq",
      "q": "4. Which land animal is taller than all other animals?",
      "options": ["A) The giraffe", "B) The camel", "C) The bear"],
      "ans": "A) The giraffe"
    },
    {
      "type": "mcq",
      "q": "5. Why are blue whales heavier than elephants?",
      "options": ["A) They can grow up to 30 meters long and weigh over 100 tonnes", "B) They eat only trees", "C) They have heavy fur"],
      "ans": "A) They can grow up to 30 meters long and weigh over 100 tonnes"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Dinosaurs of the Past) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_6.png"),
      "q": "6. When did dinosaurs live on Earth?",
      "options": ["A) Millions of years ago", "B) 100 years ago", "C) Last century"],
      "ans": "A) Millions of years ago"
    },
    {
      "type": "mcq",
      "q": "7. What kind of teeth did Tyrannosaurus Rex have?",
      "options": ["A) Sharp and huge teeth for eating meat", "B) Flat teeth for chewing leaves", "C) No teeth at all"],
      "ans": "A) Sharp and huge teeth for eating meat"
    },
    {
      "type": "mcq",
      "q": "8. Which dinosaur had a very long neck to reach tall leaves?",
      "options": ["A) Diplodocus", "B) Tyrannosaurus Rex", "C) Velociraptor"],
      "ans": "A) Diplodocus"
    },
    {
      "type": "mcq",
      "q": "9. How do scientists learn about dinosaurs today?",
      "options": ["A) By studying dinosaur fossils and bones", "B) By watching them in the wild", "C) By taking photos of living ones"],
      "ans": "A) By studying dinosaur fossils and bones"
    },
    {
      "type": "mcq",
      "q": "10. Why are there no living dinosaurs today?",
      "options": ["A) They became extinct millions of years ago", "B) They flew to space", "C) They live under the sea"],
      "ans": "A) They became extinct millions of years ago"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. The fastest animal on land with a spotted coat is the ______.",
      "options": ["A) cheetah", "B) tiger", "C) leopard"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "q": "12. The remains or traces of ancient animals preserved in rocks are ______.",
      "options": ["A) fossils", "B) statues", "C) shells"],
      "ans": "A) fossils"
    },
    {
      "type": "mcq",
      "q": "13. A large sea mammal that is the biggest creature on Earth is the ______.",
      "options": ["A) blue whale", "B) dolphin", "C) shark"],
      "ans": "A) blue whale"
    },
    {
      "type": "mcq",
      "q": "14. A giant reptile that lived millions of years ago is a ______.",
      "options": ["A) dinosaur", "B) crocodile", "C) lizard"],
      "ans": "A) dinosaur"
    },
    {
      "type": "mcq",
      "q": "15. An animal that eats only plants is called a herbivore, while one that eats meat is ______.",
      "options": ["A) dangerous / carnivorous", "B) gentle", "C) tiny"],
      "ans": "A) dangerous / carnivorous"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. A cheetah is ______ than a lion.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "17. The blue whale is the ______ animal in the world.",
      "options": ["A) biggest", "B) bigger", "C) big"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "q": "18. Diplodocus was ______ than Tyrannosaurus Rex.",
      "options": ["A) longer", "B) longest", "C) long"],
      "ans": "A) longer"
    },
    {
      "type": "mcq",
      "q": "19. Which animal is the ______ dangerous in the jungle?",
      "options": ["A) most", "B) more", "C) much"],
      "ans": "A) most"
    },
    {
      "type": "mcq",
      "q": "20. Giraffes are ______ than horses.",
      "options": ["A) taller", "B) tallest", "C) tall"],
      "ans": "A) taller"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) The blue whale is the biggest animal in the world.", "B) the blue whale is the biggest animal in the world.", "C) The blue whale is the biggest animal in the world"],
      "ans": "A) The blue whale is the biggest animal in the world."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ animal / is / Which / fastest / the / ? ]",
      "options": ["A) Which animal is the fastest?", "B) Which fastest is the animal?", "C) Fastest animal which is the?"],
      "ans": "A) Which animal is the fastest?"
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ Cheetahs / than / faster / are / lions ]",
      "options": ["A) Cheetahs are faster than lions.", "B) Cheetahs faster than lions are.", "C) Faster than lions are cheetahs."],
      "ans": "A) Cheetahs are faster than lions."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Dinosaur", "B) Dinosaur", "C) Dynosaur"],
      "ans": "A) Dinosaur"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Which is bigger, an elephant or a horse?' How do you answer?",
      "options": ["A) An elephant is bigger than a horse.", "B) A horse is fast.", "C) Elephants eat grass."],
      "ans": "A) An elephant is bigger than a horse."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'What is the fastest animal in the world?' How do you answer?",
      "options": ["A) The cheetah is the fastest animal.", "B) The cheetah is spotted.", "C) A snail is slow."],
      "ans": "A) The cheetah is the fastest animal."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Did T-Rex eat plants?' How do you answer?",
      "options": ["A) No, it ate meat.", "B) Yes, it loved grass.", "C) T-Rex is alive today."],
      "ans": "A) No, it ate meat."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_28.png"),
      "q": "28. Read the animal fact card. How fast can a cheetah run?",
      "options": ["A) Up to 110 km/h", "B) 30 km/h", "C) 5 km/h"],
      "ans": "A) Up to 110 km/h"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_29.png"),
      "q": "29. Look at the bar chart comparing animal weights. Which animal is the heaviest?",
      "options": ["A) Blue Whale", "B) Elephant", "C) Hippo"],
      "ans": "A) Blue Whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_30.png"),
      "q": "30. Read the museum ticket info. What time does the Dinosaur Exhibition close?",
      "options": ["A) 6:00 PM", "B) 9:00 AM", "C) 12:00 PM"],
      "ans": "A) 6:00 PM"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["GET SMART SET"]["Module 8: Amazing animals"] = getSmartModule8Data;
window.quizBank["GET SMART SET"]["Module 8 - Amazing animals"] = getSmartModule8Data;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN - YEAR 4 MODULE 8)
// ==========================================
const remedialModule8Data = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Big and Small Animals) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_1.png"),
      "q": "1. An elephant is very ____.",
      "options": ["A) big", "B) small", "C) tiny"],
      "ans": "A) big"
    },
    {
      "type": "mcq",
      "q": "2. A cheetah runs very ____.",
      "options": ["A) fast", "B) slow", "C) sleepy"],
      "ans": "A) fast"
    },
    {
      "type": "mcq",
      "q": "3. A giraffe has a long ____.",
      "options": ["A) neck", "B) nose", "C) ear"],
      "ans": "A) neck"
    },
    {
      "type": "mcq",
      "q": "4. A mouse is ____ than a cat.",
      "options": ["A) smaller", "B) bigger", "C) taller"],
      "ans": "A) smaller"
    },
    {
      "type": "mcq",
      "q": "5. Blue whales live in the ____.",
      "options": ["A) sea / ocean", "B) forest", "C) sky"],
      "ans": "A) sea / ocean"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Dinosaurs) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_6.png"),
      "q": "6. Dinosaurs lived long ____.",
      "options": ["A) ago", "B) today", "C) tomorrow"],
      "ans": "A) ago"
    },
    {
      "type": "mcq",
      "q": "7. T-Rex had big ____.",
      "options": ["A) teeth", "B) wings", "C) horns"],
      "ans": "A) teeth"
    },
    {
      "type": "mcq",
      "q": "8. Diplodocus was very ____.",
      "options": ["A) long", "B) short", "C) small"],
      "ans": "A) long"
    },
    {
      "type": "mcq",
      "q": "9. Dinosaurs are not alive ____.",
      "options": ["A) now", "B) then", "C) before"],
      "ans": "A) now"
    },
    {
      "type": "mcq",
      "q": "10. We can see dinosaur bones in a ____.",
      "options": ["A) museum", "B) school", "C) park"],
      "ans": "A) museum"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Fast animal with spots: ______.",
      "options": ["A) cheetah", "B) turtle", "C) snail"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "q": "12. Very tall animal: ______.",
      "options": ["A) giraffe", "B) monkey", "C) frog"],
      "ans": "A) giraffe"
    },
    {
      "type": "mcq",
      "q": "13. Giant animal of the ocean: ______.",
      "options": ["A) blue whale", "B) goldfish", "C) crab"],
      "ans": "A) blue whale"
    },
    {
      "type": "mcq",
      "q": "14. Big old reptile: ______.",
      "options": ["A) dinosaur", "B) bird", "C) rabbit"],
      "ans": "A) dinosaur"
    },
    {
      "type": "mcq",
      "q": "15. Dinosaur bones in rock: ______.",
      "options": ["A) fossil", "B) wood", "C) leaf"],
      "ans": "A) fossil"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. An elephant is ______ than a dog.",
      "options": ["A) bigger", "B) big", "C) biggest"],
      "ans": "A) bigger"
    },
    {
      "type": "mcq",
      "q": "17. A cheetah is ______ than a snail.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "18. The giraffe is the ______ animal.",
      "options": ["A) tallest", "B) taller", "C) tall"],
      "ans": "A) tallest"
    },
    {
      "type": "mcq",
      "q": "19. The blue whale is the ______.",
      "options": ["A) biggest", "B) bigger", "C) big"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "q": "20. A mouse is ______ than a lion.",
      "options": ["A) smaller", "B) small", "C) smallest"],
      "ans": "A) smaller"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Cheetah", "B) Cheeta", "C) Chetah"],
      "ans": "A) Cheetah"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ Lions are / fast ]",
      "options": ["A) Lions are fast.", "B) Fast are lions.", "C) Are lions fast."],
      "ans": "A) Lions are fast."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Elephant", "B) Elepant", "C) Eliphant"],
      "ans": "A) Elephant"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ It is / big ]",
      "options": ["A) It is big.", "B) Big it is.", "C) Is big it."],
      "ans": "A) It is big."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Is an elephant big?",
      "options": ["A) Yes, it is.", "B) Yes, it can.", "C) No, it isn't."],
      "ans": "A) Yes, it is."
    },
    {
      "type": "mcq",
      "q": "26. Which is faster, a lion or a turtle?",
      "options": ["A) A lion.", "B) A turtle.", "C) Both are slow."],
      "ans": "A) A lion."
    },
    {
      "type": "mcq",
      "q": "27. Do you like dinosaurs?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) No, I'm not."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_28.png"),
      "q": "28. Look at the picture. What animal is this?",
      "options": ["A) Elephant", "B) Tiger", "C) Bird"],
      "ans": "A) Elephant"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_29.png"),
      "q": "29. Look at the picture. Is the giraffe tall?",
      "options": ["A) Yes, it is very tall.", "B) No, it is short.", "C) It is small."],
      "ans": "A) Yes, it is very tall."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_30.png"),
      "q": "30. Look at the picture. What is this?",
      "options": ["A) Dinosaur fossil", "B) Living dog", "C) Fish bowl"],
      "ans": "A) Dinosaur fossil"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 8: Amazing animals"] = remedialModule8Data;
window.quizBank["REMEDIAL SET"]["Remedial 8 - Amazing animals"] = remedialModule8Data;
