function contar(){
    //parte dom/ transformando elementos html em objeto mmanipulavél em js
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('.res')

     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
         alert('[ERROR] Campos Vazios')
    }else{
        res.innerHTML ='contando'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

    }
}
    
       
       
    
    
   
   

 
   
   
