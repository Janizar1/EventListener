const ele1 = document.querySelectorAll('div');
/*
ele1[0,1,2].addEventListener('click', (e) => {
    console.log('clicked');
});
ele1[1].addEventListener('click', buttonClicker); 
function buttonClicker(e) {
    console.log('again');
}

ele1[1].removeEventListener('click', buttonClicker)
*/
ele1.forEach(el => {
    el.addEventListener('click', buttonClicker);
    el.textContent = 'Clicked : 0';
    el.val = 0;
});

function buttonClicker(e) {
    //console.log(e.target);
    const ele = e.target;
    console.log(ele.val);
    //let val = Number(ele.val);
    ele.val++;
    ele.textContent = `Clicked : ${ele.val}`;
} 
