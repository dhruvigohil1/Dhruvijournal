// Save Journal Entry
function saveEntry() {
    let date = document.getElementById("entry-date").value;
    let entry = document.getElementById("journal-entry").value;
    if (date && entry) {
        localStorage.setItem("journal-" + date, entry);
        alert("Journal entry saved!");
    }
}

// Load Past Entries
document.addEventListener("DOMContentLoaded", function() {
    let pastEntries = document.getElementById("past-entries");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("journal-")) {
            let entryDate = key.split("journal-")[1];
            let entryText = localStorage.getItem(key);
            let entryDiv = document.createElement("div");
            entryDiv.innerHTML = `<strong>${entryDate}:</strong> ${entryText}`;
            pastEntries.appendChild(entryDiv);
        }
    }
});

// Save Gratitude
function saveGratitude() {
    let entry = document.getElementById("gratitude-entry").value;
    localStorage.setItem("gratitude", entry);
    alert("Gratitude log saved!");
}

// Save Affirmation
function saveAffirmation() {
    let entry = document.getElementById("affirmation-entry").value;
    localStorage.setItem("affirmation", entry);
    alert("Affirmation saved!");
}

// Generate Daily Prompt
function generatePrompt() {
    let prompts = [
        "What is one thing you're proud of today?",
        "Describe a moment that made you smile.",
        "What is something you wish to let go of?",
        "How do you show kindness to yourself?"
    ];
    let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById("daily-prompt").innerText = randomPrompt;
}

// Save Prompt Response
function savePrompt() {
    let entry = document.getElementById("prompt-response").value;
    localStorage.setItem("prompt", entry);
    alert("Prompt response saved!");
}

// Save To-Do Progress
function saveToDo() {
    let tasks = ["study", "exercise", "reading", "skincare"];
    let checkedTasks = tasks.filter(task => document.getElementById(task).checked);
    localStorage.setItem("tasks", JSON.stringify(checkedTasks));
    alert("To-Do saved!");
}
