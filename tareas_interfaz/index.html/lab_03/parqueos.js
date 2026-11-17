const cajones = document.querySelectorAll('.cajon');
const txtTotal = document.getElementById('total');
const txtEnMantenimiento = document.getElementById('en-mantenimiento'); 
const txtOcupados = document.getElementById('ocupados');
const txtDisponibles = document.getElementById('disponibles');
const txtPorcentaje = document.getElementById('porcentaje');

cajones.forEach(cajon => {
    let probabilidad = Math.random(); 
    if (probabilidad < 0.3) {
        cajon.classList.add('en-mantenimiento');
    } else if (probabilidad < 0.6) {
        cajon.classList.add('ocupado');
    } else {
        cajon.classList.add('disponible');
    }
});

function actualizarDashboard() {
    let total = cajones.length;
    let enMantenimiento = 0;
    let ocupados = 0;
    let disponibles = 0;

    cajones.forEach(cajon => {
        if (cajon.classList.contains('en-mantenimiento')) {
            enMantenimiento++;
        } else if (cajon.classList.contains('ocupado')) {
            ocupados++;
        } else {
            disponibles++;
        }
    });

    let porcentaje = Math.round((ocupados / total) * 100);

    txtTotal.innerHTML = total;
    txtEnMantenimiento.innerHTML = enMantenimiento;
    txtOcupados.innerHTML = ocupados;
    txtDisponibles.innerHTML = disponibles;
    txtPorcentaje.innerHTML = porcentaje;
}

cajones.forEach(cajon => {
    cajon.onclick = function() {
        cajon.classList.remove('en-mantenimiento', 'ocupado', 'disponible');

        let probabilidad = Math.random(); 
        if (probabilidad < 0.3) {
            cajon.classList.add('en-mantenimiento');
        } else if (probabilidad < 0.6) {
            cajon.classList.add('ocupado');
        } else {
            cajon.classList.add('disponible');
        }
        
        actualizarDashboard();
    };
});

setInterval(function() {
    let numeroAlAzar = Math.floor(Math.random() * cajones.length);
    let cajonAleatorio = cajones[numeroAlAzar];

    cajonAleatorio.classList.remove('en-mantenimiento', 'ocupado', 'disponible');
    
    let probabilidad = Math.random(); 
    if (probabilidad < 0.3) {
        cajonAleatorio.classList.add('en-mantenimiento');
    } else if (probabilidad < 0.6) {
        cajonAleatorio.classList.add('ocupado');
    } else {
        cajonAleatorio.classList.add('disponible');
    }
    
    actualizarDashboard();
}, 3500); 

actualizarDashboard();