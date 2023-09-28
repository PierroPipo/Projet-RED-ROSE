document.addEventListener("DOMContentLoaded", function () {
    // Apparition du contenu après 1 seconde
    setTimeout(function () {
        var content = document.querySelector(".content");
        if (content) {
            content.classList.add("appear");
        } else {
            console.error("L'élément .content n'a pas été trouvé.");
        }
    }, 1000);

    // Redirection vers une autre page après 2 secondes (uniquement pour la première page)
    if (window.location.href.includes("index.html")) {
        setTimeout(function () {
            window.location.href = "garden.html";
        }, 5000);
    }
});

// Changement du texte toutes les 4 secondes (uniquement pour la deuxième page)
if (window.location.href.includes("garden.html")) {
    const messages = ["Si tu as besoin d'aide surtout n'hésite pas :)", "Je peux te voir.", "Je peux t'entendre.","Je sais tout de toi."];
    let currentMessageIndex = 0;

    function changeMessage() {
        const changingText = document.getElementById("changingText");
        if (changingText) {
            changingText.textContent = messages[currentMessageIndex];
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        } else {
            console.error("L'élément #changingText n'a pas été trouvé.");
        }
    }

    setInterval(changeMessage, 4000);
}
