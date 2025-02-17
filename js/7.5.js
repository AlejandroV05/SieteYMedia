var arrayImg=["AsOro.PNG","2Oro.PNG","3Oro.PNG","4Oro.PNG","5Oro.PNG","6Oro.PNG","7Oro.PNG","SOro.PNG","CaOro.PNG","ReyOro.PNG",
                "AsEspadas.PNG","2Espadas.PNG","3Espadas.PNG","4Espadas.PNG","5Espadas.PNG","6Espadas.PNG","7Espadas.PNG","SoEspadas.PNG","CaEspadas.PNG","ReyEspadas.PNG",
                "AsCopas.PNG","2Copas.PNG","3Copas.PNG","4Copas.PNG","5Copas.PNG","6Copas.PNG","7Copas.PNG","SoCopas.PNG","CaCopas.PNG","ReyCopas.PNG",
                "AsBastos.PNG","2Bastos.PNG","3Bastos.PNG","4Bastos.PNG","5Bastos.PNG","6Bastos.PNG","7Bastos.PNG","SoBastos.PNG","CaBastos.PNG","ReyBastos.PNG",
            ];

var arraValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5];
 
var resultadito=0;  //Nuestro puntaje

var resulMaquina; //Puntaje de la máquina

var stop=false; //Booleano para detener a la máquina de pedir cartas

var ale;

function puedoSeguir(){
    if(resultadito>7.5){
        document.getElementById("pedidito").disabled=true;
        document.getElementById("plantarcito").disabled=true;
        document.getElementById("result").innerHTML+=" Has perdido!!";
    }else{
        //En caso de que esto no sea así
        //Eso significa que has ganado
        if(resultadito==7.5){
            //Iniciamos el turno de la máquina
            //Iniciaremos la función 'plantarse'
            plantarse();
        }
    }
}

function puedeSeguir(){
    //Si la máquina supera el porcentaje máximo, o es menor que el nuestro(siempre y cuando el nuestro se y gual o menor a 7.5), habremos ganado
    if(resulMaquina<resultadito  || resulMaquina>7.5){
        stop=true;  //Detenemos el bucle 
        document.getElementById("veredicto").innerHTML+=" Has ganado!";
    }
    //Si la máquina tiene 7.5, habremos perdido
    if(resulMaquina==7.5){
        stop=true;  //Detenemos el bucle
        document.getElementById("veredicto").innerHTML+=" Has perdido!"; 
    }
    //Si el resultado de la máquina es igual al nuestro, hemos perdido
    if(resulMaquina>=resultadito){
        stop=true;  //Detenemos el bucle
        document.getElementById("veredicto").innerHTML+=" Has perdido!"; 
    }
}

function plantarse(){
    resulMaquina=0;
    //Desactivamos ambos botones para evitar que el usuario siga jugando
    document.getElementById("pedidito").disabled=true;
    document.getElementById("plantarcito").disabled=true;
    //Es el turno de la máquina
    do{
        //Pedirá una carta
        ale=Math.floor(Math.random()*arrayImg.length);
        resulMaquina=parseFloat(arraValor[ale])+resulMaquina;
        arraValor.splice(ale,1);

        //Comprobamos si la máquina puede seguir
        puedeSeguir();
    }while(resulMaquina<=7.5 && !stop)
    //Mostramos el resultado de la máquina
    document.getElementById("resultMaquina").innerHTML="Puntos de la máquina "+resulMaquina;

}

function pedir(){
    ale=Math.floor(Math.random()*arrayImg.length);  //Tomamos una carta aleatoria
    ruta="img/"+arrayImg[ale];  //Tomamaos la imágen de esa carta aleatoria
    resultadito=parseFloat(arraValor[ale])+resultadito; //Tomamos el valor de esa carta aleatoria

    //Para eliminar las cartas ya tomadas
    arrayImg.splice(ale,1);  //Carta, Nº de cartas a eliminar
    arraValor.splice(ale,1);
   // console.log("img/"+arrayImg[ale]);
   // console.log(arraValor[ale]);
    document.getElementById("demo").innerHTML+="<img src='"+ruta+"' width='200px'>"; //Mostramos la carta
    document.getElementById("result").innerHTML="Usted lleva: "+resultadito;    //Mostramos el resultado

    puedoSeguir();  //Comprobamos si podemos seguir

    
}


