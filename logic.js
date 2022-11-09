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
    res = re.replace(/oo/gi, 'ꝏ');
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
    re = res;
    res = re.replace(/fl/gi, 'ﬂ');
    re = res;
    res = re.replace(/ts/gi, 'ʦ');
    re = res;
    res = re.replace(/ls/gi, 'ʪ');
    re = res;
    res = re.replace(/ay/gi, 'ꜽ');
    re = res;
    res = re.replace(/av/gi, 'ꜹ');
    re = res;
    res = re.replace(/au/gi, 'ꜷ');
    re = res;
    res = re.replace(/ft/gi, 'ﬅ');
    re = res;
    res = re.replace(/ff/gi, 'ﬀ');

    tweet.value = res;
});