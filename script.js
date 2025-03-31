const dialogues = [
    "Rich dude ded",
    "I need money",
    "I am dedicated to fight my way to the money",
    "I am too weak and must train first",
    "I will train every day"
];

const branchDialogues = {
    fight: [
        "You chose to fight!",
        "You encounter your first enemy.",
        "Prepare for battle!"
    ],
    train: [
        "You chose to train!",
        "You start lifting weights.",
        "Your strength increases!"
    ]
};

let currentDialogueIndex = 0;
let currentBranch = null;
let isTyping = false; // Track if typing is in progress
const typingSpeed = 50; // Speed of typing in milliseconds
const typingAudio = new Audio('typing-sound.mp3'); // Path to typing sound effect

const dialogueElement = document.getElementById('dialogue');
const nextBtn = document.getElementById('next-btn');
const optionBtns = document.getElementById('option-btns');

// Function to type out text
function typeText(text, callback) {
    isTyping = true;
    dialogueElement.textContent = '';
    let charIndex = 0;

    typingAudio.loop = true; // Loop the typing sound
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
}

nextBtn.addEventListener('click', () => {
    if (isTyping) return; // Prevent skipping while typing

    currentDialogueIndex++;

    if (currentBranch) {
        // Handle branch dialogues
        if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
            nextBtn.style.display = 'none';
            typeText("The cutscene has ended!");
        } else {
            typeText(branchDialogues[currentBranch][currentDialogueIndex]);
        }
    } else {
        // Handle main dialogues
        if (currentDialogueIndex >= dialogues.length) {
            nextBtn.style.display = 'none';
            typeText("Choose your path:", () => {
                optionBtns.style.display = 'block'; // Show branching options
            });
        } else {
            typeText(dialogues[currentDialogueIndex]);
        }
    }
});

// Add event listeners for branching options
document.getElementById('fight-btn').addEventListener('click', () => {
    if (isTyping) return; // Prevent interaction while typing

    currentBranch = 'fight';
    currentDialogueIndex = 0;
    optionBtns.style.display = 'none';
    nextBtn.style.display = 'block';
    typeText(branchDialogues.fight[currentDialogueIndex]);
});

document.getElementById('train-btn').addEventListener('click', () => {
    if (isTyping) return; // Prevent interaction while typing

    currentBranch = 'train';
    currentDialogueIndex = 0;
    optionBtns.style.display = 'none';
    nextBtn.style.display = 'block';
    typeText(branchDialogues.train[currentDialogueIndex]);
});