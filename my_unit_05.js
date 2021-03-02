document.querySelector('.b-1').onclick = () => {
    let t = '';
    for (let i = 1; i <= 50; i++) {
        t += i + ' ';
    }
    document.querySelector('.out-1').innerHTML = t;
}

document.querySelector('.b-2').onclick = () => {
    let t = '';
    for (let i = 2; i <= 122; i = i + 2) {
        t += i + ' ';
    }
    document.querySelector('.out-2').innerHTML = t;
}

document.querySelector('.b-3').onclick = () => {
    let t = '';
    for (let i = 25; i >= 7; i--) {
        t += i + ' ';
    }
    document.querySelector('.out-3').innerHTML = t;
}

document.querySelector('.b-4').onclick = () => {
    let t = '';
    for (let i = 77; i >= 35; i = i - 3) {
        t += i + '_';
    }
    document.querySelector('.out-4').innerHTML = t;
}

document.querySelector('.b-5').onclick = () => {
    let t = '';
    for (let i = 1; i <= 17; i++) {
        if (i % 2 != 0) {
            t += i + '_*';
        } else {
            t += i + '_**';
        }
    }
    document.querySelector('.out-5').innerHTML = t;
}

document.querySelector('.b-6').onclick = () => {

    let t = +document.querySelector('.i-6').value;
    let tt = '';
    for (let i = 1; i <= t; i++) {
        tt += '<div>******</div>';
    }
    document.querySelector('.out-6').innerHTML = tt;
}

document.querySelector('.b-7').onclick = () => {
    let t = +document.querySelector('.i-7').value;
    let t1 = '';
    for (let i = t; i >= 0; i--) {
        document.querySelector('.out-7').innerHTML += t1 + ' ' + i;
    }
}

document.querySelector('.b-8').onclick = () => {
    let t81 = +document.querySelector('.i-81').value;
    let t82 = +document.querySelector('.i-82').value;
    let t = '';
    for (let i = t81; i <= t82; i++) {
        document.querySelector('.out-8').innerHTML += t + ' ' + i;
    }
}

document.querySelector('.b-9').onclick = () => {
    let t1 = +document.querySelector('.i-91').value;
    let t2 = +document.querySelector('.i-92').value;
    let t = '';
    if (t1 < t2) {
        for (let i = t1; i <= t2; i++) {
            document.querySelector('.out-9').innerHTML += t + ' ' + i;
        }
    } else {
        for (let i = t2; i <= t1; i++) {
            document.querySelector('.out-9').innerHTML += t + ' ' + i;
        }
    }
}

document.querySelector('.b-10').onclick = () => {
    let t1 = '';
    for (let i = 1950; i <= 2000; i = i + 2) {
        t1 += i + ' ';
    }
    document.querySelector('.out-10').innerHTML = t1;
}

document.querySelector('.b-11').onclick = () => {
    let div11 = document.querySelectorAll('.div-11');
    let t = '';
    for (let i = 0; i < div11.length; i++) {
        t += div11[i].innerHTML + ' ';
    }
    document.querySelector('.out-11').innerHTML = t;
}

document.querySelector('.b-12').onclick = () => {
    let div = document.querySelectorAll('.div-12');
    let t = '';
    for (let i = 0; i < div.length; i++) {
        t += div[i].style.background = 'orange';
    }
}

document.querySelector('.b-13').onclick = () => {
    let elem = document.querySelectorAll('.i-13');
    for (let i = 0; i < elem.length; i++) {
        elem[i].value = i + 1;
    }
}

document.querySelector('.b-14').onclick = () => {
    let elem = document.querySelectorAll('.i-14');
    let t = '';
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].checked) {
            t = elem[i].value;
        }
    }
    document.querySelector('.out-14').innerHTML = t;
}

document.querySelector('.b-15').onclick = () => {
    let t = '';
    for (let i = 10; i >= 0; i--) {
        t += i + ' ' + (10 - i) + ' ';
    }
    document.querySelector('.out-15').innerHTML = t;
}


