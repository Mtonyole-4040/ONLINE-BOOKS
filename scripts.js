$(document).ready(function () {
    let currentIndex = 0;
    const images = $(".carousel-inner img");
    const totalImages = images.length;

    function showImage(index) {
        let transformValue = -index * 100 + "%";
        $(".carousel-inner").css("transform", "translateX(" + transformValue + ")");
    }

    $(".next").click(function () {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, 3000);
});