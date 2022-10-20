const musiciansContainer = document.getElementById('musician');
const data = [
  {
    id: 1,
    pic: './images/kilnam.png',
    altText: 'featured musician image',
    nameOfmusician: 'Lili Tilahun',
    designation: ' musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!',
  },
  {
    id: 2,
    pic: './images/yochai.png',
    altText: 'featured musician image',
    nameOfmusician: 'Dawit Dave',
    designation: 'musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!',
  },
  {
    id: 3,
    pic: './images/sohyeong.png',
    altText: 'featured musician image',
    nameOfmusician: 'Azeb Hailu',
    designation: 'musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!',
  },
  {
    id: 4,
    pic: './images/julia.png',
    altText: 'featured musician image',
    nameOfmusician: 'Fenan Befakdu',
    designation: 'musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!',
  },
  {
    id: 5,
    pic: './images/lila.png',
    altText: 'featured musician image',
    nameOfmusician: 'Dagim Tilahun',
    designation: 'musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!',
  },
  {
    id: 6,
    pic: './images/reagan.png',
    altText: 'featured musician image',
    nameOfmusician: 'Tekest Getnet',
    designation: 'musiciane for 20 years',
    history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!musi',
  },
];

const musicianContainer = document.createElement('section');
musicianContainer.setAttribute('class', 'musician-speakers');
musicianContainer.setAttribute('id', 'musician');

data.forEach((musicianPara) => {
  const musicianSection = document.createElement('div');
  musicianSection.setAttribute('class', 'musician-section');
  musicianSection.setAttribute('id', 'each-musician');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'musician-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'musician-image');
  image.setAttribute('src', musicianPara.pic);
  image.setAttribute('alt', musicianPara.altText);

  imageSection.appendChild(image);
  musicianSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'musician-details');
  contentSection.setAttribute('id', 'about-musician');

  const musicianName = document.createElement('h2');
  musicianName.setAttribute('class', 'musician-name');
  musicianName.textContent = musicianPara.nameOfmusician;
  contentSection.appendChild(musicianName);

  const musicianDesignation = document.createElement('p');
  musicianDesignation.setAttribute('class', 'musician-designation');
  musicianDesignation.textContent = musicianPara.designation;
  contentSection.appendChild(musicianDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const musicianHistory = document.createElement('p');
  musicianHistory.setAttribute('class', 'musician-history');
  musicianHistory.textContent = musicianPara.history;
  contentSection.appendChild(musicianHistory);

  musicianSection.appendChild(contentSection);
  musicianContainer.appendChild(musicianSection);
});

const loadmusicians = () => musiciansContainer.appendChild(musicianContainer);

window.onload(loadmusicians());
