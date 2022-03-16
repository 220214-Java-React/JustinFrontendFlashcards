/* DOM - Document Object Model 
    Document - The web page and all of its elements
    Object Model - an object representation of that document
*/

// TODO: replace me with a call to the backend ??????
const flashcardData = [
  {
    question: "What is CSS?",
    solution: "Cascading Style Sheet",
  },
  {
    question: "What does TS stand for?",
    solution: "TypeScript",
  },
  {
    question: "What is the standard that JS and TS are built off of?",
    solution: "EcmaScript",
  },
  {
    question: "Is JavaScript Interpreted or Compiled?",
    solution: "Interpreted",
  },
  {
    question: "Are you ready to work on projects yet?",
    solution: "YES!!!!",
  },
];

const content = document.getElementById("content");

// when the window is loaded it will call the createFlashcardElements callback function;
window.onload = createFlashcardElements;

function createFlashcardElements() {
  flashcardData.forEach((flashcard) => createFlashcard(flashcard));
}

function createFlashcard(flashcard) {
  // creating the html element and binding as a child to the content

  const flashcardEle = document.createElement("div");
  flashcardEle.setAttribute("class", "flashcard");
  flashcardEle.setAttribute("onclick", "flip(this)");

  const question = document.createElement("p");
  question.textContent = flashcard.question;

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
