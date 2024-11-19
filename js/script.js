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

