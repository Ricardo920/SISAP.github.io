
function redirigir() {
    var tipoRol = document.getElementById('usuario').value;
    if (tipoRol == 'aprendiz') {
        window.location.href = '/Interfaz_Alumnos/examenes/examen.html';
    }
    if (tipoRol == 'instructor') {
        window.location.href = '/Interfaz_instructores/clases/clase_i.html';
    }

    if (tipoRol == 'administrativo') {
        window.location.href = '/Interfaz_administrativos/registro/registrar/registrar.html';
    }
}