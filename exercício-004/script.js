function contar(){
    //parte dom/ transformando elementos html em objeto mmanipulavél em js
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('.res')
 //conversão da string em number
    let i = Number(ini.value)
    let fi = Number(fim.value)
    let pass = Number(passo.value)
    //estrutura de repetição for
    for(let c = i; c <= fi; c+= pass){
        res.innerHTML += c + '👉'
    
    }
}