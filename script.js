// Variable global para el nombre
let usuario = "";

function cambiarVista(idVista) {
    document.querySelectorAll('.pantalla').forEach(p => p.style.display = 'none');
    document.getElementById(idVista).style.display = 'flex';
}

function guardarUsuario() {
    usuario = document.getElementById('input-alias').value;
    if(usuario) cambiarVista('vista-menu');
    else alert("Por favor, ingresa un apodo");
}

function seleccionarModo(modo) {
    cambiarVista('vista-jugadores');
}

function irASalas(num) {
    cambiarVista('vista-salas');
    // Aquí después cargaremos las salas de Firebase
}
