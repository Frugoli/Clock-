
/*function carregar ()    {
    const msg = document.getElementById("msg")
    const img = document.getElementById("img")
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12)  {
        saudacao.innerHTML = "Tenha um ótimo dia!"
        img.src = "Amanhecer.png"
        document.body.style.background = "#686d73"
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = "Tenha uma ótima tarde!"
        img.src = "Entardecer.png"
        document.body.style.background = "#b46d4f"
    } else  {
        saudacao.innerHTML = "Tenha uma ótima noite!"
        img.src = "Anoitecer.png"
        document.body.style.background = "black"
    }
}
*/

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
        img.src = "Amanhecer.png"
        document.body.style.background = "#686d73"
    } else if (h >= 12 && h < 18) {
        document.getElementById("saudacao").innerHTML = "Tenha uma ótima tarde!"
        img.src = "Entardecer.png"
        document.body.style.background = "#b46d4f"
    } else {
        document.getElementById("saudacao").innerHTML = "Tenha uma ótima noite!"
        img.src = "Anoitecer.png"
        document.body.style.background = "black"
    }
}
function checkTime(i) {
    if (i < 10) { i = `0${i}` };
    return i;
}
