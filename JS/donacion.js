const registro_form=document.querySelector('#registro_form')

registro_form.addEventListener('submit', (e)=>  { 
 e.preventDefault();
 const name=document.querySelector('#name').value;
 const email=document.querySelector('#email').value;
 const telefono=document.querySelector('#telefono').value;
 const cantidad=document.querySelector('#cantidad').value;
 const dueno=document.querySelector('#duenotarjeta').value;
 const ntarjeta=document.querySelector('#numtarjeta').value;
 const fecha=document.querySelector('#fecha').value;
 const csv=document.querySelector('#csv').value;

    const Donacion=JSON.parse(localStorage.getItem('Donacion')) || []

    if(validaTarjeta(ntarjeta)== false){
        return alert("tarjeta no válida");
    }

    Donacion.push({name: name, email: email, telefono: telefono, cantidad: cantidad, dueno:dueno, ntarjeta:ntarjeta, fecha:fecha, csv:csv });
    localStorage.setItem('Donacion',JSON.stringify(Donacion));
    alert("Donacion Exitosa");

window.location.href = '../html/Donacion.html'

}
);

function validaTarjeta( tarjeta ){
    if(tarjeta!='102'){
        console.log("falso")
        return false ;
    }else{
        console.log("verdadero")
        return true;
    }
    
}
