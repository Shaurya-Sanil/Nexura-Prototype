const words = ["collaborations", "content", "awareness", "trust", "traffic", "sales", "community"];
let index = 0;

function changeWord() {
    const wordElement = document.querySelector(".changing-word");
    wordElement.textContent = words[index];
    index = (index + 1) % words.length;
}

// Change word every 2 seconds
setInterval(changeWord, 2000);
