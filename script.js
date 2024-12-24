function playSound() {
    const sound = document.getElementById("sound");
    sound.play();
}
const image = document.getElementById('image');

    image.addEventListener('click', () => {
      // Tambahkan class 'clicked' untuk memicu animasi
      image.classList.add('clicked');

      // Hapus class setelah animasi selesai agar bisa diulang
      setTimeout(() => {
        image.classList.remove('clicked');
      }, 500); // Durasi animasi 0.5 detik
    });
