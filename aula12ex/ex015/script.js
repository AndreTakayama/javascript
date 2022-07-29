function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12){
                'Criança'
                    img.setAttribute('src', 'foto-bebe-m.png')
                } else if (idade < 18) {
                    'Adolescente'
                    img.setAttribute('src', 'foto-jovem-m.png')
                } else if (idade < 60) {
                    'Adulto'
                    img.setAttribute('src', 'foto-adulto-m.png')
                } else {
                    'Idoso'
                    img.setAttribute('src', 'foto-idoso-m.png')
                }

            } else if (fsex[1].checked) {
                gênero = 'mulher' 
                if (idade >=0 && idade < 12){
                    'Criança'
                    img.setAttribute('src', 'foto-bebe-f.png')
                    } else if (idade < 22) {
                        'Adolescente'
                        img.setAttribute('src', 'foto-jovem-f.png')
                    } else if (idade < 60) {
                        'Adulta'
                        img.setAttribute('src', 'foto-adulto-f.png')
                    } else {
                        'Idosa'
                        img.setAttribute('src','foto-idoso-f.png')
                    }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}