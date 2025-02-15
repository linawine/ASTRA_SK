document.addEventListener('DOMContentLoaded', () => {
    const sections = ['commerce', 'work', 'realized'];
  
    sections.forEach(section => {
      const newsGrid = document.querySelector(`.${section}`);
      if (!newsGrid) {
        console.error(`Раздел .${section} не найден!`);
        return;
      }
  
      const hiddenCards = Array.from(newsGrid.querySelectorAll('.place-card.visually-hidden'));
      let cardsToShow = 12;
  
      const showMoreButton = document.querySelector(`.show-more-button[data-section="${section}"]`);
      if (!showMoreButton) {
        console.error(`Кнопка 'Показать еще' для раздела .${section} не найдена!`);
        return;
      }
  
      showMoreButton.addEventListener('click', () => {
        const nextCards = hiddenCards.splice(0, cardsToShow);
        nextCards.forEach(card => card.classList.remove('visually-hidden'));
  
        if (hiddenCards.length === 0) {
          showMoreButton.style.display = 'none';
        }
      });
    });
  });