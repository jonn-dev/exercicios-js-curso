

function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){

    img.src = '../modelo/img-manha.png'
    document.body.style.background = '#D08B3E'
   
}else if(hora >=12 && hora <18){

    img.src = '../modelo/img-tarde.png'
    document.body.style.background = '#FDE386'
    
}else{
   
    img.src = '../modelo/img-noite.png'
    document.body.style.background = '#0B191C'
}
}

// color bom dia: #D08B3E

// color tarde: #FDE386

// color noite: #0B191C