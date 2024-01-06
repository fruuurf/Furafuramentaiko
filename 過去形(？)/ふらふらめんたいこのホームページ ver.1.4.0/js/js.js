document.addEventListener("DOMContentLoaded", function() {
    fetch("./include/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
    fetch("./include/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
  
document.addEventListener("DOMContentLoaded", function() {
    var backgroundimgnum = Math.floor(Math.random() * 24) + 1;
    var backgroundimg = "../css/images/background/" + backgroundimgnum + ".jpg";
    var background = document.getElementById("background");
    background.style.backgroundImage = "url('" + backgroundimg + "')";
})

window.onload = function(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
        var pagecolor = "dark"; 
        //ダークだったら変数を"dark"にする
    }
    else{
        var pagecolor = "white";
        document.getElementById("YouTube").src="css/images/youtube_social_icon_red.png";
        document.getElementById("YouTubeSub").src="css/images/youtube_social_icon_red.png";
        document.getElementById("YouTubeLive").src="css/images/youtube_social_icon_red.png";
        document.getElementById("Twitter").src="css/images/2021 Twitter logo - blue.png";
        document.getElementById("Discord").src="css/images/discord-mark-blue.png";
        document.getElementById("github").src="css/images/GitHub-Mark-64px.png";
        document.getElementById("pixiv").src="css/images/pixiv.png";
        document.getElementById("YouTubebo").src="css/images/youtube_social_icon_red.png";
        document.getElementById("Twitterbo").src="css/images/2021 Twitter logo - blue.png";
        document.getElementById("Discordbo").src="css/images/discord-mark-blue.png";
        document.getElementById("githubbo").src="css/images/GitHub-Mark-64px.png";
        document.getElementById("pixivbo").src="css/images/pixiv.png";
        //ダーク以外だったら変数を"white"にして、アイコンの色を変える
}}

//次のバージョンでindexでこれ読み込むようにしといて
//indexのgithubのidは違う奴にしてるから変えといて