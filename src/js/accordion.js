const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    content.style.display = content.style.display === 'block' ? 'none' : 'block';

    header.classList.toggle('active');

    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.accordion-content').style.display = 'none';
        otherItem.querySelector('.accordion-header').classList.remove('active');
      }
    });
  });
});

