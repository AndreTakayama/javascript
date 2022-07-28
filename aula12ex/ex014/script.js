function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12) {
        //Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#E7DD83'
        window.document.getElementById('titulo').style.textShadow = '3px 3px 7px rgba(0, 0, 0, 0.700)'
        window.document.getElementById('footer').style.textShadow = '2px 2px 5px rgba(0, 0, 0, 1.000)'
    } else if (hora >=12 && hora < 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#FD6802'
    } else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#021E3E'
    }
}