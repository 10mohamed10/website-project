document.addEventListener('DOMContentLoaded', function() {
    var showImage2Btn = document.getElementById('showImage2Btn');
    var showImage3Btn = document.getElementById('showImage3Btn');
    var myImage = document.getElementById('myImage');
    var myImage2 = document.getElementById('myImage2');
    var myImage3 = document.getElementById('myImage3');
    
    // عند النقر على الزر لعرض الصورة 1
    showImageBtn.addEventListener('click', function() {
        myImage.style.display = 'block'; // إخفاء الصورة 1
        myImage2.style.display = 'none'; // عرض الصورة 2
        myImage3.style.display = 'none'; // إخفاء الصورة 3
    });

    // عند النقر على الزر لعرض الصورة 2
    showImage2Btn.addEventListener('click', function() {
        myImage.style.display = 'none'; // إخفاء الصورة 1
        myImage2.style.display = 'block'; // عرض الصورة 2
        myImage3.style.display = 'none'; // إخفاء الصورة 3
    });
    
    // عند النقر على الزر لعرض الصورة 3
    showImage3Btn.addEventListener('click', function() {
        myImage.style.display = 'none'; // إخفاء الصورة 1
        myImage2.style.display = 'none'; // إخفاء الصورة 2
        myImage3.style.display = 'block'; // عرض الصورة 3
    });
});
