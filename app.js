import data from './data.js';

const slideMenu = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-list');
  const seeProject = document.querySelectorAll('.button');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  [...seeProject].forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const myData = data.find((elem) => elem.id === e.currentTarget.dataset.btnId);
      const {
        url, tittle, technologi1, technologi2, technologi3, text,
      } = myData;

      const section = document.createElement('section');
      section.className = 'modal';
      section.innerHTML = `
      <div class="card-modal">
      <div class="close-modal">
        <img src="./images/close-butt.svg"  id="close-modal" alt="close button">
      </div>
        <img src="${url}" class="popup-img">
          <div class="modal-body">
          <div class= "flex-start">
            <div class= "desktop-header">
              <div class="desktop-h2">
                <h2 class="modal-header">${tittle}</h2>
              </div
              <div class="desktop-btn">
                <button class="button-modal-desktop" type="button">
                  <a href="https://github.com/kakarrot92" target="_blank">See Live <img src="images/live-icon.svg" alt="live-icon for my project"></a>
                 </button>
                <button class="button-modal-desktop" type="button">
                  <a href="https://github.com/kakarrot92" target="_blank">See Live <img src="images/Vector.png" alt="live-icon for my github"></a>
                </button>
              </div>
            </div>
            <div class="technologys">
              <ul>
                <li>${technologi1}</li>
                <li>${technologi2}</li>
                <li>${technologi3}</li>
              </ul>
              <p class="modal-text">${text}</p>
            </div>
              <div class="modal-btn">
                <button class="button-modal" type="button">
                    <a href="https://github.com/kakarrot92" target="_blank">See Live <img src="images/live-icon.svg" alt="live-icon for my project"></a>
                </button>
                <button class="button-modal" type="button">
                  <a href="https://github.com/kakarrot92" target="_blank">See Live <img src="images/Vector.png" alt="live-icon for my github"></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      document.querySelector('main').style.filter = 'blur(5px)';
      document.querySelector('body').insertAdjacentElement('beforeend', section);
      // put your function for close button below
      section.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('main').style.filter = 'blur(0)';
        document.querySelector('.modal').remove();
      });
    });
  });

  navLinks.addEventListener('click', (event) => {
    if (navLinks.classList.contains('nav-active')) {
      if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
        navLinks.classList.remove('nav-active');
      }
    }
  });
};
slideMenu();
