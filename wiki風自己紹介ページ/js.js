document.addEventListener("DOMContentLoaded", function() {
    var imgnum = Math.floor(Math.random() * 9) + 1;
    var img = "./image/今日の一枚/" + imgnum + ".jpg";
    var TodaysPictures = document.getElementById("今日の一枚の写真");
    TodaysPictures.src = img;

    console.log(imgnum,img,TodaysPictures);

    var exp = document.getElementById("今日の一枚の説明");
    if(imgnum == 1){
        exp.innerHTML = "スガキヤラーメン";
    }
    if(imgnum == 2){
        exp.innerHTML = "天下一品";
    }
    if(imgnum == 3){
        exp.innerHTML = "シロノワール";
    }
    if(imgnum == 4){
        exp.innerHTML = "うま屋ラーメン";
    }
    if(imgnum == 5){
        exp.innerHTML = "ラーメン横綱";
    }
    if(imgnum == 6){
        exp.innerHTML = "さわやか";
    }
    if(imgnum == 7){
        exp.innerHTML = "ブタメン";
    }
    if(imgnum == 8){
        exp.innerHTML = "なんだっけこれ";
    }
    if(imgnum == 9){
        exp.innerHTML = "大晦日の30分放置カレーメシ";
    }
  })
  