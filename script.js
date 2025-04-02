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
            "You chose to fight!",
            "You encounter your first enemy.",
            "Prepare for battle!"
        ],
        swordsman: [
            "You chose to train!",
            "You start lifting weights.",
            "Your strength increases!"
        ],
        evil: [
            "Go away old dude!",
            "He gets sad and runs away crying.",
            "You continue your training."
        ],
    };

    let currentDialogueIndex = 0;
    let currentBranch = null;
    let isTyping = false; // Track if typing is in progress
    const typingSpeed = 50; // Speed of typing in milliseconds
    const typingAudio = new Audio('/assets/sounds/talking-three.mp3'); // Path to typing sound effect

    const dialogueElement = document.getElementById('dialogue');
    const nextBtn = document.getElementById('next-btn');
    const optionBtns = document.getElementById('option-btns');
    const imageContainer = document.getElementById('image-container'); // Reference to the image container

    const moistImagePath = '/assets/images/moist.png'; // Path to the moist image
    const defaultImagePath = '/assets/images/default.png'; // Path to the default image
    const moistMageImagePath = '/assets/char/moistWizard.png';
    const moistSwordImagePath = '/assets/char/moistSwords.png';
    const moistSadImagePath = '/assets/char/moistSad.png';

    // Add hover functionality to show moist.png
    document.getElementById('mage-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistMageImagePath;
    });
    document.getElementById('mage-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistMageImagePath;
    });

    document.getElementById('swordsman-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistSwordImagePath;
    });
    document.getElementById('swordsman-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistSwordImagePath;
    });

    document.getElementById('evil-btn').addEventListener('mouseover', () => {
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistSadImagePath;
    });
    document.getElementById('evil-btn').addEventListener('mouseout', () => {
        imageContainer.src = moistSadImagePath;
    });

    // Add hover functionality for the dialogue text box
    dialogueElement.addEventListener('mouseover', () => {
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistImagePath; // Show the default moist image
    });
    dialogueElement.addEventListener('mouseout', () => {
        imageContainer.style.display = 'none'; // Hide the image container when not hovering
    });

    // Function to type out text
    function typeText(text, callback) {
        isTyping = true;
        dialogueElement.textContent = '';
        let charIndex = 0;

        typingAudio.loop = true; // Ensure the typing sound loops
        typingAudio.play();

        const interval = setInterval(() => {
            if (charIndex < text.length) {
                dialogueElement.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(interval);
                typingAudio.pause(); // Stop the typing sound
                typingAudio.currentTime = 0; // Reset the audio
                isTyping = false;
                if (callback) callback();
            }
        }, typingSpeed);

        // Ensure the typing sound restarts if it ends while typing is still in progress
        typingAudio.addEventListener('timeupdate', () => {
            if (isTyping && typingAudio.currentTime >= typingAudio.duration - 0.1) {
                typingAudio.currentTime = 0;
                typingAudio.play();
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        if (isTyping) return; // Prevent skipping while typing

        currentDialogueIndex++;

        if (currentBranch) {
            // Handle branch dialogues
            if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
                nextBtn.style.display = 'none';
                typeText("The cutscene has ended!", () => {
                    imageContainer.style.display = 'none'; // Hide image container after branch ends
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
                    imageContainer.style.display = 'none'; // Ensure image is hidden before branching
                });
            } else {
                typeText(dialogues[currentDialogueIndex]);
            }
        }
    });

    // Add event listeners for branching options
    document.getElementById('mage-btn').addEventListener('click', () => {
        if (isTyping) return; // Prevent interaction while typing

        currentBranch = 'mage';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistImagePath; // Persist moist.png
        typeText(branchDialogues.mage[currentDialogueIndex]);
    });

    document.getElementById('swordsman-btn').addEventListener('click', () => {
        if (isTyping) return; // Prevent interaction while typing

        currentBranch = 'swordsman';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistImagePath; // Persist moist.png
        typeText(branchDialogues.swordsman[currentDialogueIndex]);
    });

    document.getElementById('evil-btn').addEventListener('click', () => {
        if (isTyping) return; // Prevent interaction while typing

        currentBranch = 'evil';
        currentDialogueIndex = 0;
        optionBtns.style.display = 'none';
        nextBtn.style.display = 'block';
        imageContainer.style.display = 'block'; // Ensure the image container is visible
        imageContainer.src = moistImagePath; // Persist moist.png
        typeText(branchDialogues.evil[currentDialogueIndex]);
    });

    // Debugging: Log to ensure the next button is initialized
    console.log("Next button initialized:", nextBtn);
});