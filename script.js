document.addEventListener('DOMContentLoaded', () => {
    const dialogues = [
        "Rich dude ded",
        "He left his treasure to whoever finds it",
        "I need money",
        "I am dedicated to fight my way to the money",
        "I am too weak and must train first",
        "I will train every day",
        "You see an old man walking the streets"
    ];

    
    const branchDialogues = {
        mage: [
            "The class of mage has strong long ranged abilities",
            "But you will not be able to use every type of magic",
            "You must choose between two weapons"
        ],
        swordsman: [
            "The class of swordsman has very powerful close range abilities",
            "But depending on your weapon you will have to choose speed or damage",
            "You must choose between two weapons"
        ],
        evil: [
            "Go away old dude, or else ima give you a freaking packet yo! He gets sad and runs away crying.",
            "You continue your training, and an evil man apears! I see that you're heart is evil. Work for me, I can help you become stronger.",
            "You agree to work for him. You chose two different weapons."
        ],
        short_sword: [
            "filler",//skips first line
            "Great choice",
            "I shall now lead you to a place to advance your skills",
            "Your mentor leads you to an academy to train you",
            "You practice the art of quick and agile attacks",
            "While your their you find a fellow classmate named Link",
            "You become friends and start to train together",
            "Epic training montage",
            "You are ready your mentor says",
            "There is nothing more I can teach you",
            "I'm afraid to leave though",
            "The world outside of what I know i don't know if I can handle it",
            "At that moment you see someone walking towards you",
            "Dad?",
            "Yo we need the money man go and leave us you'll be fine cuh",
            "Filled with motivation you set out with your friend saying goodbye to your mentor and family"
        ],
        great_sword: [
            "filler",//skips first line
            "Fantastic choice",
            "I shall now lead you to a place to advance your skills",
            "Your mentor leads you to an academy to train you",
            "You practice the art of huge devastating attacks",
            "While your their you find a fellow classmate named Link",
            "You become friends and start to train together",
            "Epic training montage",
            "You are ready your mentor says",
            "There is nothing more I can teach you",
            "I'm afraid to leave though",
            "The world outside of what I know i don't know if I can handle it",
            "At that moment you see someone walking towards you",
            "Dad?",
            "Yo we need the money man go and leave us you'll be fine cuh",
            "Filled with motivation you set out with your friend saying goodbye to your mentor and family"

        ],

        evil_magic: [
            "Great choice",
            "You can now destroy people from long range",
            "Training time",
            "Evil training montage"
        ],
        evil_scythe: [
            "Great choice",
            "You can now demolish people from close-mid range",
            "Training time",
            "Evil training montage"
        ],
        evil_trainingOne: [
            "You start to train by killing criminals",
            "You get praised as a hero",
            "Still committed murder so police are called",
            "Police are called on you and they find you",
            "You gotta find a place to hide!"
        ],
        evil_trainingTwo: [
            "You decide to kill poor homeless people 🔥",
            "No one really cares",
            "You go out and find mentor",
            "He tells you, Good stuff young blood",
            "The mentor introduces you to his other student",
            "Sat Ann",
            "You will have my pupil accompany you to the treasure"
        ],
        evil_trainingThree: [
            "You decide to train by fighting anyone who crosses your path.",
            "Your mentor warns you about losing control.",
            "You feel your power growing but at a cost.",
            "You are now feared by everyone around you."
        ],
        evil_hidingSewers: [
            "You run back to the saftey of the sewers",
            "You hide in"
        ],
        evil_hidingSewersDrink: [
            "Why would you drink that?",
            "You really drank sewer water?",
            "I MIGHT have to kill you now",
            "Naaaaaaaaaaaaaaaah"
        ],
        evil_hidingSewersRun: [
            "As you start to run away, you find your mentor!",
            "Good stuff young blud",
            "The mentor introduces you to his other student",
            "Sat Ann",
            "You will have my pupil accompany you to the treasure",
            "Its time to go off and find the tresure!",
            "Now you have to pick how to get there...",
            "While you are in the air..."
        ],
        evil_hidingCorpse:[
            "You decide to hide under the all the Corpse that you have killed",
            "You wait there all day and night",

        ],
        evil_travelFlight: [
            "you see this sea monster, the Kraken...",
            "He is trying to shoot you guys down from the sky.",
            "If you are specialized in dark magic, you are easily able to take him down due to your range",
            "...but if you picked the scythe... you’re gonna have a bad time."
        ],
        evil_travelFlightMagic: [
            "You defeat the boss with ease", 
        ],
        evil_travelFlightScythe: [
            "You have defeated boss!",
            "You are very much hurt though..",
            "You decide to rest up for the night and head to the treasure in the morning",
            "As you travel by land, you are going through the forest...",
            "...and you encounter a group of heavily armored, and geared up bandits.",
            "As you inspect their armor, you realize that they have the treasure!",
            "You realize, that you must fight them for this treasure.",
        ],
        mage_wand: [
            "filler",//skips this line
            "Your mentor brings you to an academy for magic.",
            "You begin practicing the art of quick and precise spellcasting.",
            "You meet a fellow mage in practice named Tessa Gray",
            "You start talking and become friends",
            "Epic training montage together",
            "You are ready your mentor says",
            "There is nothing more I can teach you",
            "I'm afraid to leave though",
            "The world outside of what I know i don't know if I can handle it",
            "At that moment you see someone walking towards you",
            "Dad?",
            "Yo we need the money man go and leave us you'll be fine cuh",
            "Filled with motivation you set out with your friend saying goodbye to your mentor and family"

        ],
        mage_staff: [
            "filler",//skips this line
            "Your mentor brings you to an academy for magic.",
            "You begin practicing the art of powerful and devastating spells.",
            "You meet a fellow mage in practice named Tessa Gray",
            "You start talking and become friends",
            "Epic training montage together",
            "You are ready your mentor says",
            "There is nothing more I can teach you",
            "I'm afraid to leave though",
            "The world outside of what I know i don't know if I can handle it",
            "At that moment you see someone walking towards you",
            "Dad?",
            "Yo we need the money man go and leave us you'll be fine cuh",
            "Filled with motivation you set out with your friend saying goodbye to your mentor and family"
        ],
        seaTravel: [
            "filler",
            "You are introduced to some pirates who will help you to the treasure",
            "They only request that you help on the ship when needed",
            "You set off for the treasure with you ally saying goodbye to your mentor and Dad",  
            "You are at seas for a while with no problems",
            "The captain approaches you and says",
            "We are running out of food we need more is their any way you can help us",
            "If your a mage you are able to conjure food right if not we can just hunt"

        ],
        landTravel: [
            "filler",
            "You find some people who look like they know what their doing and approach them",
            "Yu find out that these people are land pirates and are willing to help you traverse the mountains to get to the treasure",  
            "You set off with them and start to make your way to the treasure",
            "fight somewhere here",
            "more fighting",
            "eat the people you fought since your low on food",
            "get over the mountains",
            "shop for goods at the town shop",
            "Make your way to the vault",
            "puzzle",
            "You make your way into the vault",
            "You see the treasure infront of you",
            "You see a human shaped figure standing infront of the treasure",
            "Its the old man who died the same old man whos treasure you were after",
            "He starts explaining how he has to make sure you are worthy of his fortune",
            "You notice hundreds of bodies around the vault",
            "You fight",
            "He is giving you trouble and is about to kill you",
            "But then Link comes in and saves you at the last second",
            "2v1 ez"
        ],
        conjure: [
            "filler",
            "Wow thats incredible we don't even have to stop for food now",
            "You make sure everyone is fed and no stops are necessary",  
            "We're going to make it to the treasure by tomorrow at this rate",
            "You start to hear a rumbling below you",
            "Everyone starts freaking out",
            "A Kraken appears next to the ship and starts crushing the ship with its tentacles",
            "What do you do"
        ],
        weakKraken: [
            "filler",
            "You are able to defeat the Kraken after a barrage of attacks",
            "Many people on the ship are dead but the ship has not sustained much damage",  
            "You talk to the captain and he is still determined to get you to the treasure",
            "You set sail and head for the treasure",
            "You arrive and say bye to your pirate friends",
            "You walk towards the vault and see its defended by a puzzle"
        ],
        powerKraken: [
            "filler",
            "You defeat the Kraken in one huge blow",
            "It took a while to charge up that attack during that time the Kraken destroyed most the ship",
            "No one died though",
            "You talk to the captain",
            "We can reapir it but it will take time",
            "You are forced to pause your adventure and wait for the ship to be repaired",
            "Once the ship is repaired you head towards the treasure",
            "You arrive with no problems along the way you say goodbye to the pirates who helped you and head for the vault",
            "You arrive at the vault and see someone standing infront of it",
            "You approach him",
            "I am the guard for this treasure you must pass me before you get what you desire",
            "Boss fight",
            "once defeated puzzle to solve",
            "Enter the vault"
        ],
        islandFood: [
            "filler",
            "Theres an island nearby we can get there before nightfall",
            "After 2 hours you arrive at the island",  
            "You realize you and Link are the only people strong enough to hunt",
            "You two set out on the island to search for food",
            "On your search you find three things",
            "Berries, monkeys, or a huge monkey boss",
            "You think about it and realize that you have to choose its a higher risk higher reward situation"
        ],
        berries: [
            "filler",
            "You and Link pick berries for everyone",
            "You head back with enough berries for everyone",  
            "You give everyone there share",
            "Uh Oh",
            "These berries are deadly and kill half the crew who ate first",
            "You realize that someone is on the island and standing infront of a door",
            "You ask them what their doing",
            "Defending the treasure of course",
            "Can you give it to me",
            "No",
            "battle",
            "puzzle",
            "You make your way into the vault",
            "You see the treasure infront of you",
            "You see a human shaped figure standing infront of the treasure",
            "Its the old man who died the same old man whos treasure you were after",
            "He starts explaining how he has to make sure you are worthy of his fortune",
            "You notice hundreds of bodies around the vault",
            "You fight",
            "He is giving you trouble and is about to kill you",
            "But then Link comes in and saves you at the last second",
            "2v1 ez"
        ],
        monkey: [
            "filler",
            "Battle",
            "Head back with monkey meat",  
            "Some get sick from it everyones okay though",
            "You realize that someone is on the island and standing infront of a door",
            "You ask them what their doing",
            "Defending the treasure of course",
            "Can you give it to me",
            "No",
            "battle",
            "puzzle",
            "You make your way into the vault",
            "You see the treasure infront of you",
            "You see a human shaped figure standing infront of the treasure",
            "Its the old man who died the same old man whos treasure you were after",
            "He starts explaining how he has to make sure you are worthy of his fortune",
            "You notice hundreds of bodies around the vault",
            "You fight",
            "He is giving you trouble and is about to kill you",
            "But then Link comes in and saves you at the last second",
            "2v1 ez"
        ],
        monkeyBoss: [
            "filler",
            "Battle",
            "Head back with huge dead monkey",  
            "Feed everyone with some extra monkey meat",
            "It was delicous and you had no problems",
            "You realize that someone is on the island and standing infront of a door",
            "You ask them what their doing",
            "Defending the treasure of course",
            "Can you give it to me",
            "No",
            "battle",
            "puzzle",
            "You make your way into the vault",
            "You see the treasure infront of you",
            "You see a human shaped figure standing infront of the treasure",
            "Its the old man who died the same old man whos treasure you were after",
            "He starts explaining how he has to make sure you are worthy of his fortune",
            "You notice hundreds of bodies around the vault",
            "You fight",
            "He is giving you trouble and is about to kill you",
            "But then Link comes in and saves you at the last second",
            "2v1 ez"
        ]
    };


    
    
    let currentDialogueIndex = 0;
    let currentBranch = null;
    let isTyping = false;
    const typingSpeed = 0;
    const typingAudio = new Audio('/assets/sounds/talking-three.mp3');
    
        const dialogueElement = document.getElementById('dialogue');
        const nextBtn = document.getElementById('next-btn');
        const optionBtns = document.getElementById('option-btns');
        const imageContainer = document.getElementById('image-container');
        
        const button = document.getElementById("mage-btn");
        const image = document.getElementById("image-container");
        
        document.getElementById('mage-btn').addEventListener('click', () => {
            if (isTyping) return;
            
            currentBranch = 'mage';
            currentDialogueIndex = 0;
            optionBtns.style.display = 'none';
            nextBtn.style.display = 'block';
            imageContainer.style.display = 'block'; // Ensure the image is visible
            imageContainer.src = "/assets/char/moistWizard.png"; // Set the mage image
            typeText(branchDialogues.mage[currentDialogueIndex]);
    });
    
    document.getElementById('mage-btn').addEventListener('mouseover', () => {
        imageContainer.src = "/assets/char/moistWizard.png"; // Change image on hover
    });
    
    document.getElementById('mage-btn').addEventListener('mouseout', () => {
        imageContainer.src = "/assets/char/moist.png";
    });
    
    function typeText(text, callback) {
        if (!text || typeof text !== 'string') {
            console.error("Invalid text provided to typeText:", text);
            return;
        }
        isTyping = true;
        dialogueElement.innerHTML = ''; // Use innerHTML to support HTML tags
        let charIndex = 0;
        
        typingAudio.loop = true;
        typingAudio.play();
        
        const interval = setInterval(() => {
            if (charIndex < text.length) {
                dialogueElement.innerHTML += text[charIndex]; // Append characters with HTML support
                charIndex++;
            } else {
                clearInterval(interval);
                typingAudio.pause();
                typingAudio.currentTime = 0;
                isTyping = false;
                if (callback) callback();
            }
        }, typingSpeed);
    }
    
    nextBtn.addEventListener('click', () => {
        if (isTyping) return;
        
        currentDialogueIndex++;
        
        if (currentBranch) {
            if (!branchDialogues[currentBranch]) {
                console.error(`Invalid branch: ${currentBranch}`);
                return;
            }
            
            if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
                nextBtn.style.display = 'none';
                typeText("You're done", () => {
                    imageContainer.style.display = 'none';
                });
            } 
            
            
            
            else {
                typeText(branchDialogues[currentBranch][currentDialogueIndex], () => {
                    if (currentBranch === 'mage' && currentDialogueIndex === 2) {
                        showWeaponChoices();
                        image.src = "/assets/char/moistWizard.png"; // Set the image to one specific image
                    } else if (currentBranch === 'swordsman' && currentDialogueIndex === 2) {
                        showSwordsmanWeaponChoices();
                        image.src = "/assets/char/moistSword.png"; // Set the image to one specific image
                    } else if (currentBranch === 'evil' && currentDialogueIndex === branchDialogues.evil.length - 1) {
                        showEvilWeaponChoices();
                        image.src = "/assets/char/moistEvil.png"; // Set the image to one specific image
                    } else if (currentBranch === "mage_wand" && currentDialogueIndex === 3) {
                        image.src = "assets/char/Tessa.png";
                    }else if (currentBranch === "mage_staff" && currentDialogueIndex === 3) {
                        image.src = "assets/char/Tessa.png"; 
                    }else if (currentBranch === "great_sword" && currentDialogueIndex === 5) {
                        image.src = "assets/char/link.png";
                    }else if (currentBranch === "short_sword" && currentDialogueIndex === 5) {
                        image.src = "assets/char/link.png";
                    }else if (currentBranch === "evil" && currentDialogueIndex === 2) {
                        image.src = "assets/char/moistEvil.png";
                        showTravelChoices();
                    }else if (currentBranch === 'short_sword' && currentDialogueIndex === 15) {
                        showTravelChoices();
                    }else if (currentBranch === 'great_sword' && currentDialogueIndex === 15) {
                        showTravelChoices();
                    }else if (currentBranch === 'mage_wand' && currentDialogueIndex === 13) {
                        showTravelChoices();
                    }else if (currentBranch === 'mage_staff' && currentDialogueIndex === 13) {
                        showTravelChoices();
                    }else if (currentBranch === 'seaTravel' && currentDialogueIndex === 7) {
                        showFoodChoices();
                    }else if (currentBranch === 'islandFood' && currentDialogueIndex === 7) {
                        showHuntChoices();
                    }else if (currentBranch === "monkeyBoss" && currentDialogueIndex === 1) {
                        image.src = "assets/char/monke.png";
                    }else if (currentBranch === "berries" && currentDialogueIndex === 1) {
                        image.src = "assets/icons/berries.webp";
                    }else if (currentBranch === "monkey" && currentDialogueIndex === 1) {
                        image.src = "assets/char/monkeFood.png";
                    }else if (currentBranch === 'conjure' && currentDialogueIndex === 7) {
                        showBattleKrakenChoices();
                    }else if (currentBranch === "seaTravel" && currentDialogueIndex === 5) {
                        image.src = "assets/char/capbob.png";
                    }else if (currentBranch === "conjure" && currentDialogueIndex === 6) {
                        image.src = "assets/char/kraken.png";
                    }else if (currentBranch === "mage_staff" && currentDialogueIndex === 11) {
                        image.src = "assets/char/kermit.png";
                    }else if (currentBranch === "mage_wand" && currentDialogueIndex === 11) {
                        image.src = "assets/char/kermit.png";
                    }else if (currentBranch === "great_sword" && currentDialogueIndex === 13) {
                        image.src = "assets/char/kermit.png";
                    }else if (currentBranch === "short_sword" && currentDialogueIndex === 13) {
                        image.src = "assets/char/kermit.png";
                    }else if (currentBranch === "seaTravel" && currentDialogueIndex === 1) {
                        image.src = "assets/char/pirate.png";
                    }else if (currentBranch === 'mokey_Boss' && currentDialogueIndex === 11) {
                        showPuzzle();
                    }else if (currentBranch === "evil_scythe" && currentDialogueIndex === 1) {
                        image.src = "assets/icons/evilChar.png";
                    }else if (currentBranch === "evil_magic" && currentDialogueIndex === 1) {
                        image.src = "assets/icons/evilChar.png";
                    }else if (currentBranch === "evil_trainingTwo" && currentDialogueIndex === 5) {
                        image.src = "assets/char/satAnn.png";
                    }
                    //BG Images
                    else if (currentBranch === "mage_wand" && currentDialogueIndex === 1) {
                        document.getElementById('backgroundCity').src = "assets/bg/mageSchool.png";
                    }else if (currentBranch === "mage_staff" && currentDialogueIndex === 1) {
                        document.getElementById('backgroundCity').src = "assets/bg/mageSchool.png";
                    }else if (currentBranch === "great_sword" && currentDialogueIndex === 3) {
                        document.getElementById('backgroundCity').src = "assets/bg/swordSchool.png";
                    }else if (currentBranch === "short_sword" && currentDialogueIndex === 3) {
                        document.getElementById('backgroundCity').src = "assets/bg/swordSchool.png";
                    }else if (currentBranch === "evil_magic" && currentDialogueIndex === 1) {
                        document.getElementById('backgroundCity').src = "assets/bg/evilSchool.png";
                    }else if (currentBranch === "evil_scythe" && currentDialogueIndex === 1) {
                        document.getElementById('backgroundCity').src = "assets/bg/evilSchool.png";
                    }
                });
            }
        } else {
            if (currentDialogueIndex >= dialogues.length) {
                nextBtn.style.display = 'none';
                typeText("Choose your path:", () => {
                    optionBtns.style.display = 'block';
                    image.src = "/assets/char/moist.png"; // Set the image to one specific image
                });
            } else {
                typeText(dialogues[currentDialogueIndex]);
            }
        }
    });
    
    document.getElementById('swordsman-btn').addEventListener('click', () => {
        if (isTyping) return;
        
        currentBranch = 'swordsman';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block'; // Ensure the image is visible
        imageContainer.src = "/assets/char/moistSword.png"; // Set the swordsman image
        typeText(branchDialogues.swordsman[currentDialogueIndex]);
    });
    
    document.getElementById('swordsman-btn').addEventListener('mouseover', () => {
        imageContainer.src = "/assets/char/moistSword.png"; // Change image on hover
    });
    
    document.getElementById('swordsman-btn').addEventListener('mouseout', () => {
        imageContainer.src = "/assets/char/moistSword.png";
    });
    document.getElementById('evil-btn').addEventListener('click', () => {
        if (isTyping) return;
        
        currentBranch = 'evil';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block'; // Ensure the image is visible
        imageContainer.src = "/assets/char/moistSad.png"; // Set the evil path image
        typeText(branchDialogues.evil[currentDialogueIndex]);
    });
    
    document.getElementById('evil-btn').addEventListener('mouseover', () => {
        imageContainer.src = "/assets/char/moistSad.png"; // Change image on hover
    });
    
    document.getElementById('evil-btn').addEventListener('mouseout', () => {
        imageContainer.src = "/assets/char/moistSad.png";
    });
    
    function showWeaponChoices() {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const staffBtn = document.createElement('button');
        staffBtn.textContent = 'Choose the Staff';
        staffBtn.addEventListener('click', () => {
            typeText('You chose the Staff!', () => {
                currentBranch = 'mage_staff';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const wandBtn = document.createElement('button');
        wandBtn.textContent = 'Choose the Wand';
        wandBtn.addEventListener('click', () => {
            typeText('You chose the Wand!', () => {
                currentBranch = 'mage_wand';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(staffBtn);
        optionBtns.appendChild(wandBtn);
    }
    function showBattleKrakenChoices() {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const powerBtn = document.createElement('button');
        powerBtn.textContent = 'You chose to charge up a big attack';
        powerBtn.addEventListener('click', () => {
            typeText('You chose to charge up a big attack', () => {
                currentBranch = 'powerKraken';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const weakBtn = document.createElement('button');
        weakBtn.textContent = 'You chose to spam weak attacks';
        weakBtn.addEventListener('click', () => {
            typeText('You chose to spam weak attacks', () => {
                currentBranch = 'weakKraken';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(powerBtn);
        optionBtns.appendChild(weakBtn);
    }
    function showEvilTrainingChoices() {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const evilTrainOne = document.createElement('button');
        evilTrainOne.textContent = 'Kill criminals for practice';
        evilTrainOne.addEventListener('click', () => {
            typeText('You chose to kill criminals for practice!', () => {
                currentBranch = 'evil_trainingOne';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const evilTrainTwo = document.createElement('button');
        evilTrainTwo.textContent = 'Kill poor helpless people 🔥';
        evilTrainTwo.addEventListener('click', () => {
            typeText('You chose to kill poor homless people! (Thats pretty evil dude)', () => {
                currentBranch = 'evil_trainingTwo';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const evilTrainThree = document.createElement('button');
        evilTrainThree.textContent = 'Kill anyone you see';
        evilTrainThree.addEventListener('click', () => {
            typeText('You chose to kill anyone you see!', () => {
                currentBranch = 'evil_trainingThree';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(evilTrainOne);
        optionBtns.appendChild(evilTrainTwo);
        optionBtns.appendChild(evilTrainThree);
    }
    
    function showTravelChoices () {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const landBtn = document.createElement('button');
        landBtn.textContent = 'Land';
        landBtn.addEventListener('click', () => {
            typeText('You chose to travel by land!', () => {
                currentBranch = 'landTravel';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const seaBtn = document.createElement('button');
        seaBtn.textContent = 'Sea';
        seaBtn.addEventListener('click', () => {
            typeText('You chose to travel by sea!', () => {
                currentBranch = 'seaTravel';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(landBtn);
        optionBtns.appendChild(seaBtn);
    }
    function showHuntChoices () {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const berriesBtn = document.createElement('button');
        berriesBtn.textContent = 'Berries';
        berriesBtn.addEventListener('click', () => {
            typeText('You chose pick berries for everyone!', () => {
                currentBranch = 'berries';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const monkeyBtn = document.createElement('button');
        monkeyBtn.textContent = 'Monkey';
        monkeyBtn.addEventListener('click', () => {
            typeText('You chose to fight a bunch of monkeys for food!', () => {
                currentBranch = 'monkey';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        const monkeyBossBtn = document.createElement('button');
        monkeyBossBtn.textContent = 'Monkey Boss';
        monkeyBossBtn.addEventListener('click', () => {
            typeText('You chose to fight one big moneky for food!', () => {
                currentBranch = 'monkeyBoss';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(berriesBtn);
        optionBtns.appendChild(monkeyBtn);
        optionBtns.appendChild(monkeyBossBtn);
    }
    function showFoodChoices () {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const huntBtn = document.createElement('button');
        huntBtn.textContent = 'Hunt';
        huntBtn.addEventListener('click', () => {
            typeText('You chose to find an island and hunt or food!', () => {
                currentBranch = 'islandFood';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const conjureBtn = document.createElement('button');
        conjureBtn.textContent = 'Conjure';
        conjureBtn.addEventListener('click', () => {
            typeText('You conjure food for everyone!', () => {
                currentBranch = 'conjure';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(huntBtn);
        optionBtns.appendChild(conjureBtn);
    }
    function showSwordsmanWeaponChoices() {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const speedWeaponBtn = document.createElement('button');
        speedWeaponBtn.textContent = 'Short Sword';
        speedWeaponBtn.addEventListener('click', () => {
            typeText('You chose the Short Sword!', () => {
                currentBranch = 'short_sword';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        const damageWeaponBtn = document.createElement('button');
        damageWeaponBtn.textContent = 'Great Sword';
        damageWeaponBtn.addEventListener('click', () => {
            typeText('You chose the Great Sword!', () => {
                currentBranch = 'great_sword';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });
        
        optionBtns.appendChild(speedWeaponBtn);
        optionBtns.appendChild(damageWeaponBtn);
    }
    
    function showEvilWeaponChoices() {
        nextBtn.style.display = 'none';
        optionBtns.style.display = 'block';
        optionBtns.innerHTML = '';
        
        const darkMagicBtn = document.createElement('button');
        darkMagicBtn.textContent = 'Dark Magic';
        darkMagicBtn.addEventListener('click', () => {
            typeText('You chose the Dark Magic!', () => {
                currentBranch = 'evil_magic';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
                nextBtn.onclick = handleEvilMagicDialogue; // Attach dialogue handler
            });
        });

        const cursedSwordBtn = document.createElement('button');
        cursedSwordBtn.textContent = 'Scythe';
        cursedSwordBtn.addEventListener('click', () => {
            typeText('You chose the Scythe!', () => {
                currentBranch = 'evil_scythe';
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
                nextBtn.onclick = handleEvilScytheDialogue; // Attach dialogue handler
            });
        });

        optionBtns.appendChild(darkMagicBtn);
        optionBtns.appendChild(cursedSwordBtn);
    }

    function handleEvilMagicDialogue() {
        if (currentDialogueIndex < branchDialogues.evil_magic.length) {
            const text = branchDialogues.evil_magic[currentDialogueIndex];
            currentDialogueIndex++; // Increment index before calling typeText to avoid duplication
            typeText(text);
        } else {
            nextBtn.onclick = null; // Remove handler
            showEvilTrainingChoices(); // Show training choices after dialogue
        }
    }

    function handleEvilScytheDialogue() {
        if (currentDialogueIndex < branchDialogues.evil_scythe.length) {
            const text = branchDialogues.evil_scythe[currentDialogueIndex];
            currentDialogueIndex++; // Increment index before calling typeText to avoid duplication
            typeText(text);
        } else {
            nextBtn.onclick = null; // Remove handler
            showEvilTrainingChoices(); // Show training choices after dialogue
        }
    }

    function showPuzzle() {
        var rows = 5;
        var columns = 5;
        
        var currTile;
        var otherTile;
        
        var turns = 0;
        
        window.onload = function() {
            //initialize the 5x5 board
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns; c++) {
                    //<img>
                    let tile = document.createElement("img");
                    tile.src = "./icons/blank2.jpg";
        
                    //DRAG FUNCTIONALITY
                    tile.addEventListener("dragstart", dragStart); //click on image to drag
                    tile.addEventListener("dragover", dragOver);   //drag an image
                    tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
                    tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
                    tile.addEventListener("drop", dragDrop);       //drop an image onto another one
                    tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop
        
                    document.getElementById("board").append(tile);
                }
            }
        
            //pieces
            let pieces = [];
            for (let i=1; i <= rows*columns; i++) {
                pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
            }
            pieces.reverse();
            for (let i =0; i < pieces.length; i++) {
                let j = Math.floor(Math.random() * pieces.length);
        
                //swap
                let tmp = pieces[i];
                pieces[i] = pieces[j];
                pieces[j] = tmp;
            }
        
            for (let i = 0; i < pieces.length; i++) {
                let tile = document.createElement("img");
                tile.src = "./images/" + pieces[i] + ".jpg";
        
                //DRAG FUNCTIONALITY
                tile.addEventListener("dragstart", dragStart); //click on image to drag
                tile.addEventListener("dragover", dragOver);   //drag an image
                tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
                tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
                tile.addEventListener("drop", dragDrop);       //drop an image onto another one
                tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop
        
                document.getElementById("pieces").append(tile);
            }
        }
        
        //DRAG TILES
        function dragStart() {
            currTile = this; //this refers to image that was clicked on for dragging
        }
        
        function dragOver(e) {
            e.preventDefault();
        }
        
        function dragEnter(e) {
            e.preventDefault();
        }
        
        function dragLeave() {
        
        }
        
        function dragDrop() {
            otherTile = this; //this refers to image that is being dropped on
        }
        
        function dragEnd() {
            if (currTile.src.includes("blank")) {
                return;
            }
            let currImg = currTile.src;
            let otherImg = otherTile.src;
            currTile.src = otherImg;
            otherTile.src = currImg;
        
            turns += 1;
            document.getElementById("turns").innerText = turns;
        }
    }
});
