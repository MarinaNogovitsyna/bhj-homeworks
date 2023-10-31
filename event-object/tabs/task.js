const tabArr = Array.from(document.querySelectorAll(".tab"));
const contentArr = Array.from(document.querySelectorAll(".tab__content"));
console.log(tabArr)

for (let i = 0; i < tabArr.length; i++){
    tabArr[i].addEventListener('click', () => {
        tabArr[i].classList.add('tab_active')
        contentArr[i].classList.add('tab__content_active')
        for(let j = 0; j < tabArr.length; j++) {
            if (j !== i) {
                tabArr[j].classList.remove('tab_active')
                contentArr[j].classList.remove('tab__content_active')
            }
        }
    })
}





