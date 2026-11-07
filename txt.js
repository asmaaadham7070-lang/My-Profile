const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // بيمنع الصفحة تعيد تحميل نفسها

    // جلب القيم اللي العميل كتبها
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const message = document.getElementById('clientMessage').value;

    // رقم واتساب بتاعك بالرمز الدولي
    const phoneNumber = '+201001677943'; // استبدلي الرقم برقمك

    // ترتيب النص اللي هيوصلك على الواتساب
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    // فتح رابط الواتساب بالرسالة الجاهزة
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
});