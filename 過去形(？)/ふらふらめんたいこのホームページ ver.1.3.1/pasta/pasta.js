var p,s,t,pa,pas,past,pasta;
console.log("s = " +s);

var pasta_music = new Audio("pasta.mp3");

function make_pasta(){
    document.getElementById('title').style.display = "none";
    document.getElementById('main').style.display = "block";

    document.getElementById('pasta').innerHTML = "";
    pasta = "";

    for (pas=0; pas<10; pas++){
        s = Math.floor(Math.random() * 10 + 2);
        past = "";
        for (t=1; t<s; t++){
            p = Math.floor(Math.random() * 10);
            if(p <= 3){
                pa = "パスタ";
            }
            else if(p <= 6){
                pa = "作った";
            }
            else{
                pa = "お前";
            }
            past = past + pa
            console.log("p = "+p);
            console.log("past = "+past);
        }
        pasta = pasta + "<br>" + past;
        console.log("pasta = " + pasta);
        document.getElementById('pasta').innerHTML = pasta;
    }

    var pasta_count = ( pasta.match( /パスタ作ったお前/g ) || [] ).length ;

    if (pasta.match("パスタ作ったお前")){
        document.getElementById('pasta_search').innerHTML = "<br><br>パスタが" + pasta_count + "個発見されました！";
        pasta_music.currentTime = 0;
        pasta_music.play();
    }
    else{
        document.getElementById('pasta_search').innerHTML = "<br><br>パスタは見つかりませんでした...";
    }
}