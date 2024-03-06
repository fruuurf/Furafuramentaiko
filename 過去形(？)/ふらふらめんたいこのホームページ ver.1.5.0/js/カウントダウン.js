setInterval(function(){
const now3 = new Date();
const title何年 = now3.getFullYear()+1;

document.title = title何年+"年カウントダウン！";
document.getElementById("タイトル文字").textContent = title何年+"年カウントダウン！";
document.getElementById("カウントダウン文字").textContent = title何年+"年";

},10)

setInterval(function(){
    const now = new Date()
    const 引かれる時刻 = new Date(now.getFullYear()+1, now.getMonth() + 0, 0,'23','59','60')
    const 残り = 引かれる時刻 - now

    if(残り < 0) return false 

    const 日  = Math.floor(残り / 1000 / 60 / 60 / 24);
    const 時間 = Math.floor(残り / 1000 / 60 / 60 ) % 24;
    const 分  = Math.floor(残り / 1000 / 60) % 60;
    const 秒  = Math.floor(残り / 1000) % 60;
    const コンマ = Math.floor(残り / 10) % 100;

    const 何年 = now.getFullYear();
    const 現在年 = 何年;

    document.getElementById("日").textContent  = 日;
    document.getElementById("時間").textContent = 時間 < 10 ? '0' + 時間 : 時間;
    document.getElementById("分").textContent  = 分 < 10 ? '0' + 分 : 分;
    document.getElementById("秒").textContent  = 秒 < 10 ? '0' + 秒 : 秒;
    document.getElementById("コンマ").textContent  = コンマ < 10 ? '0' + コンマ : コンマ;

    if(何年 == 現在年+1 || 残り < 0){
        clearInterval(カウントダウン);
        document.getElementById("日").textContent  = '0';
        document.getElementById("時間").textContent = '00';
        document.getElementById("分").textContent  = '00';
        document.getElementById("秒").textContent  = '00';
        document.getElementById("コンマ").textContent  = '00';
    }

}, 10)

setInterval(function(){
    const now2 = new Date()
    
    document.getElementById("now年").textContent = now2.getFullYear();
    document.getElementById("now月").textContent = now2.getMonth() +1;
    document.getElementById("now日").textContent = now2.getDate();
    document.getElementById("now時間").textContent = now2.getHours() < 10 ? '0' + now2.getHours() : now2.getHours();
    document.getElementById("now分").textContent = now2.getMinutes() < 10 ? '0' + now2.getMinutes() : now2.getMinutes();
    document.getElementById("now秒").textContent = now2.getSeconds() < 10 ? '0' +  now2.getSeconds() : now2.getSeconds();

}, 10)