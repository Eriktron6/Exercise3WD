const backgrounds = [
    'images/TranporterRoom.jpg',
    'images/Holodeck.jpg',
    'images/Bridge.jpg',
    'images/BorgShip.jpg',
    'images/4lights.jpg'
];


let currentBackgroundIndex = 0;

function energize() {
    document.getElementById('soundEffect').play();
    document.querySelector('.transporter').classList.add('active');
    setTimeout(() => {
        document.querySelector('.background').style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
        document.querySelector('.transporter').classList.remove('active');
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }, 1000);
}

document.querySelector('.button button').addEventListener('mouseup', function () {
    document.querySelector('.transporter').classList.remove('active');
});
