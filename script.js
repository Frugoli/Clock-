function carregar() {
    const horas = new Date()
    let h = horas.getHours()
    let m = horas.getMinutes()
    let s = horas.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    const time = setTimeout(carregar, 1000);
    document.getElementById("msg").innerHTML = "Agora são " + h + ":" + m + ":" + s

    if (h >= 0 && h < 12) {
        document.getElementById("saudacao").innerHTML = "Tenha um ótimo dia!"
        img.src = "assets/Amanhecer.png"
        document.body.style.background = "#686d73"
    } else if (h >= 12 && h < 18) {
        document.getElementById("saudacao").innerHTML = "Tenha uma ótima tarde!"
        img.src = "assets/Entardecer.png"
        document.body.style.background = "#b46d4f"
    } else {
        document.getElementById("saudacao").innerHTML = "Tenha uma ótima noite!"
        img.src = "assets/Anoitecer.png"
        document.body.style.background = "black"
    }
}
function checkTime(i) {
    if (i < 10) { i = `0${i}` };
    return i;
}
