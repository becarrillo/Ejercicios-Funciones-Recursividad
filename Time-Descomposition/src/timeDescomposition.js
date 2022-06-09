var _a;
var results = [];
function descompose(h, m, s) {
    var sec = Math.round((s % 3600) % 60); //  cada que llamamos descompose calcula la entrada de segundos dividida entre 3600 segundos
    var mins = Math.round(m + ((s % 3600) / 60)); //  El resultado de módulo de la entrada s entre 3600 seg (1 h) dividido entre 60
    var hours = Math.round(h + (s / 3600)); // El resultado del resíduo entre entrada y 3600 (1 min) y el resíduo éste a su vez con 60 da los segundos
    results.push(hours); // Se agregan las variables a un nuevo arreglo de enteros
    results.push(mins); // Se agregan las variables a un nuevo arreglo de enteros
    results.push(sec);
}
function isNull(arg) {
    return typeof arg === null;
}
function isString(arg) {
    return typeof arg === 'string';
}
var secondsInput = window.prompt("¿Cuántos segundos en número quieres descomponer en horas con minutos con segundos? ");
if (!isNull(secondsInput) && isString(secondsInput)) {
    var secondsInt = parseInt(secondsInput); // Entrada no nula & tipo string? => guardamos en nueva variable tipo numérico
    var mins = 0; // Inicializamos variable minutos en 0
    var h = 0; // Inicializamos variable horas en 0
    descompose(h, mins, secondsInt); // Realizamos operaciones (horas, minutos, segundos)
    if (!isNull(secondsInput) && !isNull(String(mins)) && !isNull(String(h))) {
        (_a = document.querySelector('#result')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', String(results[0]) + " horas " + String(results[1]) + " mins " + String(results[2]) + " seg");
    }
}
