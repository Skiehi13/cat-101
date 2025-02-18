document.addEventListener("DOMContentLoaded", function() {
    const quizButton = document.createElement("button");
    quizButton.textContent = "Take the HCM Symptom Quiz";
    quizButton.style.display = "block";
    quizButton.style.margin = "20px auto";
    quizButton.style.padding = "10px 15px";
    quizButton.style.background = "#4CAF50";
    quizButton.style.color = "white";
    quizButton.style.border = "none";
    quizButton.style.cursor = "pointer";
    
    document.querySelector("#cardiovascular").appendChild(quizButton);
    
    quizButton.addEventListener("click", function() {
        let answer = confirm("Does your cat exhibit labored breathing or lethargy?");
        if (answer) {
            alert("You should consult your veterinarian for further evaluation.");
        } else {
            alert("Your cat appears to be in good health, but regular checkups are recommended!");
        }
    });
});