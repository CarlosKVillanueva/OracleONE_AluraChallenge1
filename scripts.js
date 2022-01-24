
let btnEncriptar = document.querySelector('#btn-encriptar')

btnEncriptar.addEventListener("click", function(e) {
    e.preventDefault()

    let mensaje = document.getElementById('input-texto').value;
   
    let aEncrypt = mensaje.replace(/[a]/g, "ai");
    let eEncrypt = aEncrypt.replace(/[e]/g, "enter");
    let iEncrypt = eEncrypt.replace(/[i]/g, "imes");
    let oEncrypt = iEncrypt.replace(/[o]/g, "ober");
    let uEncrypt = oEncrypt.replace(/[u]/g, "ufat");
    

    document.getElementById('msg').value = uEncrypt
    
} )

let btnDesencriptar = document.querySelector('#btn-desencriptar')
btnDesencriptar.addEventListener('click', (e) => {
    e.preventDefault()

    let mensaje = document.getElementById('input-texto').value;
   
    let aDecrypt = mensaje.replace(/ai/g, "a");
    let eDecrypt = aDecrypt.replace(/enter/g, "e");
    let iDecrypt = eDecrypt.replace(/imes/g, "i");
    let oDecrypt = iDecrypt.replace(/ober/g, "o");
    let uDecrypt = oDecrypt.replace(/ufat/g, "u");
    let mesDecrypt = uDecrypt.replace(/mes/g, "");

    document.getElementById('msg').value = mesDecrypt
   
})



let btnCopiar = document.querySelector('#btn-copy')

btnCopiar.addEventListener("click", function (e) {
    
    let textoCopiado = document.getElementById('msg')
    textoCopiado.select()
    navigator.clipboard.writeText(textoCopiado.value)  
    location.reload()
})