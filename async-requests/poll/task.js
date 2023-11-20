const question = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

let response = fetch("https://students.netoservices.ru/nestjs-backend/poll")
  .then((response) => response.json())
  .then((result) => addPoll(result));

function addPoll(result) {
  question.textContent = result.data.title;
  const answersFromFetch = result.data.answers;
  for (let i = 0; i < answersFromFetch.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add("poll__answer");
    btn.textContent = answersFromFetch[i];
    btn.onclick = () => getStatistik(result.id, i);

    answers.insertAdjacentElement("afterbegin", btn);
  }
}

function getStatistik(id, index) {
  alert("Спасибо, ваш голос засчитан!");
  let statistik = fetch(
    `https://students.netoservices.ru/nestjs-backend/poll?vote=${id}&answer=${index}`,
    {
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded",
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result));
}
