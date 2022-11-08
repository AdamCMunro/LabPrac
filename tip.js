document.getElementById('5p').addEventListener('click', FivePercent);
document.getElementById('10p').addEventListener('click', TenPercent);
document.getElementById('25p').addEventListener('click', TwentyFivePercent);
document.getElementById('Big').addEventListener('click', Big);

var defaultTip = document.getElementById('output');

function FivePercent () {
    let billValue = document.getElementById('bill').value;
    var totalTip = billValue * 0.05;
    defaultTip.innerHTML = "£" + totalTip;
    
}

function TenPercent () {
    let billValue = document.getElementById('bill').value;
    var totalTip = billValue * 0.1;
    defaultTip.innerHTML = "£" + totalTip;
}

function TwentyFivePercent () {
    let billValue = document.getElementById('bill').value;
    var totalTip = billValue * 0.25;
    defaultTip.innerHTML = "£" + totalTip;
}

function Big () {
    let billValue = document.getElementById('bill').value;
if ((billValue * 0.25) > (2 + billValue * 0.1)) {
    var totalTip = billValue * 0.25;
    defaultTip.innerHTML = "£" + totalTip;
}
else {
    let totalTip = 2 + billValue * 0.1;
    defaultTip.innerHTML = "£" + totalTip;
}
}


