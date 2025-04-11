// ضبط التكبير والتصغير
let currentZoom = 1;

document.getElementById("zoom-in").addEventListener("click", () => {
    currentZoom += 0.1; // زيادة نسبة التكبير
    document.body.style.transform = `scale(${currentZoom})`;
    document.body.style.transformOrigin = "top center"; // نقطة الأصل
});

document.getElementById("zoom-out").addEventListener("click", () => {
    if (currentZoom > 0.5) { // منع التصغير الزائد
        currentZoom -= 0.1; // تقليل نسبة التكبير
        document.body.style.transform = `scale(${currentZoom})`;
        document.body.style.transformOrigin = "top center"; // نقطة الأصل
    }
});

document.getElementById("reset").addEventListener("click", () => {
    currentZoom = 1; // إعادة التكبير للوضع الافتراضي
    document.body.style.transform = "scale(1)";
});
