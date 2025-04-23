function lerEntrada(){
    document.getElementById("resp").innerHTML = ""

    var idade = document.getElementById("idade").value;
    if(idade != "" && idade != undefined && idade != null) {
    document.getElementById("resp").innerHTML = `Idade Informada: ${idade}`;
    votacao(idade);
    }
}
function votacao(idade){
    if(idade < 18) {
     document.getElementById("resp").innerHTML += "div class=`tile` >A pessoa é menor de idade.</div>";
     document.getElementById("resp").innerHTML += "div class=`tile` >A pessoa não pode votar.</div>";
    }
     else{
    document.getElementById("resp").innerHTML += "div class=`tile` > A pessoa é maior de idade.<div>";
    document.getElementById("resp").innerHTML += "div class=`tile` > A pessoa pode votar.<div>";
     }
}