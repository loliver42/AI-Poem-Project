function generatePoem(event) {
  event.preventDefault();
  let userInstructions = document.querySelector("#instructions");
  let apiKey = "ffa4fe680act3be1832a3445o0790076";
  let context =
    "You are a romantic poem expert and love to write short poems. Generate a short poem in basic HTML. Make sure to use user instructions.";
  let prompt = `User instructions: Generate a french poem about ${userInstructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a french poem about ${userInstructions.value}`;

  axios.get(apiUrl).then(displayPoem);
}
function displayPoem(responce) {
  new Typewriter("#poem", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

let peomFormElement = document.querySelector("#generator-form");
peomFormElement.addEventListener("submit", generatePoem);
