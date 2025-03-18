// إضافة تأثير بسيط عند النقر على أي رابط في القائمة
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        alert("تم النقر على " + this.textContent);
    });
});
