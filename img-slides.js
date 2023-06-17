const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const changeimg = () => {
   change[event.target.id]();
}

const change = {
    'img1': () => img.src = './img/protetor-solar.jpeg',
    'img2': () => img.src = './img/protetor-solar-1.png',
    'img3': () => img.src = '/img/flor.png'
}


buttons.addEventListener('click', changeimg)


