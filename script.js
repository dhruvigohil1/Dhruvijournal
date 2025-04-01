// Function to save journal entries
function saveJournal() {
    let date = document.getElementById("entry-date").value;
    let entry = document.getElementById("journal-entry").value;

    if (date && entry) {
        localStorage.setItem(`journal_${date}`, entry);
        document.getElementById("saved-message").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("saved-message").classList.add("hidden");
        }, 2000);
    } else {
        alert("Please select a date and write an entry.");
    }
}

// Function to retrieve a saved journal entry
function retrieveJournal() {
    let date = document.getElementById("entry-date").value;
    let savedEntry = localStorage.getItem(`journal_${date}`);

    if (savedEntry) {
        document.getElementById("journal-entry").value = savedEntry;
    } else {
        alert("No entry found for this date.");
        document.getElementById("journal-entry").value = "";
    }
}

// Function to retrieve a random journal prompt
function getPrompt() {
    let prompts = [
        "What made you smile today?",
        "Describe a moment when you felt truly at peace.",
        "What challenges did you overcome today?",
        "Write about someone who inspires you.",
        "What is one thing you learned about yourself today?"
    ];

    let randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById("prompt-display").innerText = prompts[randomIndex];
}

// Function to save gratitude entries
function saveGratitude() {
    let gratitude = document.getElementById("gratitude-entry").value;
    if (gratitude) {
        localStorage.setItem("gratitude", gratitude);
        alert("Gratitude saved!");
    } else {
        alert("Write something to save.");
    }
}

// Function to save affirmations
function saveAffirmation() {
    let affirmation = document.getElementById("affirmation-entry").value;
    if (affirmation) {
        localStorage.setItem("affirmation", affirmation);
        alert("Affirmation saved!");
    } else {
        alert("Write an affirmation to save.");
    }
}
