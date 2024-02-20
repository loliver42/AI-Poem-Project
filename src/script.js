function generatePoem(event) {
  event.preventDefault();
  alert("Generating Poem");

  new Typewriter("#poem", {
    strings: "Quand vous serez bien vieille, au soir, à la chandelle",
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

let peomFormElement = document.querySelector("#generator-form");
peomFormElement.addEventListener("submit", generatePoem);
