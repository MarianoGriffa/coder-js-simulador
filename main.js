
//Simulador Interactivo
/*  
1. Validamos si la persona puede entrar o no al boliche, dependiendo de la edad que le pasemos al prompt.
 2. Dependiendo a la hora que ingresa, paga o no la entrada.
*/

const validarCliente = (horario) => { 
  let free = false;
  let edadBase = 18; 
  let horaApertura = 0;
  let horaFreeMax = 2; 
  let horaCierre = 7;   
  let edad = parseInt(prompt("¿Cual es tu edad?")); 
 
   if (edad >= edadBase) { 
      if (horario <= horaFreeMax && horario >= horaApertura && free === false) {
            console.log("Podes pasar gratis porque es antes de 2 AM");
            free = true;
      } else if(horario >= horaCierre && free === false) {
           console.log("Son las "+ horario +":00Hs ya cerramos");    
            free= true;    
      }else {      
        console.log("Son las "+ horario +":00Hs podes pasar, pero tenes que pagar la entrada");   
}         

} else {   
  console.log("No podes pasar, sos menor de edad"); 
  }  
 
} 
 validarCliente(3);       
   
