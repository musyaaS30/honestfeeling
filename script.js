function playSound() {
    const sound = document.getElementById("sound");
    sound.play();
}
const image = document.getElementById('image');

    image.addEventListener('click', () => {
      // buat kliknya
      image.classList.add('clicked');

      // loop/pengulangan
      setTimeout(() => {
        image.classList.remove('clicked');
      }, 500); // 0.5
    });
