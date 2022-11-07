document.getElementById("copy").addEventListener("click", function() {
    var copytext = document.getElementById("tweet");
    navigator.clipboard.writeText(copytext.value);
});

document.getElementById("menu").addEventListener("click", function() {
    let wins = document.querySelector(".window");
    wins.style.display = "none";
});

document.getElementById("mockingjay").addEventListener("click", function() {
    let wins = document.querySelector(".window");
    wins.style.display = "none";
    document.getElementById("mock").style.display = "block";
    this.style.borderRight = "2px solid rgb(255, 19, 118)";
});