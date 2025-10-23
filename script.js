let index = 0;

const images = document.querySelectorAll('.block-image img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.Anterior');
const next = document.querySelector('.Siguiente');


images.forEach(img => {
  // Modal click
  img.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = img.src;
  caption.textContent = img.alt || '';
  
  if(img.closest('.westshop')) {
    modal.classList.add('westshop-modal');
  } else {
    modal.classList.remove('westshop-modal');
  }
});

  // 3D efecto al mover mouse
  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 30;
    const rotateY = ((x - centerX) / centerX) * 50;

    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    img.style.boxShadow = 'none';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

showSlide(index);