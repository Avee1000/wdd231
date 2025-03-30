
//////////////////////////////////////////////////////////
const searchButton = document.querySelector('.search');
searchButton.addEventListener('click', () => {
  document.querySelector('#searchBoxContainer').classList.add('searchActive');
  document.body.style.overflow = 'hidden';
})

const closeSearchButton = document.querySelector('.close');
closeSearchButton.addEventListener('click', () => {
  document.querySelector('#searchBoxContainer').classList.remove('searchActive');
  document.body.style.overflow = '';
})
