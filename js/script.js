let sliderIndex = 0;
showDivs(sliderIndex);

function plusDivs(n) {
    sliderIndex += n;
    showDivs(sliderIndex);
}

function showDivs(index) {
    const imgList = document.getElementsByClassName("mySlides");
    if (index >= imgList.length) sliderIndex = 0;
    if (index < 0) sliderIndex = imgList.length - 1;

    for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[sliderIndex].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

// document.addEventListener("DOMContentLoaded", () => {
//     const contactBanner = document.querySelector(".contact-banner");
//     const headlineArticle = document.querySelector(".headline");
//     headlineArticle.after(contactBanner);
// });

document.querySelector('.submit').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form langsung terkirim

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const opsi = document.getElementById('opsi').value;

    if (nama === '') {
        alert('Nama tidak boleh kosong.');
        return;
    } else if (nama.length > 50) {
        alert('Nama tidak boleh lebih dari 50 karakter.');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        alert('Email tidak boleh kosong.');
        return;
    } else if (!emailRegex.test(email)) {
        alert('Masukkan email yang valid (contoh: name@example.com).');
        return;
    }
    if (opsi === '') {
        alert('Harap pilih salah satu opsi.');
        return;
    }

    alert('Form berhasil dikirim!');
});
