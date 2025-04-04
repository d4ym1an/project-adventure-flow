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
            "Go away old dude!",
            "He gets sad and runs away crying.",
            "You continue your training."
        ],
        mage_wand: [
            "The Wand feels light in your hand, a perfect tool for quick magic!",
            "Your mentor brings you to an academy for magic.",
            "You begin practicing the art of quick and precise spellcasting."
        ],
        mage_staff: [
            "You feel the power of the Staff coursing through you!",
            "Your mentor brings you to an academy for magic."
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

    const moistImagePath = '/assets/images/moist.png';
    const moistMageImagePath = '/assets/char/moistWizard.png';
    const moistSwordImagePath = '/assets/char/moistSwords.png';
    const moistSadImagePath = '/assets/char/moistSad.png';

    // Hover functionality for the character buttons
    document.getElementById('mage-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block';
        imageContainer.src = moistMageImagePath;
    });
    document.getElementById('swordsman-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block';
        imageContainer.src = moistSwordImagePath;
    });
    document.getElementById('evil-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block';
        imageContainer.src = moistSadImagePath;
    });
    document.getElementById('mage-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistMageImagePath;
    });
    document.getElementById('swordsman-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistSwordImagePath;
    });
    document.getElementById('evil-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistSadImagePath;
    });

    dialogueElement.addEventListener('mouseover', () => {
        imageContainer.style.display = 'block';
        imageContainer.src = moistImagePath;
    });
    dialogueElement.addEventListener('mouseout', () => {
        imageContainer.style.display = 'none';
    });

    function typeText(text, callback) {
        if (!text || typeof text !== 'string') {
            console.error("Invalid text provided to typeText:", text);
            return; // Exit the function if text is invalid
        }
        isTyping = true;
        dialogueElement.textContent = '';
        let charIndex = 0;

        typingAudio.loop = true;
        typingAudio.play();

        const interval = setInterval(() => {
            if (charIndex < text.length) {
                dialogueElement.textContent += text[charIndex];
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
        if (isTyping) return; // Prevent skipping while typing
    
        currentDialogueIndex++;
    
        if (currentBranch) {
            // Ensure the branch dialogues exist for the current branch
            if (!branchDialogues[currentBranch]) {
                console.error(`Invalid branch: ${currentBranch}`);
                return; // Exit if the branch is invalid
            }

            // Handle branch dialogues
            if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
                nextBtn.style.display = 'none';
                typeText("You're done", () => {
                    imageContainer.style.display = 'none';
                });
            } else {
                typeText(branchDialogues[currentBranch][currentDialogueIndex], () => {
                    if (currentBranch === 'mage' && currentDialogueIndex === 2) {
                        // When player reaches the choice point (Mage branch)
                        showWeaponChoices(); // Show weapon choice buttons for mage
                    } else if (currentBranch === 'swordsman' && currentDialogueIndex === 2) {
                        // When player reaches the choice point (Swordsman branch)
                        showSwordsmanWeaponChoices(); // Show weapon choice buttons for swordsman
                    }
                });
            }
        } else {
            // Handle main dialogues
            if (currentDialogueIndex >= dialogues.length) {
                nextBtn.style.display = 'none';
                typeText("Choose your path:", () => {
                    optionBtns.style.display = 'block'; // Show branching options
                    imageContainer.style.display = 'none';
                });
            } else {
                typeText(dialogues[currentDialogueIndex]);
            }
        }
    });
    
    // Add event listeners for branching options
    document.getElementById('mage-btn').addEventListener('click', () => {
        if (isTyping) return;

        currentBranch = 'mage';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block';
        imageContainer.src = moistMageImagePath;
        typeText(branchDialogues.mage[currentDialogueIndex]);
    });

    document.getElementById('swordsman-btn').addEventListener('click', () => {
        if (isTyping) return;

        currentBranch = 'swordsman';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block';
        imageContainer.src = moistSwordImagePath;
        typeText(branchDialogues.swordsman[currentDialogueIndex]);
    });

    document.getElementById('evil-btn').addEventListener('click', () => {
        if (isTyping) return;

        currentBranch = 'evil';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block';
        imageContainer.src = moistSadImagePath;
        typeText(branchDialogues.evil[currentDialogueIndex]);
    });

    // Function to display weapon choice buttons
    function showWeaponChoices() {
        // Hide the next button because we want the player to make a choice
        nextBtn.style.display = 'none';
    
        // Ensure the optionBtns container is visible
        optionBtns.style.display = 'block';
    
        // Clear any previous options if they exist
        optionBtns.innerHTML = '';
    
        // Create two buttons dynamically for the choices
        const staffBtn = document.createElement('button');
        staffBtn.textContent = 'Choose the Staff';
        staffBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
        staffBtn.addEventListener('click', () => {
            // Handle staff choice here
            typeText('You chose the Staff!', () => {
                // Continue the game after the choice
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none'; // Hide options
                nextBtn.style.display = 'block'; // Show next button to continue the game
            });
        });
    
        const wandBtn = document.createElement('button');
        wandBtn.textContent = 'Choose the Wand';
        wandBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
        wandBtn.addEventListener('click', () => {
            // Handle wand choice here
            typeText('You chose the Wand!', () => {
                // Continue the game after the choice
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none'; // Hide options
                nextBtn.style.display = 'block'; // Show next button to continue the game
            });
        });
    
        // Append the buttons to the option buttons container
        optionBtns.appendChild(staffBtn);
        optionBtns.appendChild(wandBtn);
    }
    
    function showSwordsmanWeaponChoices() {
        // Hide the next button because we want the player to make a choice
        nextBtn.style.display = 'none';
    
        // Ensure the optionBtns container is visible
        optionBtns.style.display = 'block';
    
        // Clear any previous options if they exist
        optionBtns.innerHTML = '';
    
        // Create two buttons dynamically for the choices
        const speedWeaponBtn = document.createElement('button');
        speedWeaponBtn.textContent = 'Short Sword';
        speedWeaponBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
        speedWeaponBtn.addEventListener('click', () => {
            // Handle speed weapon choice here
            typeText(' You choose the Short Sword!', () => {
                // Continue the game after the choice
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none'; // Hide options
                nextBtn.style.display = 'block'; // Show next button to continue the game
            });
        });
    
        const damageWeaponBtn = document.createElement('button');
        damageWeaponBtn.textContent = 'Great Sword';
        damageWeaponBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
        damageWeaponBtn.addEventListener('click', () => {
            // Handle damage weapon choice here
            typeText('You chose the Great Sword!', () => {
                // Continue the game after the choice
                currentBranch = null;
                currentDialogueIndex = 0;
                optionBtns.style.display = 'none'; // Hide options
                nextBtn.style.display = 'block'; // Show next button to continue the game
            });
        });
    
        // Append the buttons to the option buttons container
        optionBtns.appendChild(speedWeaponBtn);
        optionBtns.appendChild(damageWeaponBtn);
    }
    // Function to display weapon choice buttons for the Mage class
function showWeaponChoices() {
    // Hide the next button because we want the player to make a choice
    nextBtn.style.display = 'none';

    // Ensure the optionBtns container is visible
    optionBtns.style.display = 'block';

    // Clear any previous options if they exist
    optionBtns.innerHTML = '';

    // Create two buttons dynamically for the choices
    const staffBtn = document.createElement('button');
    staffBtn.textContent = 'Choose the Staff';
    staffBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
    staffBtn.addEventListener('click', () => {
        // Handle staff choice here
        typeText('You chose the Staff!', () => {
            // Continue the game after the choice
            currentBranch = 'mage_staff'; // Set the branch for Mage with Staff
            currentDialogueIndex = 0; // Reset the dialogue index for the next part
            optionBtns.style.display = 'none'; // Hide weapon choice buttons
            nextBtn.style.display = 'block'; // Show next button to continue the story
        });
    });

    const wandBtn = document.createElement('button');
    wandBtn.textContent = 'Choose the Wand';
    wandBtn.classList.add('weapon-choice-btn'); // Optional: Add a class for styling
    wandBtn.addEventListener('click', () => {
        // Handle wand choice here
        typeText('You chose the Wand!', () => {
            // Continue the game after the choice
            currentBranch = 'mage_wand'; // Set the branch for Mage with Wand
            currentDialogueIndex = 0; // Reset the dialogue index for the next part
            optionBtns.style.display = 'none'; // Hide weapon choice buttons
            nextBtn.style.display = 'block'; // Show next button to continue the story
        });
    });

    // Append the buttons to the option buttons container
    optionBtns.appendChild(staffBtn);
    optionBtns.appendChild(wandBtn);
}

// Function to continue the Mage's story after weapon choice (staff or wand)
nextBtn.addEventListener('click', () => {
    if (isTyping) return; // Prevent skipping while typing

    if (currentBranch === 'mage_staff' || currentBranch === 'mage_wand') {
        // Check the current branch for Mage and proceed with more dialogue
        if (currentBranch === 'mage_staff') {
            // Mage with Staff continues
            if (currentDialogueIndex === 0) {
                typeText("You feel the power of the Staff coursing through you!", () => {
                    currentDialogueIndex++;
                    nextBtn.style.display = 'block'; // Allow next to continue
                });
            } else if (currentDialogueIndex === 1) {
                typeText("Your mentor brings you to an academy for magic",() => {
                    currentDialogueIndex++;
                    nextBtn.style.display = 'none'; // Hide next button after the final dialogue
                });
            }
        } else if (currentBranch === 'mage_wand') {
            // Mage with Wand continues
            if (currentDialogueIndex === 0) {
                typeText("The Wand feels light in your hand, a perfect tool for quick magic!", () => {
                    currentDialogueIndex++;
                    nextBtn.style.display = 'block'; // Allow next to continue
                });
            } else if (currentDialogueIndex === 1) {
                typeText("Your mentor brings you to an academy for magic.", () => {
                    currentDialogueIndex++;
                    nextBtn.style.display = 'block'; // Hide next button after the final dialogue
                });
            }else if (currentDialogueIndex === 2) {
                typeText("You begin practicing the art of quick and precise spellcasting.", () => {
                    currentDialogueIndex++;
                    nextBtn.style.display = 'block'; // Hide next button after the final dialogue
                });
            }
        }
    } else {
        // If you're not in a weapon branch (not Mage path yet), go through main dialogues
        currentDialogueIndex++;

        if (currentBranch) {
            // Handle branch dialogues
            if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
                nextBtn.style.display = 'none';
                typeText("You're done", () => {
                    imageContainer.style.display = 'none';
                });
            } else {
                typeText(branchDialogues[currentBranch][currentDialogueIndex]);
            }
        } else {
            // Handle main dialogues
            if (currentDialogueIndex >= dialogues.length) {
                nextBtn.style.display = 'none';
                typeText("Choose your path:", () => {
                    optionBtns.style.display = 'block'; // Show branching options
                    imageContainer.style.display = 'none';
                });
            } else {
                typeText(dialogues[currentDialogueIndex]);
            }
        }
    }
});
    function typeText(texts, callback) {
    isTyping = true;
    dialogueElement.textContent = ''; // Clear current dialogue

    // If texts is a single string, convert it into an array to simplify the logic
    if (typeof texts === 'string') texts = [texts];

    let textIndex = 0;
    let charIndex = 0;

    typingAudio.loop = true;
    typingAudio.play();

    const interval = setInterval(() => {
        if (charIndex < texts[textIndex].length) {
            dialogueElement.textContent += texts[textIndex][charIndex];
            charIndex++;
        } else {
            // Move to next text in the array
            textIndex++;
            charIndex = 0;

            // If there are no more texts, stop the typing effect
            if (textIndex >= texts.length) {
                clearInterval(interval);
                typingAudio.pause();
                typingAudio.currentTime = 0;
                isTyping = false;
                if (callback) callback();
            }
        }
    }, typingSpeed);
}

    // Debugging: Log to ensure the next button is initialized
    console.log("Next button initialized:", nextBtn);
});
