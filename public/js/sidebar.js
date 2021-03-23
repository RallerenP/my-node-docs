window.addEventListener('load', () => {
  const navitems = document.querySelectorAll('#sidebar > div');

  navitems.forEach(item => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('open');
    })
  })

})
