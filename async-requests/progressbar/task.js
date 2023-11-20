const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', (e)=> {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    request.addEventListener('readystatechange', ()=>{
        if (request.readyState === 1){
            console.log('установлено соединение с сервером')
            addProgress()
        }
        if (request.readyState === 2){
            console.log('запрос получен')
            addProgress()
        }
        if (request.readyState === 3){
            console.log('обработка запроса')
            addProgress()
        }
        if (request.readyState === 4){
            console.log('запрос завершён')
            addProgress()
        }
    })
    request.send(formData);
    e.preventDefault();
})

function addProgress() {
    const startProgressValue = progress.value;
    const interval = setInterval(()=>{
        if (progress.value - startProgressValue === 0.25 || progress.value === 1){
            clearInterval(interval);
        }
        progress.value = progress.value + 0.05;
    }, 300)
}