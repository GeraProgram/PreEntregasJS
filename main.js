//let iva = 1.21
//let nombreCompleto = Number (100);
//alert (nombreCompleto * iva);

//console.log (alert);

let nombre = prompt ("Ingrese Nombre y Apellido");
let dni = prompt ("Ingrese DNI");
let monto = parseInt( prompt (`Hola ${nombre} Dni ${dni} Monto de su prestamo`)) ;
let cuotas = parseInt (prompt ("Cantida de Cuotas"));
let tres = (monto * 1.25);
let seis = (monto * 1.5);
let doce = (monto * 2);
let masdoce = (monto * 3);


if ( cuotas <= 3) {
   alert ( `25% de interes. Total a pagar ${tres}`);
   
 }
    else if (cuotas <= 6 ) {

    alert (`50% de interes. Total a pagar ${seis}`);   
} 
else if ( cuotas <= 12) {
    alert(`100% de interes. Total a pagar ${doce}`);
}
else if (cuotas > 12) { 
    alert (`200% de interes. Total a pagar ${masdoce}`);
}

