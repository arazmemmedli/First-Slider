let slayt=document.getElementsByClassName("slayt")

let slaytSayisi=slayt.length

let slaytNo= 0;

slaytGoster(slaytNo)

function onceki(){

    slaytNo--

    slaytGoster(slaytNo)

}

function sonraki(){

    slaytNo++

    slaytGoster(slaytNo)
}

function slaytGoster(slaytNumarasi){

    slaytNo=slaytNumarasi;

    if(slaytNumarasi >=slaytSayisi){

        slaytNo= 0;
    }

    if(slaytNumarasi <0){

        slaytNo=slaytSayisi -1;
    }

    for(i= 0;i <slaytSayisi;i++){

        slayt[i].style.display= "none"
    }

    slayt[slaytNo].style.display= "block"
}



