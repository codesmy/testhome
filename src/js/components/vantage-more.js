const vantageMore = document.querySelector('.vantage-more');
const vantageWrap = document.querySelector('.hero__vantage');


vantageMore.addEventListener('click', (e) => {
  //console.log(e.target);

  vantageWrap.classList.toggle('vantage-active');

});
