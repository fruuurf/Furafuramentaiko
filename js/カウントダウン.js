let カウントダウン = setInterval(function(){
    const now = new Date()
    const 引かれる時刻 = new Date(now.getFullYear(), now.getMonth() + 1, 0,'23','59','61')
    const 残り = 引かれる時刻 - now

    if(残り < 0) return false 

    const 日  = Math.floor(残り / 1000 / 60 / 60 / 24)
    const 時間 = Math.floor(残り / 1000 / 60 / 60 ) % 24
    const 分  = Math.floor(残り / 1000 / 60) % 60
    const 秒  = Math.floor(残り / 1000) % 60
    const コンマ = Math.floor(残り / 10) % 100

    const 何年 = now.getFullYear();

    document.getElementById("日").textContent  = 日 
    document.getElementById("時間").textContent = 時間 < 10 ? '0' + 時間 : 時間;
    document.getElementById("分").textContent  = 分 < 10 ? '0' + 分 : 分;
    document.getElementById("秒").textContent  = 秒 < 10 ? '0' + 秒 : 秒;
    document.getElementById("コンマ").textContent  = コンマ < 10 ? '0' + コンマ : コンマ;

    if(何年 ==2023 || 残り < 0) clearInterval(カウントダウン)

}, 10)

let 時計 = setInterval(function(){
    const now2 = new Date()
    
    document.getElementById("now年").textContent = now2.getFullYear();
    document.getElementById("now月").textContent = now2.getMonth() +1;
    document.getElementById("now日").textContent = now2.getDate();
    document.getElementById("now時間").textContent = now2.getHours() < 10 ? '0' + now2.getHours() : now2.getHours();
    document.getElementById("now分").textContent = now2.getMinutes() < 10 ? '0' + now2.getMinutes() : now2.getMinutes();
    document.getElementById("now秒").textContent = now2.getSeconds() < 10 ? '0' +  now2.getSeconds() : now2.getSeconds();

}, 10)