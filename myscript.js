document.getElementById('redBox').addEventListener('mouseover', Red);

document.getElementById('orangeBox').addEventListener('mouseover', Orange);

document.getElementById('yellowBox').addEventListener('mouseover', Yellow);

document.getElementById('green1Box').addEventListener('mouseover', Green1);

document.getElementById('green2Box').addEventListener('mouseover', Green2);

document.getElementById('tealBox').addEventListener('mouseover', Teal);

document.getElementById('blue1Box').addEventListener('mouseover', Blue1);

document.getElementById('blue2Box').addEventListener('mouseover', Blue2);


function Red() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(255, 83, 83)';
}

function Orange() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(248, 184, 66)';
}

function Yellow() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(255, 255, 124)';
}

function Green1() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(208, 253, 139)';
}

function Green2() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(65, 133, 65)';
}

function Teal() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(0, 175, 175)';
}

function Blue1() {
    document.getElementById('blackBox').style.backgroundColor = 'lightblue';
}

function Blue2() {
    document.getElementById('blackBox').style.backgroundColor = 'rgb(85, 85, 253)';
}