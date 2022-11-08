var tweet = document.getElementById("tweet");

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
});

document.getElementById("regex").addEventListener('click', function () {
    var re = tweet.value;
    var res = re.replace(/oe/gi, 'œ');
    re = res;
    res = re.replace(/oo/gi, 'ꚙ');
    re = res;
    res = re.replace(/ae/gi, 'æ');
    re = res;
    res = re.replace(/ij/gi, 'ĳ');
    re = res;
    res = re.replace(/hu/gi, 'ƕ');
    re = res;
    res = re.replace(/dz/gi, 'ǳ');
    re = res;
    res = re.replace(/nj/gi, 'ǌ');
    re = res;
    res = re.replace(/bl/gi, 'Ы');
    re = res;
    res = re.replace(/oy/gi, 'ѹ');

    tweet.value = res;
});