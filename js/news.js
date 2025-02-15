document.addEventListener('DOMContentLoaded', () => {
const newsGrid = document.querySelector('.news__inner');
const hiddenCards = Array.from(newsGrid.querySelectorAll('.news-card.visually-hidden'));

let cardsToShow = 12;

const showMoreButton = document.querySelector('.show-more-button');
       if (showMoreButton) { 
           showMoreButton.addEventListener('click', () => {
            showMoreButton.addEventListener('click', () => {
                const nextCards = hiddenCards.splice(0, cardsToShow); 
                nextCards.forEach(card => card.classList.remove('visually-hidden'));
              
                if (hiddenCards.length === 0) {
                  showMoreButton.style.display = 'none';
                }
              })
           });
       } else {
           console.error("Кнопка 'Показать еще' не найдена!");
       }

});