const socket = io();

// on, para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// Emit para Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jake Peralta',
    mensaje: 'Noice'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});