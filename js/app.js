(() => {

    const lightbox = document.querySelector('.lightbox'),
          lightbox1 = document.querySelector('.lightbox1'),
          An = document.querySelector('#content-4-image').querySelector('img'),
          Chaochao = document.querySelector('#content-3-image').querySelector('img'),
          closeLightbox = document.querySelectorAll('.close_lightbox');

    function openLightBox() {
       lightbox.style.display = "block";
    }

    function openLightBox1() {
        lightbox1.style.display = "block";
     }

    function closeLightBox() {
        lightbox.style.display = "none";
        lightbox1.style.display = "none";
    }

    function closeLightBox1() {
        lightbox.style.display = "none";
    }





    An.addEventListener('click', openLightBox);
    Chaochao.addEventListener('click', openLightBox1);
    closeLightbox[0].addEventListener('click', closeLightBox);
    closeLightbox[1].addEventListener('click', closeLightBox1);
})();   