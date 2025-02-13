var arrayImg=["AsOro.PNG","2Oro.PNG","3Oro.PNG","4Oro.PNG","5Oro.PNG","6Oro.PNG","7Oro.PNG","SOro.PNG","CaOro.PNG","ReyOro.PNG",
                "AsEspadas.PNG","2Espadas.PNG","3Espadas.PNG","4Espadas.PNG","5Espadas.PNG","6Espadas.PNG","7Espadas.PNG","SoEspadas.PNG","CaEspadas.PNG","ReyEspadas.PNG",
                "AsCopas.PNG","2Copas.PNG","3Copas.PNG","4Copas.PNG","5Copas.PNG","6Copas.PNG","7Copas.PNG","SoCopas.PNG","CaCopas.PNG","ReyCopas.PNG",
                "AsBastos.PNG","2Bastos.PNG","3Bastos.PNG","4Bastos.PNG","5Bastos.PNG","6Bastos.PNG","7Bastos.PNG","SoBastos.PNG","CaBastos.PNG","ReyBastos.PNG",
            ];

var arraValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5];
 
var resultadito=0;

var resulMaquina=0;

function puedoSeguir(){
    if(resultadito>7.5){
        document.getElementById("pedidito").disabled=true;
        document.getElementById("result").innerHTML+=" Has perdido!!";
    }else{
        //En caso de que esto no sea así
        //Eso significa que has ganado
        if(resultadito==7.5){
            document.getElementById("pedidito").disabled=true;
            document.getElementById("plantarcito").disabled=true;
        }
    }
}

function plantarse(){
    document.getElementById("pedidito").disabled=true;
    document.getElementById("plantarcito").disabled=true;
    while(resulMaquina<resultado || resulMaquina<=7.5){
        //Turno de la máquina
        //La máquina seguirá pidiendo  hasta que se quede en 7.5 o pierda
        document.getElementById("demo").innerHTML+="<img src='"+ruta+"' width='100px'>";
         document.getElementById("result").innerHTML="Usted lleva: "+resultadito;
    }

}

function pedir(){
    var ale=Math.floor(Math.random()*arrayImg.length);
    ruta="img/"+arrayImg[ale];
    resultadito=parseFloat(arraValor[ale])+resultadito;

    //Para eliminar las cartas ya tomadas
    arrayImg.splice(ale,1);  //Carta, Nº de cartas a eliminar
    arraValor.splice(ale,1);
   // console.log("img/"+arrayImg[ale]);
   // console.log(arraValor[ale]);
    document.getElementById("demo").innerHTML+="<img src='"+ruta+"' width='100px'>";
    document.getElementById("result").innerHTML="Usted lleva: "+resultadito;

    puedoSeguir();

    
}


