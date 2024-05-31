import farmSource from '../../data/farm-source';
import { createVegetableItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <div class="section">
          <h2 class="vegetable-list-title">Semua Produk</h2>
          <div class="scroll-wrapper">
            <button class="scroll-left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="vegetable-list" id="vegetable-list-1">
              <!-- vegetable items will be inserted here -->
            </div>
            <button class="scroll-right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="section">
          <h2 class="vegetable-list-title">Buah</h2>
          <div class="scroll-wrapper">
            <button class="scroll-left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="vegetable-list" id="vegetable-list-2">
              <!-- vegetable items will be inserted here -->
            </div>
            <button class="scroll-right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="section">
          <h2 class="vegetable-list-title">Sayur</h2>
          <div class="scroll-wrapper">
            <button class="scroll-left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="vegetable-list" id="vegetable-list-3">
              <!-- vegetable items will be inserted here -->
            </div>
            <button class="scroll-right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="section">
          <h2 class="vegetable-list-title">Bumbu</h2>
          <div class="scroll-wrapper">
            <button class="scroll-left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="vegetable-list" id="vegetable-list-4">
              <!-- vegetable items will be inserted here -->
            </div>
            <button class="scroll-right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const vegetableListElement = section.querySelector('.vegetable-list');
      farmSource.forEach((vegetable) => {
        vegetableListElement.innerHTML
          += createVegetableItemTemplate(vegetable);
      });
    });

    function handleScroll(scrollButton, vegatableList) {
      const itemWidth = 320;

      scrollButton.addEventListener('click', () => {
        const scrollAmount = scrollButton.classList.contains('scroll-left')
          ? -itemWidth
          : itemWidth;
        vegatableList.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      });
    }

    sections.forEach((section) => {
      const scrollLeftButton = section.querySelector('.scroll-left');
      const scrollRightButton = section.querySelector('.scroll-right');
      const vegatableList = section.querySelector('.vegetable-list');
      handleScroll(scrollLeftButton, vegatableList);
      handleScroll(scrollRightButton, vegatableList);
    });
  },
};

export default Home;
