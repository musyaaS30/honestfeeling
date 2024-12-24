function playSound() {
    const sound = document.getElementById("sound");
    sound.play();
}
const image = document.getElementById('image');

    image.addEventListener('click', () => {
      image.classList.add('clicked');
      setTimeout(() => {
        image.classList.remove('clicked');
      }, 500);
    });
