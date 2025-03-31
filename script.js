const dialogues = [
    "Rich dude ded",
    "I need money",
    "I am dedicated to fight my way to the money",
    "I am to weak and must train first",
    "I will train every day"
];

let currentDialogueIndex = 0;

const dialogueElement = document.getElementById('dialogue');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    currentDialogueIndex++;

    // If we've reached the end, hide the button and end the cutscene
    if (currentDialogueIndex >= dialogues.length) {
        nextBtn.style.display = 'none';
        dialogueElement.textContent = "The cutscene has ended!";
    } else {
        dialogueElement.textContent = dialogues[currentDialogueIndex];
    }
});