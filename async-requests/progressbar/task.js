const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  let previousLoaded = 0;
  request.upload.onprogress = function (event) {
    if (event.loaded > previousLoaded + 100000) {
      console.log(`Отправлено ${event.loaded} из ${event.total}`);
      previousLoaded = event.loaded;
      progress.value = event.loaded / event.total;
    }
  };
  request.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload"
  );
  request.send(formData);
  e.preventDefault();
});
