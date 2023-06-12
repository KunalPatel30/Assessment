const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const imgContainer = document.querySelector('.img-container');
const dynmicimage = {
  src:["imgs/img-0.jpg","imgs/img-1.jpg","imgs/img-2.jpg","imgs/img-3.jpg","imgs/img-4.jpg","imgs/img-5.jpg","imgs/img-6.jpg"]
}
const slides = document.querySelector('.img-grid')


dynmicimage.src.map(src=>{

  let imgTag = document.createElement("img");
  imgTag.src = src;
  slides.appendChild(imgTag)
})

const imgs = document.querySelectorAll('.img-grid img'); 
console.log(imgs)

// const images = ['img-0', 'img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6'];
let counter = 0;

const blurImages = () => { 
  imgs.forEach(img=> img.style.opacity = '0.3')
}

const moveLeft = () => { 
  counter--; 
  blurImages();
  if (counter < 0) { 
    counter = imgs.length - 1
  }
  // imgContainer.style.backgroundImage = `url(./imgs/${images[counter]}.jpg)`;
  imgContainer.style.backgroundImage = `url(${imgs[counter].src})`;

  imgs[counter].style.opacity = '1';
}

const moveRight = () => { 
  counter++; 
   blurImages();
  if (counter >= imgs.length) { 
    counter = 0;
  }
    // imgContainer.style.backgroundImage = `url(./imgs/${images[counter]}.jpg)`;
    imgContainer.style.backgroundImage = `url(${imgs[counter].src})`;
		imgs[counter].style.opacity = "1";
}

leftBtn.addEventListener('click', moveLeft)
rightBtn.addEventListener('click', moveRight)

imgs.forEach((img, index) => { 
  img.addEventListener('click', (e) => { 
    console.log(img.src)
    imgContainer.style.backgroundImage = `url(${img.src})`
    blurImages();
    img.style.opacity = '1';
    counter = index;
  })
})

