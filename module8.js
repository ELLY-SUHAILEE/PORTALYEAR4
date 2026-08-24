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
    // --- PETIKAN 1 (Soalan 1 - 5: Malayan Tigers & The Blue Whale) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_1.png"),
      "q": "1. Which animal is recognized as the largest animal to ever exist on Earth?",
      "options": ["A) The African elephant", "B) The blue whale", "C) The giraffe"],
      "ans": "B) The blue whale"
    },
    {
      "type": "mcq",
      "q": "2. Why are Malayan tigers currently facing the danger of extinction?",
      "options": ["A) Loss of forest habitat and illegal hunting", "B) They have too many natural predators", "C) The weather in Malaysia is too cold"],
      "ans": "A) Loss of forest habitat and illegal hunting"
    },
    {
      "type": "mcq",
      "q": "3. What physical feature makes the cheetah the fastest land animal?",
      "options": ["A) It can fly over high trees", "B) It has a flexible spine and muscular legs", "C) It can swim faster than sharks"],
      "ans": "B) It has a flexible spine and muscular legs"
    },
    {
      "type": "mcq",
      "q": "4. Where do Malayan tigers primarily live in the wild?",
      "options": ["A) In icy arctic plains", "B) In tropical rainforests of Peninsular Malaysia", "C) In dry sandy deserts"],
      "ans": "B) In tropical rainforests of Peninsular Malaysia"
    },
    {
      "type": "mcq",
      "q": "5. How can people help protect endangered animals like the Malayan tiger?",
      "options": ["A) By building factories in natural reserves", "B) By protecting forest habitats and stopping illegal wildlife trade", "C) By keeping wild tigers as domestic pets"],
      "ans": "B) By protecting forest habitats and stopping illegal wildlife trade"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Fascinating Ostriches) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_6.png"),
      "q": "6. Which creature holds the record for being the largest bird in the world?",
      "options": ["A) The bald eagle", "B) The emperor penguin", "C) The ostrich"],
      "ans": "C) The ostrich"
    },
    {
      "type": "mcq",
      "q": "7. Why are ostriches unable to fly despite having large wings?",
      "options": ["A) Their heavy bodies and flat breastbones prevent flight", "B) They are afraid of heights", "C) Their wings are made of heavy metal"],
      "ans": "A) Their heavy bodies and flat breastbones prevent flight"
    },
    {
      "type": "mcq",
      "q": "8. How fast can an ostrich run when fleeing from predators?",
      "options": ["A) Up to 70 kilometers per hour", "B) Only 5 kilometers per hour", "C) Faster than an airplane"],
      "ans": "A) Up to 70 kilometers per hour"
    },
    {
      "type": "mcq",
      "q": "9. How large are ostrich eggs compared to all other bird eggs?",
      "options": ["A) They are the smallest eggs in existence", "B) They are the largest eggs of any living bird", "C) They are identical in size to chicken eggs"],
      "ans": "B) They are the largest eggs of any living bird"
    },
    {
      "type": "mcq",
      "q": "10. What does an ostrich mainly feed on in the savanna?",
      "options": ["A) Seeds, plants, roots, and small reptiles", "B) Large ocean fish", "C) Processed canned foods"],
      "ans": "A) Seeds, plants, roots, and small reptiles"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. A big wild feline with black stripes on orange fur is a ______.",
      "options": ["A) cheetah", "B) tiger", "C) leopard"],
      "ans": "B) tiger"
    },
    {
      "type": "mcq",
      "q": "12. The fastest land animal on Earth capable of running up to 100 km/h is the ______.",
      "options": ["A) cheetah", "B) lion", "C) zebra"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "q": "13. A large, powerful primate native to the forests of central Africa is a ______.",
      "options": ["A) monkey", "B) gorilla", "C) sloth"],
      "ans": "B) gorilla"
    },
    {
      "type": "mcq",
      "q": "14. A species at risk of disappearing forever due to low numbers is ______.",
      "options": ["A) endangered", "B) dangerous", "C) common"],
      "ans": "A) endangered"
    },
    {
      "type": "mcq",
      "q": "15. The massive sea mammal known as the largest animal in existence is the blue ______.",
      "options": ["A) shark", "B) dolphin", "C) whale"],
      "ans": "C) whale"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. A cheetah runs ______ than a lion.",
      "options": ["A) fast", "B) faster", "C) fastest"],
      "ans": "B) faster"
    },
    {
      "type": "mcq",
      "q": "17. The blue whale is the ______ living animal on Earth.",
      "options": ["A) big", "B) bigger", "C) biggest"],
      "ans": "C) biggest"
    },
    {
      "type": "mcq",
      "q": "18. Giraffes are much ______ than horses.",
      "options": ["A) taller", "B) tall", "C) tallest"],
      "ans": "A) taller"
    },
    {
      "type": "mcq",
      "q": "19. Sharks are ______ dangerous than goldfish.",
      "options": ["A) most", "B) more", "C) as"],
      "ans": "B) more"
    },
    {
      "type": "mcq",
      "q": "20. Blue whales are the ______ heavy of all sea creatures.",
      "options": ["A) more", "B) most", "C) very"],
      "ans": "B) most"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) The cheetah is the fastest animal on land.", "B) the cheetah is the fastest animal on land", "C) The Cheetah is the Fastest animal on Land."],
      "ans": "A) The cheetah is the fastest animal on land."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ animal / whale / blue / The / is / largest / the / . ]",
      "options": ["A) The blue whale is the largest animal.", "B) Blue whale the largest animal is the.", "C) The largest animal blue whale is."],
      "ans": "A) The blue whale is the largest animal."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ faster / Cheetahs / are / horses / than / . ]",
      "options": ["A) Cheetahs are faster than horses.", "B) Faster than horses cheetahs are.", "C) Horses are cheetahs than faster."],
      "ans": "A) Cheetahs are faster than horses."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Dangerous", "B) Dangerus", "C) Daingerous"],
      "ans": "A) Dangerous"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Someone asks: 'Which animal is bigger, an elephant or a gorilla?' How do you answer?",
      "options": ["A) An elephant is bigger than a gorilla.", "B) Gorillas live in trees.", "C) Elephants like peanuts."],
      "ans": "A) An elephant is bigger than a gorilla."
    },
    {
      "type": "mcq",
      "q": "26. A classmate asks: 'What is the fastest land animal in the world?' How do you reply?",
      "options": ["A) The cheetah is the fastest land animal.", "B) I like riding bicycles.", "C) Animals sleep at night."],
      "ans": "A) The cheetah is the fastest land animal."
    },
    {
      "type": "mcq",
      "q": "27. Your teacher asks: 'Are Malayan tigers endangered?' How do you reply?",
      "options": ["A) Yes, they are endangered and need our protection.", "B) No, tigers can fly.", "C) Tigers eat green grass."],
      "ans": "A) Yes, they are endangered and need our protection."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_28.png"),
      "q": "28. Look at the photo. Which big wild cat is known as the king of the jungle?",
      "options": ["A) Lion", "B) Rabbit", "C) Ostrich"],
      "ans": "A) Lion"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_29.png"),
      "q": "29. Read the animal speed chart. Which land creature runs at 100 km/h?",
      "options": ["A) Elephant", "B) Cheetah", "C) Tortoise"],
      "ans": "B) Cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_30.png"),
      "q": "30. Look at the ocean creature poster. How heavy can a blue whale grow?",
      "options": ["A) Up to 180 tonnes", "B) Only 10 kilograms", "C) 50 grams"],
      "ans": "A) Up to 180 tonnes"
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
    // --- PETIKAN 1 (Soalan 1 - 5: The Fast Cheetah) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_1.png"),
      "q": "1. The cheetah is a big ____.",
      "options": ["A) cat", "B) bird", "C) fish"],
      "ans": "A) cat"
    },
    {
      "type": "mcq",
      "q": "2. A cheetah can run very ____.",
      "options": ["A) slowly", "B) fast", "C) high"],
      "ans": "B) fast"
    },
    {
      "type": "mcq",
      "q": "3. It has black ____ on yellow fur.",
      "options": ["A) spots", "B) stripes", "C) squares"],
      "ans": "A) spots"
    },
    {
      "type": "mcq",
      "q": "4. Cheetahs live in dry ____.",
      "options": ["A) water", "B) grasslands", "C) ice"],
      "ans": "B) grasslands"
    },
    {
      "type": "mcq",
      "q": "5. The cheetah is the fastest ____ animal.",
      "options": ["A) land", "B) sea", "C) sky"],
      "ans": "A) land"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: The Giant Blue Whale) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_6.png"),
      "q": "6. The blue whale lives in the ____.",
      "options": ["A) ocean", "B) jungle", "C) river"],
      "ans": "A) ocean"
    },
    {
      "type": "mcq",
      "q": "7. It is the ____ animal on Earth.",
      "options": ["A) smallest", "B) biggest", "C) shortest"],
      "ans": "B) biggest"
    },
    {
      "type": "mcq",
      "q": "8. Blue whales eat tiny ocean ____.",
      "options": ["A) krill", "B) apples", "C) trees"],
      "ans": "A) krill"
    },
    {
      "type": "mcq",
      "q": "9. A blue whale is ____ than an elephant.",
      "options": ["A) smaller", "B) larger", "C) thinner"],
      "ans": "B) larger"
    },
    {
      "type": "mcq",
      "q": "10. We should ____ wild animals.",
      "options": ["A) protect", "B) hurt", "C) ignore"],
      "ans": "A) protect"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "q": "11. Fastest land animal: ______.",
      "options": ["A) Cheetah", "B) Turtle", "C) Snail"],
      "ans": "A) Cheetah"
    },
    {
      "type": "mcq",
      "q": "12. Huge ocean animal: blue ______.",
      "options": ["A) Whale", "B) Frog", "C) Ant"],
      "ans": "A) Whale"
    },
    {
      "type": "mcq",
      "q": "13. Tall animal with a very long neck: ______.",
      "options": ["A) Giraffe", "B) Snake", "C) Cat"],
      "ans": "A) Giraffe"
    },
    {
      "type": "mcq",
      "q": "14. Wild cat with orange fur and black stripes: ______.",
      "options": ["A) Tiger", "B) Dog", "C) Rabbit"],
      "ans": "A) Tiger"
    },
    {
      "type": "mcq",
      "q": "15. Big heavy bird that cannot fly: ______.",
      "options": ["A) Ostrich", "B) Parrot", "C) Duck"],
      "ans": "A) Ostrich"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. A cheetah is ______ than a dog.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "17. The blue whale is the ______ animal.",
      "options": ["A) biggest", "B) big", "C) bigger"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "q": "18. An elephant is ______ than a mouse.",
      "options": ["A) bigger", "B) smallest", "C) big"],
      "ans": "A) bigger"
    },
    {
      "type": "mcq",
      "q": "19. A giraffe is ______ than a goat.",
      "options": ["A) taller", "B) tallest", "C) tall"],
      "ans": "A) taller"
    },
    {
      "type": "mcq",
      "q": "20. The ostrich is the ______ bird in the world.",
      "options": ["A) heaviest", "B) heavy", "C) heavier"],
      "ans": "A) heaviest"
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
      "q": "22. Rearrange: [ The cheetah / is fast. ]",
      "options": ["A) Is fast the cheetah.", "B) The cheetah is fast.", "C) Fast is cheetah the."],
      "ans": "B) The cheetah is fast."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Whale", "B) Whal", "C) Wayle"],
      "ans": "A) Whale"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ Tigers / are strong. ]",
      "options": ["A) Tigers are strong.", "B) Strong are tigers.", "C) Are strong tigers."],
      "ans": "A) Tigers are strong."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Is the cheetah fast?",
      "options": ["A) Yes, it is.", "B) Yes, I am.", "C) No, it isn't."],
      "ans": "A) Yes, it is."
    },
    {
      "type": "mcq",
      "q": "26. Which animal is bigger?",
      "options": ["A) An elephant.", "B) An ant.", "C) A fly."],
      "ans": "A) An elephant."
    },
    {
      "type": "mcq",
      "q": "27. Does a blue whale live in water?",
      "options": ["A) Yes, it does.", "B) Yes, it can't.", "C) No, it doesn't."],
      "ans": "A) Yes, it does."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_28.png"),
      "q": "28. Look at the picture. What animal is this?",
      "options": ["A) Gorilla", "B) Duck", "C) Fish"],
      "ans": "A) Gorilla"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_29.png"),
      "q": "29. Look at the picture. Is the giraffe tall?",
      "options": ["A) Yes, it is very tall.", "B) No, it is tiny.", "C) It is short."],
      "ans": "A) Yes, it is very tall."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_30.png"),
      "q": "30. Look at the sign. Protect wild ______.",
      "options": ["A) Animals", "B) Toys", "C) Cars"],
      "ans": "A) Animals"
    }
  ]
};

// Pasangkan data ke dalam QuizBank
window.quizBank["REMEDIAL SET"]["Remedial 8: Amazing animals"] = remedialModule8Data;
window.quizBank["REMEDIAL SET"]["Remedial 8 - Amazing animals"] = remedialModule8Data;
