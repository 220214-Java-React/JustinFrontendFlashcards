const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/flashcards`;

async function submitFlashcard() {
  const title = document.getElementById("title").value;
  const solution = document.getElementById("solution").value;
  const topic = document.getElementById("topic").value;

  const flashcard = {
    title: title,
    solution: solution,
    topic: topic,
    userId: 1,
  };

  const flashcardJSON = JSON.stringify(flashcard);

  // take this information and POST it to our api at

  const response = await fetch(RESOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: flashcardJSON,
  });

  if (response.status == 200) {
    // success, so we can give them an appropriate response
  } else {
    // something went wrong
  }
}
