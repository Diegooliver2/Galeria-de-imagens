let imgm = document.getElementsByClassName('imagem');
let i;

setInterval(()=>{
    let aux = imgm[0].src
    console.log(aux);
    
    for(i = 0; i < imgm.length; i++){
        if(i < imgm.length-1){
            imgm[i].src = imgm[i+1].src
        } else {
            imgm[i].src = aux
        }
    }

    i = 0;
}, 4000);
