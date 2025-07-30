// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creamos la lista para guardar los nombres de los amigos
let amigos = [];

// Creamos una función que añada los amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);

    // Mostramos la lista actualizada en pantalla
    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiamos el campo de texto
    input.value = '';
}

// Creamos una función para sortear a nuestro amigo secreto
function sortearAmigo(){
    if(amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];

    // Mostramos el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Esto limpia el resultado anterior
    const elementoResultado = document.createElement("li");
    elementoResultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(elementoResultado);
}
