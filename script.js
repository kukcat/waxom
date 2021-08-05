document.querySelector('.burger_icon').addEventListener('click', showMenu)

let isCros = false

function showMenu () {
    document.querySelector('.burger_header_menu').classList.toggle('show')

    if(isCros){
        document.querySelector('.burger_icon').classList.remove('burger_icon_cros')
        isCros = false
    } else {
        document.querySelector('.burger_icon').classList.add('burger_icon_cros')
        isCros = true
    }

}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

