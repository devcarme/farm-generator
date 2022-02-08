let src;
let img = document.getElementById('imgDog');
let dogName = document.getElementById('dogName');
let clock;

function newDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((data) => {
      img.src = data.message
      dogName.innerHTML = translateDogNameInFrench(data.message.split('/')[4]);
    })
    .catch(error => console.log(error));
}

function onClickDog() {
  if (clock) {
    img.style.transform = 'rotateY(360deg)';
    img.style.transform = 'rotateX(360deg)';
    img.style.transform = 'rotateZ(360deg)';
    img.style.transform = 'rotate3D(1, 1, 1, 360deg)';
    img.style.matrix3d = 'matrix3d(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)';
    img.style.perspective = '1000px';

    clock = 0;
  } else {
    img.style.transform = 'rotateY(0deg)';
    img.style.transform = 'rotateX(0deg)';
    img.style.transform = 'rotateZ(0deg)';
    clock = 1;
  }
  newDog();
}

function translateDogNameInFrench(dogName) {
  let dogNameInFrench = '';
  switch (dogName) {
    case 'african':
      dogNameInFrench = 'africain';
      break;
    case 'airedale':
      dogNameInFrench = 'airedale';
      break;
    case 'akita':
      dogNameInFrench = 'akita';
      break;
    case 'appenzeller':
      dogNameInFrench = 'appenzeller';
      break;
    case 'basenji':
      dogNameInFrench = 'basenji';
      break;
    case 'beagle':
      dogNameInFrench = 'beagle';
      break;
    case 'bluetick':
      dogNameInFrench = 'bluetick';
      break;
    case 'borzoi':
      dogNameInFrench = 'borzoi';
      break;
    case 'bouvier':
      dogNameInFrench = 'bouvier';
      break;
    case 'boxer':
      dogNameInFrench = 'boxer';
      break;
    case 'brabancon':
      dogNameInFrench = 'brabancon';
      break;
    case 'briard':
      dogNameInFrench = 'briard';
      break;
    case 'bulldog':
      dogNameInFrench = 'bulldog';
      break;
    case 'bullterrier':
      dogNameInFrench = 'bullterrier';
      break;
    case 'cairn':
      dogNameInFrench = 'cairn';
      break;
    case 'cattledog':
      dogNameInFrench = 'cattledog';
      break;
    case 'chihuahua':
      dogNameInFrench = 'chihuahua';
      break;
    case 'chow':
      dogNameInFrench = 'chow';
      break;
    case 'clumber':
      dogNameInFrench = 'clumber';
      break;
    default:
      dogNameInFrench = dogName;
     break
  }
      if(dogNameInFrench === 'undefined') {
        dogNameInFrench = 'chien';
      }
      return dogNameInFrench;
}

var audio = document.getElementById("dogSound");
audio.volume = 0.05;
newDog()
