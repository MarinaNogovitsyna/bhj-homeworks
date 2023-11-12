const element = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');


for (let el of element){
    el.addEventListener('click', (event)=>{
        event.preventDefault();
        tooltip.textContent = el.title;
        tooltip.classList.add('tooltip_active');
        el.insertAdjacentElement('afterend', tooltip);
        for (let tool of tooltip){
            if (tooltip.textContent !== el.title){
                tooltip.classList.remove('tooltip_active');
            }
        }
    })
}