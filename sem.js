function semafor() {
    var boje = document.getElementsByClassName('boje');
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';

    function changeToYellow() {
        boje[1].style.background = 'yellow';
    }

    function changeToGreen() {
        boje[0].style.background = 'gray';
        boje[1].style.background = 'gray';
        boje[2].style.background = 'green';
    }

    function changeToYellow1() {
        boje[1].style.background = 'yellow';
        boje[0].style.background = 'gray';
        boje[2].style.background = 'gray';
    }

    function changeToRed() {
        boje[0].style.background = 'red';
        boje[1].style.background = 'gray';
        boje[2].style.background = 'gray';

    }

    var x = setTimeout(changeToYellow, 3000);
    var y = setTimeout(changeToGreen, 5000);
    var z = setTimeout(changeToYellow1, 10000);
    var q = setTimeout(changeToRed, 13000);
    var start = setInterval(semafor, 16000);

}
semafor()

function text() {
    document.getElementByClassName('text');
}