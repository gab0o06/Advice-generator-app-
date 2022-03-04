const title = document.getElementById("title");
const advice = document.getElementById("text");
const changeadvice = document.getElementById("change");

const rq = async () => {
  let response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
  if (!response.ok) return console.error("Ha ocurrido un Error");
  let data = await response.json();
  title.textContent = `ADVICE #${data.slip.id}`;
  advice.textContent = `"${data.slip.advice}"`;
};

rq()

changeadvice.addEventListener("click", () => {
    rq()
})