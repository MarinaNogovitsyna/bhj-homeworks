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
    `https://students.netoservices.ru/nestjs-backend/poll`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `vote=${id}&answer=${index}`,
    }
  )
    .then((response) => response.json())
    .then((result) => addStatistik(result));
}

function addStatistik(data){
    answers.innerHTML = '';
    for (let i = 0; i < data.stat.length; i++){
        let stat = document.createElement('div');
        stat.innerHTML = `${data.stat[i].answer}: <b>${data.stat[i].votes}%</b>`;
        answers.insertAdjacentElement('afterbegin', stat)
    }
}