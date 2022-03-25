/* DOM - Document Object Model 
    Document - The web page and all of its elements
    Object Model - an object representation of that document
*/

const BASE_API_URL = "http://localhost:8080/api";

function getFlashcards() {
  fetch(`${BASE_API_URL}/flashcards`)
    .then((response) => response.json())
    .then((data) => createFlashcardElements(data));
}

const content = document.getElementById("content");

// when the window is loaded it will call the createFlashcardElements callback function;
window.onload = getFlashcards;

function createFlashcardElements(flashcardData) {
  console.log(flashcardData);

  flashcardData.forEach((flashcard) => createFlashcard(flashcard));
}

function createFlashcard(flashcard) {
  // creating the html element and binding as a child to the content

  const flashcardEle = document.createElement("div");
  flashcardEle.setAttribute("class", "flashcard");
  flashcardEle.setAttribute("onclick", "flip(this)");

  const question = document.createElement("p");
  question.textContent = flashcard.title;

  const solution = document.createElement("p");
  solution.textContent = flashcard.solution;
  solution.setAttribute("hidden", "true");

  // now that the elements are created, what do we need to do?
  content.appendChild(flashcardEle);
  flashcardEle.appendChild(question);
  flashcardEle.appendChild(solution);
}

function flip(element) {
  const question = element.children[0];
  const solution = element.children[1];

  if (isHidden(question)) {
    // question is hidden
    solution.setAttribute("hidden", "true");
    question.removeAttribute("hidden");
  } else {
    question.setAttribute("hidden", "true");
    solution.removeAttribute("hidden");
  }

  function isHidden(element) {
    return element.hasAttribute("hidden");
  }
}


