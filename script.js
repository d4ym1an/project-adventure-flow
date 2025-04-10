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
    class Character {
        constructor(name, health, attack, defense) {
          this.name = name;
          this.health = health;
          this.attack = attack;
          this.defense = defense;
        }
        
        takeDamage(damage) {
            const actualDamage = Math.max(0, damage - this.defense); // Damage can't go below 0
            this.health -= actualDamage;
            return actualDamage;
        }
        
        // Method to perform an attack on another character
        attackOpponent(opponent) {
            const damage = this.attack; // Base damage from the character
            const damageDealt = opponent.takeDamage(damage);
            return damageDealt;
        }
    }
    const player1 = new Character("Swordsman-great", 100, 25, 10);
    const player2 = new Character("Swordsman-short", 100, 15, 5);
    const player3 = new Character("mage-wand", 80, 25, 5);
    const player4 = new Character("mage-staff", 80, 30, 5);
    const enemy1 = new Character('Goblin', 50, 5, 5);
    
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
        evil: [
            "Go away old dude, or else ima give you a freaking packet yo!",
            "He gets sad and runs away crying.",
            "You continue your training, and an evil man apears!",
            "I see that you're heart is evil.",
            "Work for me, I can help you become stronger.",
            "You agree to work for him.",
            "You chose two different weapons."
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
        ]
    };


    
    // Add combat options after the Mage Wand choice
function showCombatOptions() {
    nextBtn.style.display = 'none';
    optionBtns.style.display = 'block';
    optionBtns.innerHTML = 'Start fight';
    
    if (currentBranch === 'mage_wand' && currentDialogueIndex === 2) {
        typeText('A goblin appears! Prepare to fight!', () => {
            showCombatOptions(); // Only call once
        });
    }
    

    const attack1Btn = document.createElement('button');
    attack1Btn.textContent = 'Basic Attack';
    attack1Btn.addEventListener('click', () => {
        performAttack('Basic Attack');
    });

    const attack2Btn = document.createElement('button');
    attack2Btn.textContent = 'Fireball';
    attack2Btn.addEventListener('click', () => {
        performAttack('Fireball');
    });

    const attack3Btn = document.createElement('button');
    attack3Btn.textContent = 'Lightning Strike';
    attack3Btn.addEventListener('click', () => {
        performAttack('Lightning Strike');
    });

    const attack4Btn = document.createElement('button');
    attack4Btn.textContent = 'Ice Blast';
    attack4Btn.addEventListener('click', () => {
        performAttack('Ice Blast');
    });

    // Append the buttons to the options container
    optionBtns.appendChild(attack1Btn);
    optionBtns.appendChild(attack2Btn);
    optionBtns.appendChild(attack3Btn);
    optionBtns.appendChild(attack4Btn);
}

// Function to handle the player's attack
function performAttack(attackType) {
    const enemy = enemy1; // Using Goblin as the enemy for now
    
    let damage = 0;
    
    switch (attackType) {
        case 'Basic Attack':
            damage = player3.attack; // Basic attack damage
            break;
        case 'Fireball':
            damage = player3.attack + 10; // Fireball is stronger
            break;
        case 'Lightning Strike':
            damage = player3.attack + 15; // Lightning is the strongest
            break;
        case 'Ice Blast':
            damage = player3.attack + 5; // Ice blast is average
            break;
        default:
            break;
    }
    
    const damageDealt = enemy.takeDamage(damage);
    
    typeText(`You used ${attackType} and dealt ${damageDealt} damage to the enemy!`, () => {
        if (enemy.health <= 0) {
            typeText('You have defeated the Goblin!', () => {
                // Optionally add logic to end the combat or move to the next part
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        } else {
            typeText(`The Goblin has ${enemy.health} health left.`, () => {
                showCombatOptions(); // Allow the player to choose again
            });
        }
    });
}


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
                        image.src = "/assets/char/moistSwordsman.png"; // Set the image to one specific image
                    } else if (currentBranch === 'evil' && currentDialogueIndex === branchDialogues.evil.length - 1) {
                        showEvilWeaponChoices();
                        image.src = "/assets/char/moistSad.png"; // Set the image to one specific image
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
        imageContainer.src = "/assets/char/moist.png";
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
        imageContainer.src = "/assets/char/moist.png";
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

        const poisonDaggerBtn = document.createElement('button');
        poisonDaggerBtn.textContent = 'Dark Magic';
        poisonDaggerBtn.addEventListener('click', () => {
            typeText('You chose the Dark Magic!', () => {
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });

        const cursedSwordBtn = document.createElement('button');
        cursedSwordBtn.textContent = 'Sythe';
        cursedSwordBtn.addEventListener('click', () => {
            typeText('You chose the Sythe!', () => {
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none';
                nextBtn.style.display = 'block';
            });
        });

        optionBtns.appendChild(poisonDaggerBtn);
        optionBtns.appendChild(cursedSwordBtn);
    }
    
});
// In the dialogue sequence, call the combat function at the right time
if (currentBranch === 'mage_wand' && currentDialogueIndex === 10) {
    typeText('A goblin appears! Prepare to fight!', () => {
        showCombatOptions();
    });
}
