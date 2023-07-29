
let nombre = prompt ("Ingrese Nombre y Apellido");
let dni = prompt ("Ingrese DNI");
let monto = parseInt( prompt (`Hola ${nombre} Dni ${dni} Monto de su prestamo`)) ;
while (monto < 0) {
    alert ("Monto invalido")
    monto = parseInt( prompt (`Hola ${nombre} Dni ${dni} Monto de su prestamo`)) ;
}
let cuotas = parseInt (prompt ("Cantida de Cuotas"));
while (cuotas > 24) {
    alert ("Maximo 24 cuotas")
    cuotas = parseInt (prompt ("Cantida de Cuotas"));
}

const xcuotas  = (a , b) => a * b;




if ( cuotas <= 3) {
   alert ( `25% de interes. Total a pagar ${xcuotas (monto , 1.25)}`);
   
} else if (cuotas <= 6 ) {

    alert (`50% de interes. Total a pagar ${xcuotas (monto , 1.5)}`);   

} else if ( cuotas <= 12) {

    alert(`100% de interes. Total a pagar ${xcuotas(monto , 2)}`);
}
else if (cuotas < 24) { 
    alert (`200% de interes. Total a pagar ${xcuotas(monto , 3)}`);
}


