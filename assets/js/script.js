let elemento = document.getElementById(`titulo`)
console.log(elemento)
/* elemento.innerHTML=`Adios` */
elemento.addEventListener(`click`,function(){
    elemento.innerHTML=`Adios`
    elemento.className= `colorfondo`        
});
elemento.className= `colorfondo2`    

let elementop = document.getElementById(`contenedorparrafoID`)
elementop.innerHTML = `<p>Parrafo ingresao desde JS</p>`

let elementobtn = document.getElementById(`btnlogin`)
console.log(elementobtn)
let contador = 0
elementobtn.addEventListener(`click`,function(){
    if (contador<3){
        let elementotxtcorreo = document.getElementById(`txtcorreo`)
        let elementotxtclave = document.getElementById(`txtclave`)    
        let elementoerror = document.getElementById(`mensajeerror`)    
        
        if (elementotxtcorreo.value == `a@a.cl` && elementotxtclave.value == `123`){
            console.log(`ingreso exitoso`)
        }
        else{
            contador++
            console.log(`los datos no corresponden`)
        }
    
    }else{
        elementoerror.innerHTML=`<p>acceso bloqueado</p>`
        alert(`acceso bloqueado`)
    }
    
})

