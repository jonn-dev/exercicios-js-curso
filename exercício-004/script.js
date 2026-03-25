function contar(){
    //parte dom/ transformando elementos html em objeto mmanipulavél em js
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    var res = document.querySelector('.res')

     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
         alert('[ERROR] Campos Vazios')
    }else{
        res.innerHTML ='contando'
       let i = Number(ini.value)
       let fi = Number(fim.value)
       let pass = Number(passo.value)
       for(let c = i; c <= fi; c += pass){
           res.innerHTML += c + '✅'
       }
     
    }
    }
    
       
       
    
    
   }
   

 
   
   
