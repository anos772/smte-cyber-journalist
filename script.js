function sayHello() {
    alert("นี่คือเบาะแสจากหนังสือสายลับไซเบอร์!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("book").onclick = sayHello;
});