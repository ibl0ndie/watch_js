function runner() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let p = "P.M.";
    if(hour < 12) {
        p = "A.M.";
    }
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 12) {
        second = "0" + second;
    }
    if(hour > 12) {
        hour -= 12;
    }
    let show = hour + ":" + minute + ":" + second + " " + p;
    

    document.getElementById("clock").textContent = show;
    setTimeout(runner,1000);
}
runner();