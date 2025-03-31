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

const dialogueElement = document.getElementById('dialogue');
const nextBtn = document.getElementById('next-btn');
const optionBtns = document.getElementById('option-btns'); // Add buttons for branching

nextBtn.addEventListener('click', () => {
    currentDialogueIndex++;

    if (currentBranch) {
        // Handle branch dialogues
        if (currentDialogueIndex >= branchDialogues[currentBranch].length) {
            nextBtn.style.display = 'none';
            dialogueElement.textContent = "The cutscene has ended!";
        } else {
            dialogueElement.textContent = branchDialogues[currentBranch][currentDialogueIndex];
        }
    } else {
        // Handle main dialogues
        if (currentDialogueIndex >= dialogues.length) {
            nextBtn.style.display = 'none';
            dialogueElement.textContent = "Choose your path:";
            optionBtns.style.display = 'block'; // Show branching options
        } else {
            dialogueElement.textContent = dialogues[currentDialogueIndex];
        }
    }
});

// Add event listeners for branching options
document.getElementById('fight-btn').addEventListener('click', () => {
    currentBranch = 'fight';
    currentDialogueIndex = 0;
    optionBtns.style.display = 'none';
    nextBtn.style.display = 'block';
    dialogueElement.textContent = branchDialogues.fight[currentDialogueIndex];
});

document.getElementById('train-btn').addEventListener('click', () => {
    currentBranch = 'train';
    currentDialogueIndex = 0;
    optionBtns.style.display = 'none';
    nextBtn.style.display = 'block';
    dialogueElement.textContent = branchDialogues.train[currentDialogueIndex];
});