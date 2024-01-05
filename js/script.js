
function enviar(event){
    event.preventDefault();
    if (validarNombreYCorreo()){
    let=texto="";
    var nombre="Nombre: "+document.getElementById("nombre").value+"\n";
    texto=texto+nombre;
    var correo="Correo: "+document.getElementById("correo").value+"\n";
    texto=texto+correo;
    var telefono="Telefono: "+document.getElementById("telefono").value+"\n";
    texto=texto+telefono;
    var comentario="Comentario: "+document.getElementById("comentario").value+"\n";
    texto=texto+comentario;
    alert(texto);
}
}

function validarNombreYCorreo() {
    // Validacion nombre
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value;
    var nombreRegex = /^[A-Za-z ]+$/;
    var nombreError = document.getElementById('nombreError');

    if (!nombreRegex.test(nombre)) {
        nombreError.textContent = 'Ingrese solo letras y espacios en el nombre.';
        nombreInput.classList.add('campo-invalido');
        mostrarAlerta('¡Formulario no enviado! Por favor, complete los campos correctamente.');
        return false;
    } else {
        nombreError.textContent = '';
        nombreInput.classList.remove('campo-invalido');
    }

    // Validacion correo
    var correoInput = document.getElementById('correo');
    var correo = correoInput.value;
    var correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    var correoError = document.getElementById('correoError');

    if (!correoRegex.test(correo)) {
        correoError.textContent = 'Ingrese un correo electrónico válido.';
        correoInput.classList.add('campo-invalido');
        mostrarAlerta('¡Formulario no enviado! Por favor, complete los campos correctamente.');
        return false;
    } else {
        correoError.textContent = '';
        correoInput.classList.remove('campo-invalido');
    }


    // validar telefono
    var telefonoInput = document.getElementById('telefono');
    var telefono = telefonoInput.value;
    var telefonoRegex = /^\d{10}$/;

    if (!telefonoRegex.test(telefono)) {
        mostrarAlerta('¡Formulario no enviado! El teléfono debe contener exactamente 10 dígitos.');
        telefonoInput.classList.add('campo-invalido');
        return false;
    } else {
        telefonoInput.classList.remove('campo-invalido');
    }

    return true;
}

function validarNombreAlEscribir() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value;
    var nombreRegex = /^[A-Za-z ]*$/;
    var nombreError = document.getElementById('nombreError');

    if (!nombreRegex.test(nombre)) {
        nombreError.textContent = 'Ingrese solo letras y espacios en el nombre.';
        nombreInput.classList.add('campo-invalido');
    } else {
        nombreError.textContent = '';
        nombreInput.classList.remove('campo-invalido');
    }
}

function validarTelefonoSoloNumeros(event) {
    var input = event.target;
    var value = input.value;
    var numericRegex = /^\d*$/;

    if (!numericRegex.test(value)) {
        input.value = value.replace(/[^\d]/g, ''); // Eliminar caracteres no numéricos
    }
}


function mostrarAlerta(mensaje) {
    alert(mensaje);
}

